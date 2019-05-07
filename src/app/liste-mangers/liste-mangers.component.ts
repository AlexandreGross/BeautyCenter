import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatTableDataSource } from '@angular/material';

export interface User {
  id: number;
  nom: string;
  prenom: string;
  mail: string;
  mdp: string;
  access: number;
  photo: string;
}

@Component({
  selector: 'app-liste-mangers',
  templateUrl: './liste-mangers.component.html',
  styleUrls: ['./liste-mangers.component.css']
})
export class ListeMangersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'photo', 'nom', 'prenom', 'mail', 'mdp', 'modif', 'etat', 'action'];
  dataSource = new MatTableDataSource<User>(DONNEE_MANAGERS);

@ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  showModif = false;
  affCach() {
    this.showModif = !this.showModif;
  };

}

const DONNEE_MANAGERS: User[] = [
  {
    id: 1, nom: "Enault", prenom: "Maxime", mail: "m.enault@gmail.com", mdp: "1", access: 3,
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/User-Pict-Profil.svg/682px-User-Pict-Profil.svg.png"
  },
  {
    id: 2, nom: "Geindreau", prenom: "Thomas", mail: "t.geindreau@gmail.com", mdp: "2", access: 5,
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/User-Pict-Profil.svg/682px-User-Pict-Profil.svg.png",
  },
  {
    id: 3, nom: "Degand", prenom: "Elsa", mail: "e.degand@gmail.com", mdp: "3", access: 5,
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/User-Pict-Profil.svg/682px-User-Pict-Profil.svg.png",
  },
  {
    id: 4, nom: "Luong", prenom: "Corrina", mail: "c.luong@gmail.com", mdp: "4", access: 3,
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/User-Pict-Profil.svg/682px-User-Pict-Profil.svg.png",
  }
]