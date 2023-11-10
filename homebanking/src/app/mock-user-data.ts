import { UserData } from "./dto/user-data";

// Define an array of user data to be used to mock a real service
export const USERS_DATA: UserData[] = [
    // User 1
    {
        email: "teste1@gmail.com",
        password: "teste123",
        firstName: "João",
        lastName: "Silva",
        telephoneNr: "965434567",
        accountNumber: "098765432109876543210",
        accountBalanceInEuros: 1823.23,
        transactions: [
            {
                money: -10,
                type: 'Withdrawal',
                date: new Date('2023-11-06T15:30:00'),
            },
            {
                money: 20,
                type: "Deposit",
                date: new Date('2023-11-06T14:30:00'),
            },
            {
                money: -20,
                type: "McDonalds",
                date: new Date("2023-10-30T19:35:42"),
            },
            {
                money: 710,
                type: "Payment",
                date: new Date('2023-10-29T14:23:35'),
            },
            {
                money: -80,
                type: "Amazon",
                date: new Date("2023-10-25T22:14:16"),
            }, {
                money: -50,
                type: 'Withdrawal',
                date: new Date('2023-10-16T21:30:00'),
            },
            {
                money: 200,
                type: "Deposit",
                date: new Date('2023-10-13T00:30:00'),
            },
            {
                money: -20,
                type: "Withdrawal",
                date: new Date("2023-09-02T19:35:42"),
            },
            {
                money: 100,
                type: "Deposit",
                date: new Date('2023-11-09T17:51:51'),
            },
            {
                money: -50,
                type: "Withdrawal",
                date: new Date("2023-09-30T14:32:16"),
            }
            , {
                money: -10,
                type: 'Withdrawal',
                date: new Date('2023-10-01T13:04:42'),
            },
            {
                money: 100,
                type: "Deposit",
                date: new Date('2023-10-21T12:34:53'),
            },
            {
                money: -13.45,
                type: "McDonalds",
                date: new Date("2023-09-28T20:35:54"),
            },
            {
                money: 710,
                type: "Payment",
                date: new Date('2023-09-29T14:23:35'),
            },
            {
                money: -6.99,
                type: "Amazon",
                date: new Date("2023-09-15T23:53:14"),
            }
        ]
    },
    // User 2
    {
        email: "teste2@gmail.com",
        password: "teste123",
        firstName: "André",
        lastName: "Sousa",
        telephoneNr: "914734323",
        accountNumber: "123456789012345678901",
        accountBalanceInEuros: 6323.81,
        transactions: [
            {
                money: 20,
                type: 'Deposit',
                date: new Date('2023-11-06T20:30:00'),
            },
            {
                money: 30,
                type: 'Deposit',
                date: new Date('2023-11-06T14:45:00'),
            }
        ]
    }
];