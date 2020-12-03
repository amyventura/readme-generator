// inquirer package
const inquirer = require("inquirer");
const open = require("open");
const fs = require("fs");
const util = require("util");
const pkg = require('badges');
const generateMarkdown = require("./generate-markdown.js");
const writeAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [{
        message: "What is your GitHub username?",
        name: "github",
        type: "input"
    },
    {
        message: "What is your email address?",
        name: "email",
        type: "input"
    },
    {
        message: "What is the title of your project?",
        name: "title",
        type: "input"
    },
    {
        message: "Provide a brief description of your project.",
        name: "description",
        type: "input"
    },
    {
        message: "Is there any steps required to install your project, if so please provide a step by step description?",
        name: "installation",
        type: "input"
    },
    {
        message: "Choose your license:",
        choices: ["MIT", "Apache 2.0"],
        name: "license",
        type: "list"
    },
    {
        message: "What does the user need to know about using your project?",
        name: "usage",
        type: "input"
    },
    {
    message: "Please list the technologies used in your project.",
    name: "technologies",
    type: "input"
    },
    {
        message: "What does the user need to know about contributing to your project?",
        name: "contributing",
        type: "input"
    },
    {
        message: "Provide directions on how to run the tests associated with your project.",
        name: "tests",
        type: "input"
    }

];

// function to initialize program
async function init() {
    // get answers
    const answers = await inquirer.prompt(questions);

    // generate html
    const html = generateMarkdown(answers);

    // save to file
    await writeAsync(answers.title + "-README.md", html);
}

// function to call initialize program
init();