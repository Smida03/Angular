import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashbord-client',
  templateUrl: './dashbord-client.component.html',
  styleUrls: ['./dashbord-client.component.css']
})
export class DashbordClientComponent{
  currentPage: string = 'reserver'; // Initialiser currentPage à 'reserver' par défaut

onNavLinkClicked(page: string) {
  this.currentPage = page; // Mettre à jour la valeur de currentPage avec la page cliquée dans la barre de navigation
}
}
