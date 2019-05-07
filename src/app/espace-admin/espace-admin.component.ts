import { Component, OnInit } from '@angular/core';
import { User } from '../model/User';
import { ServiceStockageService } from '../service-stockage.service';
import { Http } from '@angular/http';
import { ActivationEnd } from '@angular/router';



@Component({
  selector: 'app-espace-admin',
  templateUrl: './espace-admin.component.html',
  styleUrls: ['./espace-admin.component.css']
})
export class EspaceAdminComponent implements OnInit {

  constructor(private http: Http, private stockageService: ServiceStockageService) { }


  id = this.stockageService.id;
  resUser;
  nomA;
  prenomA;
  mailA;
  mdpA;
  accessA;
  managerModif: User = new User;
  manager;
  mail;
  show = true;
  man: User = new User();
  manag: User = new User();
  showMessageCreate = false;

  ngOnInit() {
    this.http.get('http://localhost:8080/users/' + this.id)
      .subscribe(
        response => {
          console.log(response.json());
          this.resUser = response.json();
          this.nomA = this.resUser.nom;
          this.prenomA = this.resUser.prenom;
          this.mailA = this.resUser.mail;
          this.mdpA = this.resUser.mdp;
          this.accessA = this.resUser.access;
          this.chargeListe();
        });
  }

  chargeListe() {
    this.http.get('http://localhost:8080/users/managers')
      .subscribe(
        response => {
          console.log(response.json());
          this.manager = response.json();
        });
  }

  goModif(id) {
    this.http.get('http://localhost:8080/users/' + id).subscribe(
      response => {
        console.log(response.json());
        this.managerModif = response.json();
      })
    this.showModif = true;
    this.showAjout = false;
  }

  modifManager(id) {
    this.http.put('http://localhost:8080/user/' + id, this.managerModif).
      subscribe(userData => {
        console.log(userData);
        this.ngOnInit();
      }, err => {
        console.log(err);
      });
    this.showAjout = false;
    this.showModif = false;
  }

  cacheAjoutModif() {
    this.showAjout = false;
    this.showModif = false;
  }

  managerAD: User = new User;
  managerInactif: User = new User;
  managerActif: User = new User;
  getInfo(id) {
    this.http.get('http://localhost:8080/users/' + id).subscribe(
      response => {
        console.log(response.json());
        this.managerAD = response.json();
      });
  }

  activation(id) {
    if (this.managerAD.access == 3) {
      this.managerAD.access = 5;
      this.http.put('http://localhost:8080/user/' + id, this.managerAD).subscribe(
        response => {
          console.log(response.json());
          this.managerInactif = response.json();
          this.ngOnInit();
        });
    } else if (this.managerAD.access == 5) {
      this.managerAD.access = 3;
      this.http.put('http://localhost:8080/user/' + id, this.managerAD).subscribe(
        response => {
          console.log(response.json());
          this.managerActif = response.json();
          this.ngOnInit();
        });

    }
  }

  createManager() {
    this.man.access = 3;
    this.http.post('http://localhost:8080/users', this.man).subscribe(userData => {
      console.log(userData);

      this.http.post('http://localhost:8080/mailcreationmanager', this.man).subscribe(reponse => {
        this.mail = reponse.json();
      })
    }, err => {
      console.log(err);
    });

    this.showAjout = false;
    this.showModif = false;
    this.showMessageCreate = true;
    this.ngOnInit();
  }

  ajoutReset() {
    this.man.nom = "";
    this.man.prenom = "";
    this.man.mail = "";
    this.man.mdp = "";
  }

  showModif = false;
  affCach() {
    this.showModif = !this.showModif;
    this.showAjout = false;
  };

  showAjout = false;
  afficheAjout() {
    this.showAjout = !this.showAjout;
    this.showModif = false;
    this.ajoutReset();
  }

}
