import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { UserData } from '../dto/user-data';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-post-login',
  templateUrl: './post-login.component.html',
  styleUrls: ['./post-login.component.css']
})
export class PostLoginComponent {

  // Variable to store user information
  user: UserData | undefined;

  // Variable to track whether the screen is considered small
  isSmallScreen = false;

  // Constructor with dependency injection
  constructor(private authService: AuthService, private breakpointObserver: BreakpointObserver) {
    // Subscribe to the breakpoint observer to determine if the screen is small
    this.breakpointObserver.observe(['(max-width: 80em)']).subscribe(result => {
      this.isSmallScreen = result.matches;
    });
    // Get the currently logged-in user from the AuthService
    this.user = authService.getLoggedInUser();
  }

  // Function to log out the user
  logOut() {
    // Log the user out of the Angular application
    this.authService.logOut();
  }
}
