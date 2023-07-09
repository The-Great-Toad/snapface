import { Component, OnInit, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snape.model';
import { FaceSnapsService } from '../services/face-snaps.service';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;
  hasSnapped: boolean = false;

  constructor(private faceSnapService: FaceSnapsService) {}

  ngOnInit(): void {}

  onSnap() {
    if (!this.hasSnapped) {
      this.hasSnapped = true;
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
    } else {
      this.hasSnapped = false;
      this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    }
  }
}
