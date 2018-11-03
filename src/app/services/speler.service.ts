import { async } from '@angular/core/testing';
import { Speler } from './../interfaces/speler';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpelerService {


  private collection = 'spelers';

  user: User;
  spelers$: Observable<Speler[]>;
  laatsteSpeler$: Observable<Speler>;

  constructor(private afs: AngularFirestore, private authService: AuthService, private toastr: ToastrService) {
    this.authService.userData$.subscribe(data => this.user = data);
    this.spelers$ = this.afs.collection<any>(this.collection,
      ref => ref.where("uid", "==", this.user.uid).orderBy('naam', 'asc')
    ).valueChanges();

    
    console.log(this.spelers$);

  }


  addSpeler(speler: Speler) {
    const spelerKey = this.afs.createId();
    const document = this.collection + '/' + spelerKey;
    this.afs.doc(document).set({
      spelerKey,
      uid: this.user.uid,
      naam: speler.naam,
      geslacht: speler.geslacht
    }).catch(err => console.error(err));
    this.toastr.success(speler.naam + " toegevoegd!");

  }

  deleteSpeler(speler: Speler) {
    if (window.confirm(`Bent u zeker dat u ${speler.naam} wilt verwijderen?`)) {
      const path = this.collection + '/' + speler.spelerKey;
      this.afs.doc(path).delete();
      this.toastr.success(speler.naam + " verwijdert!");
    }


  }

  updateSpeler(speler: Speler) {
    const path = this.collection + '/' + speler.spelerKey;

    this.afs.doc(path).update(speler)
      .catch(err => {
        console.error(err)
      });
    this.toastr.success(speler.naam + " bijgewerkt!");
  }

  
}
