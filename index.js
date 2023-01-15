#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import chalkAnimation from "chalk-animation";
import { titleTimer } from "./src/_title.js";
import { Person } from "./src/_cPerson.js";
import { Student } from "./src/_cStudent.js";
class _Opp {
    // run the app
    async Run() {
        await this.AppTitle();
        await this.Program();
    }
    // autor watermark on app at the begening
    async AppTitle() {
        const title = chalkAnimation.neon(`__________________Welcome to M.B App__________________`);
        await titleTimer();
        title.stop();
        console.log(chalk.bgRed.italic(`                                                             Autor:"M.B"`));
    }
    // app
    async Program() {
        //user input
        const input = await inquirer.prompt([{
                type: "input",
                name: "usrInput",
                message: "Type 1 if you like to talk to others and type 2 if you would rather keep to yourself ",
                validate: function (input) {
                    if (input !== "" && Number(input)) {
                        return true;
                    }
                    else {
                        return "invalid input";
                    }
                },
            },]);
        let MyPerson = new Person();
        MyPerson.AskQuestion(parseInt(input.usrInput));
        console.log(chalk.cyan(`You are: ${MyPerson.GetPersonality()}`));
        //user input
        const name = await inquirer.prompt([{
                type: "input",
                name: "usrInput",
                message: "What is your Name ",
                validate: function (input) {
                    if (input !== "" && isNaN(parseInt(input))) {
                        return true;
                    }
                    else {
                        return "invalid input";
                    }
                },
            },]);
        let myStudent = new Student();
        myStudent.Name = name.usrInput;
        console.log(chalk.cyan(`Your name is :${myStudent.Name} and your personality type is :${myStudent.GetPersonality()} `));
        console.log(chalk.green(chalk.bgGray(` #                 Thanks for using M.B App                 # `)));
    }
}
let run = new _Opp();
run.Run();
