import { Injectable, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import { authError } from './auth-error';
import { Router } from '@angular/router';


@Injectable()
export class AuthService implements OnInit {
  user$: Observable<firebase.User>;


  constructor(private afAuth: AngularFireAuth, public router: Router) { 
    this.user$ = afAuth.authState;
  }

  emailLogin(credentials: any) {
    this.afAuth.auth.signInWithEmailAndPassword(credentials.email, credentials.password).
    catch(function(error) {
      alert( authError.convertMessage(error['code']));
    });
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }

  ngOnInit() {

  }

}
