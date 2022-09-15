const inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer')

const fs = require('fs');

const managers = [];
const engineers = [];
const interns = [];

const generateHTML = require('./src/generateHTML');

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
        .then(function (answer) {
            const { id, email, name, officeNumber } = answer;
            managers.push(new Manager(id, email, name, officeNumber));

            createTeam();
        })
};

function createEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the engineer's name?"
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the engineer's id?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the engineer's email?"
            },
            {
                type: 'input',
                name: 'github',
                message: "What is the engineer's github?"
            }
        ]


        )
        .then(function (answer) {
            const { id, email, name, github } = answer;
            engineers.push(new Engineer(id, email, name, github));
            createTeam();
        })
};

function createIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the intern's name?"
            },
            {
                type: 'input',
                name: 'id',
                message: "What is the intern's id?"
            },
            {
                type: 'input',
                name: 'email',
                message: "What is the intern's email?"
            },
            {
                type: 'input',
                name: 'school',
                message: "What is the intern's school?"
            }
        ]


        )
        .then(function (answer) {
            const { id, email, name, school } = answer;
            interns.push(new Intern(id, email, name, school));
            createTeam();
        })
};

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
        .then(function (answers) {
            // console.log(answers.team);
            switch (answers.team) {
                case 'Intern':
                    createIntern();
                    break;
                case 'Engineer':
                    createEngineer();
                    break;
                case 'Manager':
                    createManager();
                    break;
                default:
                    console.log("Thank you for using team profile generator!");
                    // console.log(interns);
                    fs.writeFileSync('./dist/team.html', generateHTML( {managers, engineers, interns}))
                    ;
                    return
            }
        })
}

createTeam();