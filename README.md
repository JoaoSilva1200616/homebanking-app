# Homebanking Application

## How the Application Works

The Homebanking Application is designed to provide users with a convenient and secure platform for managing their finances. It offers the following key features:

* **Login Page:** Users can securely log in to their accounts using their email and password.
* **List of Movements:** A detailed list of financial transactions, including deposits, withdrawals, and transfers.
* **Deposit Funds:** Users can deposit funds into their accounts through a simple and intuitive interface.
* **Withdraw Funds:** Withdrawal functionality allows users to take out funds when needed.

### Application Flow

The Homebanking Application follows a simple and secure flow to provide users with efficient financial management. Here's a step-by-step guide:

#### 1. Front Page

* **Description:** The front page serves as the initial point of contact for users.
* **Functionality:** All features are locked, prompting users to log in to access their account.

#### 2. Login

* **Description:** Users can access their account by providing their email and password.
* **Functionality:**

- Input email and password.
- Click the login button.
- If credentials are correct, the user is redirected to the user dashboard.
- Otherwise, he will need to try again.

#### 3. User Dashboard

* **Description:** The user dashboard provides a summary of key account information.
* **Functionality:**

- View account balance and account number.
- Access other functionalities like deposit, withdrawal, and transaction history.

#### 4. Deposit or Withdraw Funds

* **Description:** Users can manage their account balance by depositing or withdrawing funds.
* **Functionality:**

- Navigate to the deposit or withdrawal menu.
- Choose the operation and enter the amount.
- Execute the transaction.
- View updated account balance on the user dashboard.

#### 5. Transaction History

* **Description:** Users can review a list of their financial transactions.
* **Functionality:**

- Navigate to the list of movements.
- Review details of past transactions, including date, type, and amount.

#### 6. Logout

* **Description:** Users can securely log out of their accounts.
* **Functionality:**

- Click on the logout button.
- The user is logged out, and access to user-related components is restricted.

#### Note:**AuthGuard:** User-related components are guarded by the AuthGuard to prevent unauthorized access.

* **Security:** The application prioritizes security by requiring login credentials for access.
* **Feedback:** Users receive feedback on successful transactions.

## How to Run the Application

To run the Homebanking Application locally, follow these steps:

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Angular CLI](https://angular.io/cli)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/JoaoSilva1200616/homebanking-app
   ```
2. Navigate to the project directory:

   ```bash
   cd homebanking
   ```
3. Install dependencies:

   ```bash
   npm install
   ```

### Run the Application

Run the application using the Angular CLI:

```bash
ng serve
```

User used for testing:

```
Email: teste1@gmail.com
Password: teste123
```

# Conclusion

Overall this was a very productive challenge. I was more confortable with Angular because it was simillar in structure of what we already did in ISEP but for me the challenging part was the Angular Material part because I have never worked with Angular Material before so it was a fun experience learning it and now I think I have a better understanding of it.
