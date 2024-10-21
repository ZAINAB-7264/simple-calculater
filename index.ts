import inquirer from "inquirer";

const answer = await inquirer .prompt([
    {message: "Enter first number", type:"number", name:"firstNumber"},
    {message: "Enter second number", type:"number", name:"secondNumber"},
    {
    message: "select one of the operator to perform action",
    type:"list",
    name:"operator",
    choices:["Addition","Subtraction","Multiplication","Division"]
},
]);





