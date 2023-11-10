import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  // Constructor with dependency injection
  constructor(public router: Router, private authService: AuthService) { }

  // canActivate function to check if the route can be activated
  canActivate(): boolean {
    // Check if the user is not logged in
    if (!this.authService.isLoggedIn) {
      // Redirect to the home page and prevent route activation
      this.router.navigate(['/']);
      return false;
    }
    // Allow route activation for logged-in users
    return true;
  }
}
