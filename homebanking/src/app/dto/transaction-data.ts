// Define the TransactionData interface to represent transaction-related data
export interface TransactionData {
    money: number, // Amount of money involved in the transaction
    type: string,  // Type of transaction
    date: Date,    // Date when the transaction occurred 
}