import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private afAuth: AngularFireAuth,
    private router: Router
  ) {}

  login(email: string, password: string) {

    return this.afAuth.signInWithEmailAndPassword(email, password);

  }

  emailSignup(email: string, password: string) {
    return this.afAuth.createUserWithEmailAndPassword(email, password);
  }

  logout() {
    this.afAuth.signOut().then(() => {
      this.router.navigate(['/']);
    });
  }

  loggedUser(): Observable<firebase.User | null>{
    return this.afAuth.user;
  }

  updateUser (newValues: any) {
    this.loggedUser().subscribe(

      (user: firebase.User | null) => {

        user?.updateProfile(newValues).then(
          () => {
            return true;
          } 
        ).catch(
          () => {
            return false;
          }
        )

      }

    );
  }

}