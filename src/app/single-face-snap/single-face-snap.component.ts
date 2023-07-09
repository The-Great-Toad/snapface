import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snape.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-single-face-snap',
  templateUrl: './single-face-snap.component.html',
  styleUrls: ['./single-face-snap.component.scss'],
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
  hasSnapped: boolean = false;

  constructor(
    private faceSnapService: FaceSnapsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const faceSnapId = +this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
  }

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
