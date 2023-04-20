import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { InscriptionModule } from './inscription/inscription.module';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DashbordClientComponent } from './dashbord-client/dashbord-client.component';
import { DashbordPartenaireComponent } from './dashbord-partenaire/dashbord-partenaire.component';
import { DashbordAdminMarketingComponent } from './dashbord-admin-marketing/dashbord-admin-marketing.component';
import { DashbordSuperAdminComponent } from './dashbord-super-admin/dashbord-super-admin.component';
import { HeaderDComponent } from './header-d/header-d.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { ReservationComponent } from './formulaire-reservation/reservation.component';
import { SideNavPComponent } from './side-nav-p/side-nav-p.component';
import { MonProfilComponent } from './profil-client/mon-profil.component';
import { MesResesrvationsComponent } from './mes-resesrvations/mes-resesrvations.component';
import { CompetitionsComponent } from './competitions/competitions.component';
import { MesParticipationsComponent } from './mes-participations/mes-participations.component';
import { ReserverComponent } from './reserver/reserver.component';
import { EspaceTerrainComponent } from './espace-terrain/espace-terrain.component';
import { EspaceCompetitionComponent } from './espace-competition/espace-competition.component';
import { ProfilPartenaireComponent } from './profil-partenaire/profil-partenaire.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    DashbordClientComponent,
    DashbordPartenaireComponent,
    DashbordAdminMarketingComponent,
    DashbordSuperAdminComponent,
    HeaderDComponent,
    SideNavComponent,
    ReservationComponent,
    SideNavPComponent,
    MonProfilComponent,
    MesResesrvationsComponent,
    CompetitionsComponent,
    MesParticipationsComponent,
    ReserverComponent,
    EspaceTerrainComponent,
    EspaceCompetitionComponent,
    ProfilPartenaireComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    InscriptionModule,
    HttpClientModule
  ],
  exports:[SideNavComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
