import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-side-nav-p',
  templateUrl: './side-nav-p.component.html',
  styleUrls: ['./side-nav-p.component.css']
})
export class SideNavPComponent {
  @Output() navLinkClicked = new EventEmitter<string>(); // Émetteur d'événement pour gérer le clic sur les liens de navigation

  onNavLinkClicked(currentPage: string) {
    this.navLinkClicked.emit(currentPage); // Émettre l'événement navLinkClicked avec la valeur de la page cliquée
  }
}
