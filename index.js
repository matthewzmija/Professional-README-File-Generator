const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Please provide a detailed description of your project",
    },
    {
      type: "input",
      name: "installation",
      message: "What is required of the user to install/run this application?",
    },
    {
      type: "input",
      name: "usage",
      message: "Provide some instructions on how the application is utilized",
    },
    {
      type: "list",
      name: "license",
      message: "What license would you like to use?",
      choices: ["MIT", "GNU General Public License v3.0", "Apache License 2.0"],
    },
    {
      type: "input",
      name: "contribution",
      message: "Who are the contributors to this project?",
    },
    {
      type: "input",
      name: "tests",
      message: "What command is required to test your application?",
    },
    {
      type: "input",
      name: "username",
      message: "Please provide your GitHub username?",
    },
    {
      type: "input",
      name: "email",
      message: "Please provide your email",
    },
  ])
  .then((data) => {
    let licenseBadge = "";
    if (data.license == "MIT") {
      licenseBadge =
        "![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)";
    }
    if (data.license == "GNU General Public License v3.0") {
      licenseBadge =
        "![License: GNU General Public License v3.0](https://img.shields.io/badge/License-GNU%20General%20Public%20License%20v3.0-blue.svg)";
    }
    if (data.license == "Apache License 2.0") {
      licenseBadge ==
        "![License: Apache License 2.0](https://img.shields.io/badge/License-Apache%20License%202-blue.svg)";
    }
    const readMeFile = `# ${data.title} ${licenseBadge}

## Description
${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [License](#license)
- [Contact](#contact)

## Installation
${data.installation}

## Usage
${data.usage}

## Contribution
${data.contribution}

## Tests
${data.tests}

## License
${licenseBadge}

## Contact
My GitHub is https://github.com/${data.username} and my email is ${data.email}`;
    fs.writeFile("./GeneratedREADME/README.md", readMeFile, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });
