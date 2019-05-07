import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListeSalonsComponent } from './liste-salons/liste-salons.component';
import { ListePrestaComponent } from './liste-presta/liste-presta.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { SalonservicesService } from './salonservices.service';
import { SalonComponent } from './salon/salon.component';
import { Salon } from './model/Salon';
import { CarteSalonsComponent } from './carte-salons/carte-salons.component';
import { EspacePersoClientComponent } from './espace-perso-client/espace-perso-client.component';
import { EspacePersoManagerComponent } from './espace-perso-manager/espace-perso-manager.component';
import { EspaceNonUserComponent } from './espace-non-user/espace-non-user.component';
import { EmailService } from './email-service/email.service';
import { EspaceAdminComponent } from './espace-admin/espace-admin.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material';
import { GestionPrestationComponent } from './gestion-prestation/gestion-prestation.component';
import { AproposComponent } from './apropos/apropos.component';
import { ModifAdminComponent } from './modif-admin/modif-admin.component';
import { ListeMangersComponent } from './liste-mangers/liste-mangers.component';
import { ListeClientsComponent } from './liste-clients/liste-clients.component';
import { AjoutAdminComponent } from './ajout-admin/ajout-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    ListeSalonsComponent,
    ListePrestaComponent,
    SalonComponent,
    CarteSalonsComponent,
    EspacePersoClientComponent,
    EspacePersoManagerComponent,
    EspaceNonUserComponent,
    EspaceAdminComponent,
    GestionPrestationComponent,
    AproposComponent,
    ModifAdminComponent,
    ListeMangersComponent,
    ListeClientsComponent,
    AjoutAdminComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    RouterModule.forRoot([

      {
        path: 'listesalons',
        component: ListeSalonsComponent,
      },
      {
        path: 'listeprestations',
        component: ListePrestaComponent,
      },
      {
        path: 'gosalon',
        component: SalonComponent,
      },
      {
        path: 'cartesalons',
        component: CarteSalonsComponent,
      },
      {
        path: 'espaceperso',
        component: EspacePersoClientComponent,
      },
      {
        path: 'espacemanager',
        component: EspacePersoManagerComponent,
      },
      {
        path: 'espacenonuser',
        component: EspaceNonUserComponent,
      },
      {
        path: 'espaceadmin',
        component: EspaceAdminComponent,
      },
      {
        path: 'apropos',
        component: AproposComponent,
      },
    ])
  ],
  providers: [EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
