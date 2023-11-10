import { TransactionData } from "./transaction-data";

// Define the UserData interface to represent user-related data
export interface UserData {
    email: string;
    password: string,
    firstName: string,
    lastName: string,
    telephoneNr: string,
    accountNumber: string,
    accountBalanceInEuros: number,
    transactions: TransactionData[]; // Array of transactions associated with the user, each represented by the TransactionData interface
}