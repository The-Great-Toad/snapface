import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './models/face-snape.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  narutoSnap!: FaceSnap;
  sasukeSnap!: FaceSnap;
  jiraiyaSnap!: FaceSnap;

  ngOnInit(): void {
    this.narutoSnap = {
      title: 'Naruto',
      description: "Somebody told me I'm a failure, I'll prove them wrong.",
      createdDate: new Date(),
      snaps: 8,
      imageUrl:
        'https://static.vecteezy.com/ti/vecteur-libre/p3/14845288-illustration-de-personnage-naruto-iconele-style-cartoon-plat-gratuit-vectoriel.jpg',
      location: 'Konoha',
    };
    this.sasukeSnap = {
      title: 'Sasuke',
      description:
        "I Hate A Lot Of Things, And I Don't Particularly Like Anything.",
      createdDate: new Date(),
      snaps: 7,
      imageUrl: 'https://pbs.twimg.com/media/EMhhX83UcAA47No.jpg',
    };
    this.jiraiyaSnap = {
      title: 'Jiraiya',
      description:
        "Once you've been hurt you learn to hate. But if you hurt another you become hated.",
      createdDate: new Date(),
      snaps: 69,
      imageUrl: 'https://www.pngmart.com/files/13/Jiraiya-PNG-Pic.png',
      location: 'Hot springs',
    };
  }
}
