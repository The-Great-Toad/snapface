import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snape.model';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  faceSnaps: FaceSnap[] = [
    {
      id: 1,
      title: 'Naruto',
      description: "Somebody told me I'm a failure, I'll prove them wrong.",
      createdDate: new Date(),
      snaps: 8,
      imageUrl:
        'https://static.vecteezy.com/ti/vecteur-libre/p3/14845288-illustration-de-personnage-naruto-iconele-style-cartoon-plat-gratuit-vectoriel.jpg',
      location: 'Konoha',
    },
    {
      id: 2,
      title: 'Sasuke',
      description:
        "I Hate A Lot Of Things, And I Don't Particularly Like Anything.",
      createdDate: new Date(),
      snaps: 7,
      imageUrl: 'https://pbs.twimg.com/media/EMhhX83UcAA47No.jpg',
    },
    {
      id: 3,
      title: 'Jiraiya',
      description:
        "Once you've been hurt you learn to hate. But if you hurt another you become hated.",
      createdDate: new Date(),
      snaps: 69,
      imageUrl: 'https://www.pngmart.com/files/13/Jiraiya-PNG-Pic.png',
      location: 'Hot springs',
    },
  ];

  getAllFaceSnaps(): FaceSnap[] {
    return this.faceSnaps;
  }

  getFaceSnapById(faceSnapId: number): FaceSnap {
    const faceSnap = this.faceSnaps.find(
      (faceSnap) => faceSnap.id === faceSnapId
    );

    if (!faceSnap) {
      throw new Error('FaceSnap not found!');
    } else {
      return faceSnap;
    }
  }

  snapFaceSnapById(faceSnapId: number, snapType: 'snap' | 'unsnap'): void {
    const faceSnap: FaceSnap = this.getFaceSnapById(faceSnapId);
    snapType === 'snap' ? faceSnap.snaps++ : faceSnap.snaps--;
  }
}
