import { Speler } from './../interfaces/speler';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SpelerService {

  
  private collection = 'spelers';

  user: User;
  spelers$: Observable<Speler[]>

  constructor(private afs: AngularFirestore, private authService: AuthService) { 
    this.authService.userData$.subscribe( data => this.user = data);
    this.spelers$ = this.afs.collection<any>(this.collection,
      ref => ref.where("uid", "==", this.user.uid).orderBy('naam', 'asc')
    ).valueChanges();
   
  }


  addSpeler(speler:Speler){
    const spelerKey = this.afs.createId();
    const document = this.collection + '/' + spelerKey;
    this.afs.doc(document).set({
      spelerKey,
      uid: this.user.uid,
      naam: speler.naam,
      geslacht: speler.geslacht
    }).catch( err => console.error(err));

  }

  deleteSpeler(speler){
    if(window.confirm(`Bent u zeker dat u ${speler.naam} wilt verwijderen?`)){
      const path = this.collection + '/' + speler.spelerKey;
      this.afs.doc(path).delete();
    }
  }

  updateSpeler(speler: Speler){
    const path =  this.collection + '/' + speler.spelerKey;

    this.afs.doc(path).update(speler)
    .catch(err => {
      console.error(err)
    });
  }
}
