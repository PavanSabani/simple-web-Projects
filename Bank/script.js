// Store accounts in a simple object
let accounts = {};

// BankAccount class to hold user information
class BankAccount {
    constructor(name, pin) {
        this.name = name;
        this.pin = pin;
        this.balance = 0;
        this.transactions = [];
    }

    deposit(amount) {
        this.balance += amount;
        this.transactions.push(`Deposited $${amount}`);
        return `Deposited $${amount}. New balance: $${this.balance}`;
    }

    withdraw(amount) {
        if (this.balance >= amount) {
            this.balance -= amount;
            this.transactions.push(`Withdrew $${amount}`);
            return `Withdrew $${amount}. New balance: $${this.balance}`;
        } else {
            return "Insufficient balance!";
        }
    }

    showBalance() {
        return `Current balance: $${this.balance}`;
    }

    showTransactions() {
        return this.transactions.length > 0 ? this.transactions.join('<br>') : "No transactions yet.";
    }
}

// DOM Elements
const createAccountSection = document.getElementById('create-account');
const loginSection = document.getElementById('login');
const mainMenu = document.getElementById('main-menu');
const accountMenu = document.getElementById('account-menu');
const accountOutput = document.getElementById('account-output');

// Buttons
const createAccountBtn = document.getElementById('create-account-btn');
const loginBtn = document.getElementById('login-btn');
const submitCreateAccountBtn = document.getElementById('submit-create-account');
const submitLoginBtn = document.getElementById('submit-login');
const backCreateAccountBtn = document.getElementById('back-create-account');
const backLoginBtn = document.getElementById('back-login');
const showBalanceBtn = document.getElementById('show-balance-btn');
const depositBtn = document.getElementById('deposit-btn');
const withdrawBtn = document.getElementById('withdraw-btn');
const transactionsBtn = document.getElementById('transactions-btn');
const logoutBtn = document.getElementById('logout-btn');

// User Data
let currentAccount = null;

// Event Listeners
createAccountBtn.addEventListener('click', () => {
    mainMenu.classList.add('hidden');
    createAccountSection.classList.remove('hidden');
});

loginBtn.addEventListener('click', () => {
    mainMenu.classList.add('hidden');
    loginSection.classList.remove('hidden');
});

backCreateAccountBtn.addEventListener('click', () => {
    createAccountSection.classList.add('hidden');
    mainMenu.classList.remove('hidden');
});

backLoginBtn.addEventListener('click', () => {
    loginSection.classList.add('hidden');
    mainMenu.classList.remove('hidden');
});

submitCreateAccountBtn.addEventListener('click', () => {
    const name = document.getElementById('account-name').value;
    const pin = document.getElementById('account-pin').value;

    if (name && pin.length === 4 && !accounts[name]) {
        accounts[name] = new BankAccount(name, pin);
        document.getElementById('create-account-message').innerText = `Account created for ${name}`;
    } else {
        document.getElementById('create-account-message').innerText = 'Error: Invalid input or account exists.';
    }
});

submitLoginBtn.addEventListener('click', () => {
    const name = document.getElementById('login-name').value;
    const pin = document.getElementById('login-pin').value;

    if (accounts[name] && accounts[name].pin === pin) {
        currentAccount = accounts[name];
        document.getElementById('account-title').innerText = `${currentAccount.name}'s Account`;
        loginSection.classList.add('hidden');
        accountMenu.classList.remove('hidden');
    } else {
        document.getElementById('login-message').innerText = 'Invalid name or PIN.';
    }
});

showBalanceBtn.addEventListener('click', () => {
    accountOutput.innerHTML = currentAccount.showBalance();
});

depositBtn.addEventListener('click', () => {
    const amount = parseFloat(prompt("Enter deposit amount:"));
    if (!isNaN(amount)) {
        accountOutput.innerHTML = currentAccount.deposit(amount);
    } else {
        accountOutput.innerHTML = 'Invalid amount.';
    }
});

withdrawBtn.addEventListener('click', () => {
    const amount = parseFloat(prompt("Enter withdrawal amount:"));
    if (!isNaN(amount)) {
        accountOutput.innerHTML = currentAccount.withdraw(amount);
    } else {
        accountOutput.innerHTML = 'Invalid amount.';
    }
});

transactionsBtn.addEventListener('click', () => {
    accountOutput.innerHTML = currentAccount.showTransactions();
});

logoutBtn.addEventListener('click', () => {
    currentAccount = null;
    accountMenu.classList.add('hidden');
    mainMenu.classList.remove('hidden');
});
