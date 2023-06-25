import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdDate!: Date;
  snaps!: number;
  imageUrl!: string;
  hasSnapped: boolean = false;

  ngOnInit(): void {
    this.title = 'Naruto';
    this.description = 'You better believe it!';
    this.createdDate = new Date();
    this.snaps = 8;
    this.imageUrl =
      'https://static.vecteezy.com/ti/vecteur-libre/p3/14845288-illustration-de-personnage-naruto-iconele-style-cartoon-plat-gratuit-vectoriel.jpg';
  }

  onSnap() {
    if (!this.hasSnapped) {
      this.hasSnapped = true;
      this.snaps++;
    } else {
      this.snaps--;
      this.hasSnapped = false;
    }
  }
}
