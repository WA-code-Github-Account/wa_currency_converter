#! /usr/bin/env/ node

import inquirer from "inquirer";

import chalk from "chalk";

let c_value: { [key: string]: number } = {
    USD: 1,
    UAE: 3.67,
    PKR: 278.40,
}
let ans = await inquirer.prompt([{
    name:"from",
    type:"list", 
    message:chalk.yellow.bold("\n\nconverting currency from:"),
    choices:["USD","UAE","PKR"],      
},
    {name:"to",
    type:"list",
    message:chalk.green.bold("\nconverting currency to:\n"),
    choices:["USD","UAE","PKR"]
},
{
    name:"amount",
    type:"number",
    message:chalk.red.bold("\nEnter the amount:\n"),
},
])
console.log(chalk.blue.bold(c_value[ans.to]/c_value[ans.from]*ans.amount));
