import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { SalonservicesService } from '../salonservices.service';
import { Router } from '@angular/router';

export interface Section {
  id: number; 
  nomSalon: string;
  dateSalon: string;
  adresse: string;
  telephone: string;
  contact: string;
  nbPersonnelSalon: number;
  idManager: number;
  photo: string;
}

@Component({
  selector: 'app-liste-salons',
  templateUrl: './liste-salons.component.html',
  styleUrls: ['./liste-salons.component.css']
})
export class ListeSalonsComponent implements OnInit {
  constructor(private http:Http, private salonService: SalonservicesService, private route: Router) { }
  
  dateJ;
  salooon;

  ngOnInit() {
}

   goSalon(id){

     
     this.route.navigate(['/gosalon']);
     this.salonService.id = id;

    console.log('test du service départ' ,this.salooon.id);
    console.log('test id normal', id);

   }

touslessalons : Section[] = [
  {
    id: 1,
    nomSalon: "Salon du Swag",
    dateSalon: "03/05/2019",
    adresse: "22 rue du Swag, 75013 Paris",
    telephone: "01 02 03 04 05",
    contact: "salon.swag@gmail.com",
    nbPersonnelSalon: 10,
    idManager: 1,
    photo: "",
  },
  {
    id: 2,
    nomSalon: "Wall Saloon",
    dateSalon: "24/12/2020",
    adresse: "North after the North, Westeros",
    telephone: "20 000 000",
    contact: "nightwatch@gmail.com",
    nbPersonnelSalon: 1000,
    idManager: 2,
    photo: "",
  }
]

}
