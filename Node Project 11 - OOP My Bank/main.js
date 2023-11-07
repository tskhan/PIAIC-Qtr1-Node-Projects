"use strict";
class Account {
    constructor(accountNumber, initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    getAccountNumber() {
        return this.accountNumber;
    }
    getBalance() {
        return this.balance;
    }
    deposit(amount) {
        this.balance += amount;
    }
    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            return true;
        }
        return false;
    }
}
class SavingsAccount extends Account {
    constructor(accountNumber, initialBalance, interestRate) {
        super(accountNumber, initialBalance);
        this.interestRate = interestRate;
    }
    applyInterest() {
        const interest = this.balance * (this.interestRate / 100);
        this.deposit(interest);
    }
}
class CheckingAccount extends Account {
    constructor(accountNumber, initialBalance, overdraftLimit) {
        super(accountNumber, initialBalance);
        this.overdraftLimit = overdraftLimit;
    }
    withdraw(amount) {
        if (amount <= this.balance + this.overdraftLimit) {
            this.balance -= amount;
            return true;
        }
        return false;
    }
}
// Example Usage
const savingsAccount = new SavingsAccount("SA123", 1000000, 2.5);
savingsAccount.deposit(500);
savingsAccount.applyInterest();
const checkingAccount = new CheckingAccount("CA456", 2000, 500);
checkingAccount.withdraw(2500);
console.log(`Savings Account Balance: $${savingsAccount.getBalance()}`);
console.log(`Checking Account Balance: $${checkingAccount.getBalance()}`);
