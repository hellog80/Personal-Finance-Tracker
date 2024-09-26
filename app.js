// Get elements from DOM
const balanceEl = document.getElementById("current-balance");
const transactionListEl = document.getElementById("transaction-list");
const formEl = document.getElementById("add-transaction-form");
const descriptionEl = document.getElementById("description");
const amountEl = document.getElementById("amount");
const categoryEl = document.getElementById("category");

let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

// Functions
function updateBalance() {
    const total = transactions.reduce((acc, transaction) => acc + transaction.amount, 0);
    balanceEl.innerText = `$${total.toFixed(2)}`;
}

function updateTransactions() {
    transactionListEl.innerHTML = '';
    transactions.forEach((transaction, index) => {
        const li = document.createElement("li");
        li.classList.add(transaction.amount > 0 ? "income" : "expense");
        li.innerHTML = `
            ${transaction.description} (${transaction.category}): 
            <span>${transaction.amount > 0 ? "+" : ""}${transaction.amount}</span>
            <button onclick="removeTransaction(${index})">X</button>
        `;
        transactionListEl.appendChild(li);
    });
}

function addTransaction(event) {
    event.preventDefault();
    const description = descriptionEl.value.trim();
    const amount = parseFloat(amountEl.value);
    const category = categoryEl.value.trim();

    if (description === '' || isNaN(amount) || category === '') {
        alert("Please fill in all fields.");
        return;
    }

    const transaction = { description, amount, category };
    transactions.push(transaction);

    localStorage.setItem("transactions", JSON.stringify(transactions));
    descriptionEl.value = '';
    amountEl.value = '';
    categoryEl.value = '';
    updateTransactions();
    updateBalance();
    updateChart();
}

function removeTransaction(index) {
    transactions.splice(index, 1);
    localStorage.setItem("transactions", JSON.stringify(transactions));
    updateTransactions();
    updateBalance();
    updateChart();
}

formEl.addEventListener("submit", addTransaction);

// Chart.js
const ctx = document.getElementById("chart").getContext("2d");
let chart;

function updateChart() {
    const income = transactions
        .filter(transaction => transaction.amount > 0)
        .reduce((acc, transaction) => acc + transaction.amount, 0);
    const expense = transactions
        .filter(transaction => transaction.amount < 0)
        .reduce((acc, transaction) => acc + transaction.amount, 0);

    if (chart) {
        chart.destroy();
    }

    chart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: ['Income', 'Expense'],
            datasets: [{
                label: 'Balance',
                data: [income, Math.abs(expense)],
                backgroundColor: ['green', 'red'],
            }]
        }
    });
}

// Initialize the app
updateTransactions();
updateBalance();
updateChart();
