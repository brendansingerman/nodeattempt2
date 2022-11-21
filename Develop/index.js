// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
// TODO: Create an array of questions for user input
const license = {
  bsd3: "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)",
  bsd2: "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)",
  apache:
    "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
};
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  // {
  // type: "input",
  // name: "toc",
  // message: "How should this project be installed?"
  // },
  {
    type: "input",
    name: "description",
    message: "Describe your project.",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation instructions for this project?",
  },
  {
    type: "input",
    name: "usage",
    message: "How should this project be used?",
  },
  {
    type: "list",
    message: "Enter type of license: ",
    name: "license",
    choices: ["MIT", "Apache_2.0", "GNU GPL v3","No License"],
  },
  {
    type: "input",
    name: "contributions",
    message: "List the contribution guidelines for your project.",
  },
  {
    type: "input",
    name: "testing",
    message: "Test instructions:",
  },
  {
    type: "input",
    name: "questions",
    message: "Please enter your GitHub usermane and link:",
  },
];

// TODO: Create a function to write README file
// function writeToFile(fileName, data) {

// write an fs function that creates a file using the incoming parameters
// }

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((answers) => {
    // console.log(answer)
    // console.log("This was the text input: ",answer.name)
    console.log(generateMarkdown(answers));
    fs.writeFile("sample.md", generateMarkdown(answers), (error) => {
      if (error) {
        console.log(error);
      }
    });
    // writeToFile("sample.md", generateMarkdown(answers))
  });
}

// Function call to initialize app
init();
