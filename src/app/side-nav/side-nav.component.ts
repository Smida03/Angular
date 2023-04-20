import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { DashbordClientComponent } from '../dashbord-client/dashbord-client.component';
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  @Output() navLinkClicked = new EventEmitter<string>(); // Émetteur d'événement pour gérer le clic sur les liens de navigation

  onNavLinkClicked(currentPage: string) {
    this.navLinkClicked.emit(currentPage); // Émettre l'événement navLinkClicked avec la valeur de la page cliquée
  }
}
