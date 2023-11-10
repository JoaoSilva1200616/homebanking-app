import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { UserData } from '../dto/user-data';
import { USERS_DATA } from '../mock-user-data';
import { NavigationComponent } from '../navigation/navigation.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  // Form group for login
  loginForm: FormGroup;

  // Variable to store the logged-in user information
  loggedInUser: UserData | null = null;

  // Constructor with dependency injection
  constructor(private formBuilder: FormBuilder, private authService: AuthService, private router: Router) {
    // Initialize the login form with form controls and validators
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  // Function to be called when the login form is submitted
  onSubmit() {
    // Check if the form is valid
    if (this.loginForm.valid) {
      // Retrieve email and password from the form
      const email = this.loginForm.get('email')?.value;
      const password = this.loginForm.get('password')?.value;

      // Check if the login is successful using the AuthService
      if (this.authService.login(email, password)) {
        // Retrieve user data from your mock data or a real API
        const user = USERS_DATA.find(u => u.email === email);

        // Set the logged-in user in the AuthService
        this.authService.setLoggedInUser(user);

        // Navigate to the user page
        this.router.navigate(['/user']);
      } else {
        // Handle invalid login
      }
    }
  }
}
