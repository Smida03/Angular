import { Component, OnInit } from '@angular/core';
import { Terrain } from '../models/terrain.model';
import { TerrainService } from '../service/terrain.service';
import { utilisateur } from '../models/utilisateur.model';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-espace-terrain',
  templateUrl: './espace-terrain.component.html',
  styleUrls: ['./espace-terrain.component.css']
})
export class EspaceTerrainComponent {
  terrains!: Terrain[];
  partenaireId!: number;
  terrainForm!: FormGroup;
  terrainIdToEdit!: number | null;

  constructor(private terrainService: TerrainService, private route: ActivatedRoute, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.partenaireId = 50;
    // this.partenaireId = this.route.snapshot.params['id']; // Récupérer l'id du partenaire depuis l'URL
    this.getTerrainsByIdPartenaire();
    this.createTerrainForm();
  }

  getTerrainsByIdPartenaire() {
    this.terrainService.getTerrainsByIdPartenaire(this.partenaireId).subscribe(
      data => {
        this.terrains = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  createTerrainForm() {
    this.terrainForm = this.formBuilder.group({
      nomDeTerrain: ['', Validators.required],
      description: ['', Validators.required],
      localisation: ['', Validators.required],
      image: ['', Validators.required]
    });
  }

  onFileChange(event: Event) {
    // Gérer la sélection d'un fichier d'image
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      const file = inputElement.files[0];
      const imageControl = this.terrainForm.get('image');
      if (imageControl) {
        imageControl.setValue(file);
      }
    }
  }

  onSubmit() {
    const nomDeTerrain = this.terrainForm.get('nomDeTerrain')?.value;
    const description = this.terrainForm.get('description')?.value;
    const localisation = this.terrainForm.get('localisation')?.value;
    const image = this.terrainForm.get('image')?.value;
  
    if (nomDeTerrain && description && localisation && image) {
      const formData = new FormData();
      formData.append('nomDeTerrain', nomDeTerrain);
      formData.append('description', description);
      formData.append('localisation', localisation);
      formData.append('image', image);
  
      this.terrainService.saveTerrain(this.partenaireId, formData).subscribe(
        data => {
          console.log('Terrain créé avec succès:', data);
          this.getTerrainsByIdPartenaire(); // Mettre à jour la liste des terrains
          this.terrainForm.reset(); // Réinitialiser le formulaire
        },
        error => {
          console.log('Erreur lors de la création du terrain:', error);
        }
      );
    }
  }

  onUpdate(id: number) {
    // Mettre à jour le terrain
    this.terrainIdToEdit = id;
    const nomDeTerrain = this.terrainForm.get('nomDeTerrain')?.value;
    const description = this.terrainForm.get('description')?.value;
    const localisation = this.terrainForm.get('localisation')?.value;
    const image = this.terrainForm.get('image')?.value;
  
    if (nomDeTerrain && description && localisation && image) {
      const formData = new FormData();
      formData.append('nomDeTerrain', nomDeTerrain);
      formData.append('description', description);
      formData.append('localisation', localisation);
      formData.append('image', image);
  
      this.terrainService.updateTerrain(id, formData).subscribe(
        data => {
          console.log('Terrain mis à jour avec succès:', data);
          this.getTerrainsByIdPartenaire(); // Mettre à jour la liste des terrains
          this.terrainForm.reset(); // Réinitialiser le formulaire
        },
        error => {
          console.log('Erreur lors de la mise à jour du terrain:', error);
        }
      );
    }
  }
      
  onDelete(id: number) {
    // Supprimer le terrain
    this.terrainService.deleteTerrain(id).subscribe(
      data => {
        console.log('Terrain supprimé avec succès:', data);
        this.getTerrainsByIdPartenaire(); // Mettre à jour la liste des terrains
      },
      error => {
        console.log('Erreur lors de la suppression du terrain:', error);
      }
    );
  }
      
      
      getTerrainImageUrl(terrain: Terrain): any {
        return this.terrainService.getTerrainImageUrl(terrain);
      }

      onCancel() {
        // Réinitialiser la variable terrainIdToEdit à null pour annuler la modification
        this.terrainIdToEdit = null;
    
        // ...
      }
      
}
