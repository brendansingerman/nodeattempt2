// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  console.log("This comes from index.js",data)
  return `
# ${data.title}

## Table of Contents:
- [Project Description](#Description)
- [Installation](#Installation)
- [Usage](#Usage)
- [Contributions](#Contributions)
- [Testing](#Testing)
- [Questions](#Questions)
- [License](#License)

## Description
${data.description}

##Installation
${data.installation}

##Usage
${data.usage}

##Contributions
${data.contributions}

##Testing
${data.testing}

##Questions
${data.questions}

`;
}

module.exports = generateMarkdown;

// return `<!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta http-equiv="X-UA-Compatible" content="IE=edge">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     bring in bootstrap here
//     <title>Document</title>
// </head>
// <body>
//     function to return individual employee cards here
//     ${employeeCards(data)}
// </body>
// </html>`