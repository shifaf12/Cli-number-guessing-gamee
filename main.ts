

//  #! /usr/bin/env node  
import inquirer from "inquirer"
import chalk from "chalk";

// // 1) computer will generate a random number.

// // 2) user input for guessing number.

// // 3) Compare user input with computer generated number and show result.
const randomNumber = Math.floor(Math.random()*6 +1)
//console.log(randomNumber);

// const randomNumber = 13;

 const answers = await inquirer.prompt([
    {name: "userGussesdNumber", 
    type: "number",
   message: "please guess a number between 1 - 6:",
}
])


if (answers.userGussesdNumber === randomNumber){
    console.log(chalk.bgMagenta("CONGRATULATIONS! you gussesd right number."));
     
 }else{
      console.log(chalk.bgGray("you gussed wrong number."));
     
    }