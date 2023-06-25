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
    this.narutoSnap = new FaceSnap(
      'Naruto',
      "Somebody told me I'm a failure, I'll prove them wrong.",
      new Date(),
      8,
      'https://static.vecteezy.com/ti/vecteur-libre/p3/14845288-illustration-de-personnage-naruto-iconele-style-cartoon-plat-gratuit-vectoriel.jpg'
    );
    this.sasukeSnap = new FaceSnap(
      'Sasuke',
      "I Hate A Lot Of Things, And I Don't Particularly Like Anything.",
      new Date(),
      7,
      'https://pbs.twimg.com/media/EMhhX83UcAA47No.jpg'
    );
    this.jiraiyaSnap = new FaceSnap(
      'Jiraiya',
      "Once you've been hurt you learn to hate. But if you hurt another you become hated.",
      new Date(),
      69,
      'https://www.pngmart.com/files/13/Jiraiya-PNG-Pic.png'
    );
  }
}
