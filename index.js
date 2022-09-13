const inquirer = require('inquirer');
const Manager = require('./lib/Manager');

// const Engineer = require("./lib/Engineer");
// const Manager = require("./lib/Manager");

const managers = [];
const engineers = [];
const interns = [];

function createManager() {
    inquirer 
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: "What is the manager's name?"
        },
        {
            type: 'input',
            name: 'id',
            message: "What is the manager's id?"
        },
        {
            type: 'input',
            name: 'email',
            message: "What is the manager's email?"
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is the manager's office number?"
        }
    ]


    )
    .then(function(answer) {
        console.log(answer);
        const {id, email, name, officeNumber} = answer;
        managers.push(new Manager(id, email, name, officeNumber));

        console.log(managers);
        createTeam();
    })
}

function createTeam() {
    inquirer 
    .prompt(
        {
            type: 'list',
            name: 'team',
            message: 'What type of employee would you like to add?',
            choices: ['Intern', 'Engineer', 'Manager', "None"]
        }
        )
}

createManager();