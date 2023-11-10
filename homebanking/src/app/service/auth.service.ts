// auth.service.ts
import { Injectable } from '@angular/core';
import { USERS_DATA } from '../mock-user-data'; // Import your mock user data
import { UserData } from '../dto/user-data';
import { TransactionData } from '../dto/transaction-data';
import { NavigationComponent } from '../navigation/navigation.component';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  // Variable to store the currently logged-in user
  private loggedInUser: UserData | undefined = undefined;

  // Variable to track the login status
  isLoggedIn = false;

  // Function to perform user login
  login(email: string, password: string): boolean {
    // Check if the user exists in your mock user data
    const user = USERS_DATA.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      // User found, navigate to another page or return true
      return true;
    } else {
      // User not found, return false
      return false;
    }
  }

  // Function to set the currently logged-in user
  setLoggedInUser(user: UserData | undefined) {
    this.loggedInUser = user;
    this.isLoggedIn = true;
  }

  // Function to get the currently logged-in user
  getLoggedInUser(): UserData | undefined {
    return this.loggedInUser;
  }

  // Function to log out the user
  logOut() {
    this.isLoggedIn = false;
    this.loggedInUser = undefined;
  }

  // Function to add a transaction to the user's data
  addTransaction(transaction: TransactionData) {
    if (this.loggedInUser) {
      // Add the transaction to the user's transactions array
      this.loggedInUser.transactions.push(transaction);

      // Update the user's account balance based on the transaction amount
      this.loggedInUser.accountBalanceInEuros += transaction.money;

    }
  }

}

