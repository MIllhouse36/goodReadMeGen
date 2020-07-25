const inquirer = require("inquirer");
const fs = require("fs");
const axios = require(`axios`)
const generateMd = require("./utils/generateMarkdown")

// array of questions for user
const questions =
[ 
{
  type: "input",
  name: "username",
  message: "What is your Github username?"
},
{
  type: "input",
  name: "email",
  message: "What is your email address?"
},
{
  type: "input",
  name: "title",
  message: "What is your project's name?"
},
{
  type: "input",
  name: "Descriptions",
  message: "Please give a short description of your project"
},
{
  type: "list",
  name: "License",
  message: "What kind of license should your project have?",
  choices: [
    "MIT", 
    "Apache-2.0", 
    "BSD", 
    "WTFPL"
  ]
},
{
  type: "input",
  name: "Installation",
  message: "What command should we run to install dependencies?"
},

{
  type: "input",
  name: "Test",
  message: "What command should we run to run tests?"
},
{
  type: "input",
  name: "Usage",
  message: "What does the user need to know about using the repo?"
},
{
  type: "input",
  name: "Contribution",
  message: "What does the user need to know about contributing to the repo?"
}, 
];

// function to write README file
function writeToFile(fileName ) {
  inquirer.prompt(questions)
  .then(function(data){
    const fileMd = generateMd(data)
    console.log(fileMd)
  
    fs.writeFile(fileName, fileMd, function(error){
      if (error){
        throw(error)
      } 
    })
    
    
  })
}

// function to initialize program
function init() {
writeToFile("READMEsample.md")
}

// function call to initialize program
init();
