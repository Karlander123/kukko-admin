import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { Router, RouterStateSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(route, state: RouterStateSnapshot) {
    return this.auth.user$.map(user => {
      if (user) return true;

      this.router.navigate(['/']);
      return false;
    });
  }

}
