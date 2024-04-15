#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
let balance = 3000;
let password = 1234;

console.log(
  "\t--------------------------------------------------------------------\t"
);
console.log(
  chalk.red(
    "\t| ================ Welcome to the Aj ATM Services ================ |\t"
  )
);
console.log(
  "\t--------------------------------------------------------------------\t"
);

let atm_pin = await inquirer.prompt([
  { name: "pin", type: "number", message: " Please Enter Your ATM Pin Code" },
]);

if (atm_pin.pin === password) {
  console.log("You have Successfully Logged In!");
  let menu = await inquirer.prompt([
    {
      name: "menu",
      type: "list",
      message: "Please Select What You Want",
      choices: ["Withdraw", "Quik Withdraw", "Check Balance"],
    },
  ]);

  if (menu.menu === "Withdraw") {
    let withdraw_amount = await inquirer.prompt([
      {
        name: "amount",
        type: "number",
        message: "Please Enter Withdrawal Amount",
      },
    ]);

    if (balance < withdraw_amount.amount) {
      console.log(chalk.red("Insufficient Balance"));
    } else {
      balance -= withdraw_amount.amount;
      console.log(
        chalk.green(
          `Withdrawal Successfully! Now Your New Balance Is ${balance}`
        )
      );
    }
  } else if (menu.menu === "Quik Withdraw") {
    let quik_withdraw_amount = await inquirer.prompt([
      {
        name: "Quik_Withdrawal",
        type: "list",
        message: "Please Select Withdrawal Amount",
        choices: [500, 1000, 2000, 3000, 4000, 5000],
      },
    ]);
    if (balance < quik_withdraw_amount.Quik_Withdrawal) {
      console.log(chalk.red("Insufficient Balance"));
    } else {
      balance -= quik_withdraw_amount.Quik_Withdrawal;
      console.log(
        chalk.green(
          `Withdrawal Successfully! Now Your New Balance Is ${balance}`
        )
      );
    }
  } else if (menu.menu === "Check Balance") {
    console.log(`Your Current Balance is ${balance}`);
  }
} else {
  console.log("Invalid Password");
}
