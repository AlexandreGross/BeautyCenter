import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { User } from '../model/User';
/*import { User } from '../model/User';*/

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  data;
user: User= new User();

  constructor(private http : Http) { }

  ngOnInit() {
  }

  createUser(){
    this.http.post('http://localhost:8080/users', this.user).subscribe(userData=>{
      console.log(userData);
    }, err => {
      console.log(err);
    });

  }
}
