import { Component, OnDestroy, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snape.model';
import { FaceSnapsService } from '../services/face-snaps.service';
import { Observable, Subject, interval, take, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss'],
})
export class FaceSnapListComponent implements OnInit {
  faceSnaps$!: Observable<FaceSnap[]>;

  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit() {
    this.faceSnaps$ = this.faceSnapsService.getAllFaceSnaps();
  }
}
