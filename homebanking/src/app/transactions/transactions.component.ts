import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBar, MatSnackBarRef, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AuthService } from '../service/auth.service';


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  // Form group for transaction input
  transactionForm: FormGroup;
  // Duration for the success message snack bar
  durationInSeconds = 5;

  // Constructor with dependency injection
  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar, private authService: AuthService) { }

  ngOnInit(): void {
    // Create the transaction form with form controls and validators
    this.transactionForm = this.fb.group({
      type: ['', Validators.required],
      money: ['', Validators.required],
    });
  }

  // Function to handle form submission
  onSubmit() {
    // Check if the form is valid
    if (this.transactionForm.valid) {
      // Get values from the form
      const type = this.transactionForm.get('type')?.value;
      const money = parseInt(this.transactionForm.get('money')?.value, 10);

      // Adjust the money based on the transaction type
      const adjustedMoney = type === 'Withdrawal' ? -money : money;

      // Create a transaction data object
      const transactionData = {
        money: adjustedMoney,
        type: type,
        date: new Date(),
      };

      // Perform further actions like sending the data to a server

      // Add the transaction to the logged-in user's transactions using AuthService
      this.authService.addTransaction(transactionData);

      // Reset the form after submission
      this.transactionForm.reset();

      // Show a pop-up confirming the success of the operation
      this._snackBar.openFromComponent(TransactionsSnackComponent, {
        duration: this.durationInSeconds * 1000,
      });
    }
  }
}

// Snackbar component for transaction success message
@Component({
  selector: 'app-transactions-snack',
  templateUrl: './transactions.component.snack.html',
  styles: [
    `
    :host {
      display: flex;
    }

    .confirmation {
      color: white;
    }
  `,
  ],
})
export class TransactionsSnackComponent {
  // Snackbar reference for inject function
  snackBarRef = inject(MatSnackBarRef);
}