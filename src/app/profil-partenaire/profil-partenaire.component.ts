import { Component } from '@angular/core';
import { utilisateur } from '../models/utilisateur.model';
import { PartenaireService } from '../service/partenaire.service';

@Component({
  selector: 'app-profil-partenaire',
  templateUrl: './profil-partenaire.component.html',
  styleUrls: ['./profil-partenaire.component.css']
})
export class ProfilPartenaireComponent {
  partenaire!: utilisateur;
  isEditMode: boolean = false;

  constructor(private partenaireservice: PartenaireService) { }

  ngOnInit() {
    
    const partenaireId = 46; 
    this.partenaireservice.getPartenaireById(partenaireId).subscribe(
      partenaire => this.partenaire = partenaire,
      error => console.error(error)
    );
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  saveChanges() {
    // Mettre à jour les données du client
    this.partenaireservice.updatePartenaire(this.partenaire).subscribe(
      client => {
        this.partenaire = this.partenaire;
        this.isEditMode = false;
      },
      error => console.error(error)
    );
  }
}
