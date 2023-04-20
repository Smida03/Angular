import { Component } from '@angular/core';

@Component({
  selector: 'app-dashbord-partenaire',
  templateUrl: './dashbord-partenaire.component.html',
  styleUrls: ['./dashbord-partenaire.component.css']
})
export class DashbordPartenaireComponent {
  currentPage: string = 'espace-terrains'; // Initialiser currentPage à 'reserver' par défaut

  onNavLinkClicked(page: string) {
    this.currentPage = page; // Mettre à jour la valeur de currentPage avec la page cliquée dans la barre de navigation
  }
}
