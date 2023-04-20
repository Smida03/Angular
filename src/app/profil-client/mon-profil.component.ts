import { Component, OnInit } from '@angular/core';
import { utilisateur } from '../models/utilisateur.model';
import { ClientService } from '../service/client.service';

@Component({
  selector: 'app-mon-profil',
  templateUrl: './mon-profil.component.html',
  styleUrls: ['./mon-profil.component.css']
})
export class MonProfilComponent implements OnInit {
  client!: utilisateur;
  isEditMode: boolean = false;

  constructor(private clientService: ClientService) { }

  ngOnInit() {
    // Récupérer les données du client en utilisant son ID
    const clientId = 40; // Remplacez par l'ID du client connecté
    this.clientService.getClientById(clientId).subscribe(
      client => this.client = client,
      error => console.error(error)
    );
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
  }

  saveChanges() {
    // Mettre à jour les données du client
    this.clientService.updateClient(this.client).subscribe(
      client => {
        this.client = client;
        this.isEditMode = false;
      },
      error => console.error(error)
    );
  }
}
