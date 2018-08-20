import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public auth: AuthService, public router: Router) { 
    
  }

  login(credentials?: any) {
    console.log(credentials);
    // to separate email/pw-signin from google-signin
    if(credentials) {
        this.auth.emailLogin(credentials.value);
    }
}

  ngOnInit() {
    this.auth.user$.subscribe(user => {
      if(user) {
        this.router.navigate(['/home']);
      }
    });
  }

}
