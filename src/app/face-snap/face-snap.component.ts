import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snape.model';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  hasSnapped: boolean = false;

  ngOnInit(): void {}

  onSnap() {
    if (!this.hasSnapped) {
      this.hasSnapped = true;
      this.faceSnap.snaps++;
    } else {
      this.faceSnap.snaps--;
      this.hasSnapped = false;
    }
  }
}
