#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";

const runAnimation = () => {
    return new Promise((resolve) => {
        setTimeout(resolve, 2000);
    })
};

async function welcome() {
    let animation = chalkAnimation.rainbow("Welcome to Number Guessing Game:");
    await runAnimation();

    animation.stop();

    startAgain();
};

await welcome();

async function guessNumber() {

    let randomNum: number = Math.floor(Math.random() * 10 + 1);

    for (let i = 1; i <= 4; i++) {

        if (i === 4) {
            console.log(chalk.red(`Last Attempt`));
        }

        console.log(chalk.cyan(`Attempt No. ${i}`));

        let guessNum: { num: number } = await inquirer.prompt([{
            name: "num",
            type: "number",
            message: "Guess The Number 1 To 10: ",
            default() {
                return 0;
            }
        }]);

        if (guessNum.num === randomNum) {

            console.log(chalk.blue("You Win"));
            break;
        } else {
            console.log(chalk.yellow("Try Again"));
        }

    };
};

async function startAgain() {
    do {
        await guessNumber();

        var againCal = await inquirer.prompt({
            type: "input",
            name: "restart",
            message: "Do you want Continue ? Press y or n: "
        });

    } while (againCal.restart === 'y' || againCal.restart === 'Y' || againCal.restart === 'yes' || againCal.restart === 'Yes' || againCal.restart === 'YES');
};