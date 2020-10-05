// inquirer package
const inquirer = require("inquirer");
const open = require("open");
const fs = require("fs");
const util = require("util"); 
const generateMarkdown = require("./generate-markdown.js");
const writeAsync = util.promisify(fs.writeFile);                    

// array of questions for user
const questions = [
    {
        message: "What is your GitHub username?",
        name: "github"
    },
    {
        message: "What is your email address?",
        name: "email"
    },
    {
        message: "What is the title of your project?",
        name: "title"
    },
    {
        message: "Provide a brief description of your project.",
        name: "description"
    },
    {
        message: "Is there any steps required to install your project, if so please provide a step by step description?",
        name: "installation"
    },
    {
        message: "What kind of license should your project have?",
        name: "license"
    },
    {
        message: "What does the user need to know about using your project?",
        name: "usage"
    },
    {
        message: "What does the user need to know about contributing to your project?",
        name: "contributing"
    },
    {
        message: "Provide directions on how to run the tests associated with your project.",
        name: "tests"
    },



];



// function to initialize program
async function init() {
    // get answers
    const answers = await inquirer.prompt(questions);

    // generate html
    const html = generateMarkdown(answers);
   
    // save to file
    await writeAsync(answers.title + ".md", html);
}

// function to call initialize program
init();