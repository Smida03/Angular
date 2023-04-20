import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { DashbordClientComponent } from './dashbord-client/dashbord-client.component';
import { DashbordPartenaireComponent } from './dashbord-partenaire/dashbord-partenaire.component';
import { ReservationComponent } from './formulaire-reservation/reservation.component';
import { MonProfilComponent } from './profil-client/mon-profil.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"inscription",component:InscriptionComponent},
  {path:"TAKWIRA",component:HomeComponent},
  {path:"dashboard-client", component: DashbordClientComponent},
  {path:"dashboard-partenaire", component: DashbordPartenaireComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
