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
  selector: 'app-liste-clients',
  templateUrl: './liste-clients.component.html',
  styleUrls: ['./liste-clients.component.css']
})
export class ListeClientsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'photo', 'nom', 'prenom', 'mail', 'mdp', 'modif'];
  dataSource = new MatTableDataSource<User>(DONNEE_CLIENTS);

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

const DONNEE_CLIENTS: User[] = [
  {
    id: 1, nom: "Enault", prenom: "Maxime", mail: "m.enault@gmail.com", mdp: "1", access: 2,
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/User-Pict-Profil.svg/682px-User-Pict-Profil.svg.png"
  },
  {
    id: 2, nom: "Geindreau", prenom: "Thomas", mail: "t.geindreau@gmail.com", mdp: "2", access: 2,
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/User-Pict-Profil.svg/682px-User-Pict-Profil.svg.png"
  },
  {
    id: 3, nom: "Degand", prenom: "Elsa", mail: "e.degand@gmail.com", mdp: "3", access: 2,
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/User-Pict-Profil.svg/682px-User-Pict-Profil.svg.png"
  },
  {
    id: 4, nom: "Luong", prenom: "Corrina", mail: "c.luong@gmail.com", mdp: "4", access: 2,
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/User-Pict-Profil.svg/682px-User-Pict-Profil.svg.png"
  },
  {
    id: 5, nom: "Enault", prenom: "Maxime", mail: "m.enault@gmail.com", mdp: "1", access: 2,
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/User-Pict-Profil.svg/682px-User-Pict-Profil.svg.png"
  },
  {
    id: 6, nom: "Geindreau", prenom: "Thomas", mail: "t.geindreau@gmail.com", mdp: "2", access: 2,
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/User-Pict-Profil.svg/682px-User-Pict-Profil.svg.png"
  },
  {
    id: 7, nom: "Degand", prenom: "Elsa", mail: "e.degand@gmail.com", mdp: "3", access: 2,
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/User-Pict-Profil.svg/682px-User-Pict-Profil.svg.png"
  },
  {
    id: 8, nom: "Luong", prenom: "Corrina", mail: "c.luong@gmail.com", mdp: "4", access: 2,
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/User-Pict-Profil.svg/682px-User-Pict-Profil.svg.png"
  },
  {
    id: 9, nom: "Enault", prenom: "Maxime", mail: "m.enault@gmail.com", mdp: "1", access: 2,
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/User-Pict-Profil.svg/682px-User-Pict-Profil.svg.png"
  },
  {
    id: 10, nom: "Geindreau", prenom: "Thomas", mail: "t.geindreau@gmail.com", mdp: "2", access: 2,
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/User-Pict-Profil.svg/682px-User-Pict-Profil.svg.png"
  },
  {
    id: 11, nom: "Degand", prenom: "Elsa", mail: "e.degand@gmail.com", mdp: "3", access: 2,
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/User-Pict-Profil.svg/682px-User-Pict-Profil.svg.png"
  },
  {
    id: 12, nom: "Luong", prenom: "Corrina", mail: "c.luong@gmail.com", mdp: "4", access: 2,
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/User-Pict-Profil.svg/682px-User-Pict-Profil.svg.png"
  },
  {
    id: 13, nom: "Enault", prenom: "Maxime", mail: "m.enault@gmail.com", mdp: "1", access: 2,
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/User-Pict-Profil.svg/682px-User-Pict-Profil.svg.png"
  },
  {
    id: 14, nom: "Geindreau", prenom: "Thomas", mail: "t.geindreau@gmail.com", mdp: "2", access: 2,
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/User-Pict-Profil.svg/682px-User-Pict-Profil.svg.png"
  },
  {
    id: 15, nom: "Degand", prenom: "Elsa", mail: "e.degand@gmail.com", mdp: "3", access: 2,
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/User-Pict-Profil.svg/682px-User-Pict-Profil.svg.png"
  },
  {
    id: 16, nom: "Luong", prenom: "Corrina", mail: "c.luong@gmail.com", mdp: "4", access: 2,
    photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/User-Pict-Profil.svg/682px-User-Pict-Profil.svg.png"
  },
];
