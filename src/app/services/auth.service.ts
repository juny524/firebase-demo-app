import { Injectable } from '@angular/core';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$ = this.afAuth.user;
  constructor(private afAuth: provideFirebaseApp) { }
  login() {
    this.afAuth
      .signInWithPopup(new auth.GoogleAuthProvider())
      .then((result) => {
        console.log(result);
      });
  }
  logout() {
    this.afAuth.signOut();
  }
}
