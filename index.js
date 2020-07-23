const inquirer = require("inquirer");
const fs = require("fs");
const fileName = "README.md";
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
  name: "projectname",
  message: "What is your project's name?"
},
{
  type: "input",
  name: "Descriptions",
  message: "Please give a short description of your project"
},
{
  type: "list",
  name: "Licenses",
  message: "What kind of license should your project have?"
},
{
  type: "input",
  name: "Installations",
  message: "What command should we run to install dependencies?"
},

{
  type: "input",
  name: "Test",
  message: "What command should we run to run tests?"
},
{
  type: "input",
  name: "usage",
  message: "What does the user need to know about using the repo?"
},
{
  type: "input",
  name: "Contributions",
  message: "What does the user need to know about contributing to the repo?"
}, 
];

// function to write README file
function writeToFile(fileName, data) {
  inquirer.prompt(questions)
  .then(function(res){
    
  })
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
