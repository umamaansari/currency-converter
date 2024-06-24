import inquirer from "inquirer";
// Define the list of currencies and their exchange rates
let exchange_rate = {
    "USD": 1, // base currency
    "EUR": 0.9, // European currency
    "JPY": 113, // Japanese currency
    "CAD": 1.3, // Canadian Dollar
    "AUD": 1.65, // Australian Dollar
    "PKR": 277.20, // Pakistani Rupees
    // Add more currencies and their exchange rates here
};
// Prompt the user to select currencies to convert from and to
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "Select the currency to convert from",
        choices: ["USD", "EUR", "JPY", "CAD", "AUD", "PKR"]
    },
    {
        name: "to_currency",
        type: "list",
        message: "Select the currency to convert into",
        choices: ["USD", "EUR", "JPY", "CAD", "AUD", "PKR"]
    },
    {
        name: "amount",
        type: "input",
        message: "Enter the amount to convert",
        validate: function (value) {
            const valid = !isNaN(parseFloat(value));
            return valid || "Please enter a number";
        }
    }
]);
let from_amount = exchange_rate[user_answer.from_currency];
let to_amount = exchange_rate[user_answer.to_currency];
let amount = parseFloat(user_answer.amount);
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
// Display the converted amount
console.log(`Converted amount: ${converted_amount.toFixed(2)}`);
