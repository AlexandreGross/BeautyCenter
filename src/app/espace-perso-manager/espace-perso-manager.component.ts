import { Component, OnInit } from '@angular/core';
import { ServiceStockageService } from '../service-stockage.service';
import { SalonservicesService } from '../salonservices.service';
import { Http } from '@angular/http';
import { Salon } from '../model/Salon';
import { RouterLinkWithHref, Router } from '@angular/router';
import { identifierModuleUrl } from '@angular/compiler';
import { Prestation } from '../model/Prestation';
import { Event } from '../model/Event';
import { User } from '../model/User';
import { FormControl } from '@angular/forms';

export interface Section {
  id: number; 
  nomSalon: string;
  dateSalon: string;
  numero: number,
  rue: string,
  codPostal: number,
  ville: string,
  telephone: string;
  contact: string;
  nbPersonnelSalon: number;
  idManager: number;
  photo: string;
}

export interface SectionM {
  id: number;
  nom: string;
  prenom: string;
  mail: string;
  mdp: string;
  access: number;
  photo: string;
}


@Component({
  selector: 'app-espace-perso-manager',
  templateUrl: './espace-perso-manager.component.html',
  styleUrls: ['./espace-perso-manager.component.css']
})
export class EspacePersoManagerComponent implements OnInit {

  constructor(private http: Http, private stockageService: ServiceStockageService, private serv: SalonservicesService, private route: Router) { }

  //RECUPERATION DE L'ID DU MANAGER
  idMan = this.stockageService.id;
  res;
  idManager;
  nomManager;
  prenomManager;
  mailManager;
  photoManager;

  ngOnInit() {
    console.log('recup mis en service id', this.stockageService.id);
    console.log('recup mis en service id dans variable perso', this.idMan);
    this.chargeListeSalons(this.idMan)
    console.log('donne das salon', this.dataSalons);

    this.http.get('http://localhost:8080/users/' + this.idMan)
      .subscribe(
        response => {
          console.log(response.json());
          this.res = response.json();
          this.idManager = this.res.id;
          this.nomManager = this.res.nom;
          this.prenomManager = this.res.prenom;
          this.mailManager = this.res.mail;
          this.photoManager = this.res.photo;
        }
      )
  }

  // RECUPERATION DE LA LISTE DES SALONS DU MANAGER
  dataSalons;
  chargeListeSalons(idManager) {
    this.http.get('http://localhost:8080/salons/manager/' + idManager).subscribe(response => {
      this.dataSalons = response.json();
      console.log('Contenu liste salon', this.dataSalons);
    });
  }

  addS = false;
  // CREATION D'UN SALON POUR LE MANAGER
  salon: Salon = new Salon();
  createSalon() {
    this.salon.idManager = this.stockageService.id;
    this.http.post('http://localhost:8080/salons', this.salon).subscribe(salonData => {
      console.log(salonData);
      this.chargeListeSalons(this.idManager);
      this.addS = true;
      this.addP=false;
      this.modif=false;
    }, err => {
      console.log(err);
    });
  }

  //SUPPRESION D'UN SALON ET EVENT DU MANAGER
  supSalon(id) {
    this.http.delete('http://localhost:8080/events/salon/' + id).subscribe(eventD => {
      console.log(eventD);
    }, err => {
      console.log(err);
    });
    this.http.delete('http://localhost:8080/salons/' + id).subscribe(salonD => {
      console.log(salonD);
      this.chargeListeSalons(this.idManager);
    }, err => {
      console.log(err);
    });
  }

  //AFFICHER / CACHER DES INFOS
  show = false;
  affCach() {
    this.show = !this.show;
  }

  //STOCKAGE ID DU SALON
  infoSalon(numeroSalon) {
    this.serv.id = numeroSalon;
    console.log('numero du salon recup', numeroSalon)
  }

  // RECUPERATION DE LA LISTE DES PRESTATIONS DU SALON
  dataPresta;
  chargeListePresta(id) {
    this.http.get('http://localhost:8080/events/salon/' + id).subscribe(response => {
      this.dataPresta = response.json();
    });
  }

  addP=false;
  // AJOUT D'UNE PRESTATION AU SALON
  prestation: Prestation = new Prestation();
  pass = false;
  createPrestation() {
    this.http.post('http://localhost:8080/prestations', this.prestation).subscribe(prestationData => {
      console.log(prestationData);
      this.affCach();
      this.addP=true;
      this.addS=false;
      this.modif=false;
    }, err => {
      console.log(err);
    });
  }

  //MODIFICATION SALON
  modifSalon(id) {
    this.salon.idManager = this.stockageService.id;
    this.http.put('http://localhost:8080/salons/' + id, this.stock).subscribe(salonMod => {
      console.log(salonMod);
      this.chargeListeSalons(this.idManager);
    }, err => {
      console.log(err);
    });
  }

  //RECUPERATION SALON PAR ID
  stock: Salon = new Salon();
  getSalon(id) {
    this.http.get('http://localhost:8080/salons/' + id).subscribe(salonGet => {
      console.log(salonGet);
      this.stock = salonGet.json();
      console.log('nom salon stocké', this.stock.nomSalon);
    }, err => {
      console.log(err);
    });
  }

  //RECUPERATION INFOS MANAGER
  stockManager: User = new User();
  getCompte(id) {
    this.http.get('http://localhost:8080/users/' + id).subscribe(userGet => {
      console.log(userGet);
      this.stockManager = userGet.json();
    }, err => {
      console.log(err);
    });
  }

  user: User = new User;
  data;
  nom;
  prenom;
  showManager = false;

  modif=false;
  //MODIFICATION COMPTE MANAGER
  modifCompte(id) {
    this.http.put('http://localhost:8080/user/' + id, this.stockManager).subscribe(userPut => {
      console.log(userPut);
      this.ngOnInit();
      this.modif=true;
      this.addP=false;
      this.addS=false;
    }, err => {
      console.log(err);
    });
  }

  //DESACTIVATION COMPTE MANAGER
  desactiveCompte(id) {
    this.stockManager.access = 5;
    this.http.put('http://localhost:8080/user/' + id, this.stockManager).subscribe(userPut => {
      this.route.navigate(['/espacemanager']);
      console.log(userPut);
    }, err => {
      console.log(err);
    });
  }

  salonRest(){
    this.salon.nomSalon="";
    this.salon.nbPersonnelSalon=null;
    this.salon.dateSalon=null;
    this.salon.adresse="";
    this.salon.telephone="";
    this.salon.contact="";
  }

  prestationRest(){
    this.prestation.titre="";
    this.prestation.duree=null;
    this.prestation.nbPersonnel=null;

  }

managerTest : SectionM[] = [
  {
  id: 1,
  nom: "L'Eclair",
  prenom: "Buzz",
  mail: "buzz@gmail.com",
  mdp: "x",
  access: 3,
  photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/User-Pict-Profil.svg/682px-User-Pict-Profil.svg.png",
  }
]
  
  touslessalons : Section[] = [
    {
      id: 1,
      nomSalon: "Loperhet",
      dateSalon: "03/05/2019",
      numero: 22,
      rue: "Boulevard Saint Martin",
      codPostal: 75013,
      ville: "Paris",
      telephone: "01 02 03 04 05",
      contact: "loperhet@gmail.com",
      nbPersonnelSalon: 3,
      idManager: 1,
      photo: "data:image/jpeg;base64,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",
    },
    {
      id: 2,
      nomSalon: "Bien parEtre",
      dateSalon: "24/12/2020",
      numero: 13,
      rue: "Rue Victor Hugo",
      codPostal: 75013,
      ville: "Paris",
      telephone: "01 05 34 80 74",
      contact: "parEtre@gmail.com",
      nbPersonnelSalon: 7,
      idManager: 1,
      photo: "data:image/jpeg;base64,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",
    },
    {
      id: 3,
      nomSalon: "Salon&Soins",
      dateSalon: "31/02/2020",
      numero: 13,
      rue: "Avenue de Bercy",
      codPostal: 75011,
      ville: "Paris",
      telephone: "01 50 45 90 65",
      contact: "salon&soin@gmail.com",
      nbPersonnelSalon: 3,
      idManager: 1,
      photo: "http://www.letwist.fr/images/idee-deco-salon-d-esthetique_1.jpg",
    }
  ]

}
