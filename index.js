
const inquirer = require('inquirer');
const fs = require('fs');
const { ManagerQ, EngineerQ, InternQ } = require('./src/questions');
const { employeeCard, hEl } = require('./src/teamHtml');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const manager = new ManagerQ();
const engineer = new EngineerQ();
const intern = new InternQ();

const employeeQuestions = (inputStr) => {
    switch(inputStr) {
        case "Manager":
            return manager.getQuestions();
        case "Engineer":
            return engineer.getQuestions();
        case "Intern":
            return intern.getQuestions();
        default:
            return [];
    }
};

function getEmployees(employees) {
    if(!employees) {
        employees = [];
    }
    if(employees.length === 0) {
        console.log("You have yet to add any employees!\n");
    } else if(employees.length === 1) {
        console.log("You have added one employee so far!\n");
    } else {
        console.log(`You have added a total of ${employees.length} employees so far.\n`);
    }
    inquirer.prompt(
        {
            type: "list",
            name: "employeeType",
            message: "Which type of employee would you like to add?",
            choices: ["Manager","Engineer","Intern"]
        }
    )
    .then(employee => {
        const questionaire = employeeQuestions(employee.employeeType);
        inquirer.prompt(
            questionaire
        )
        .then(employeeData => {
            if(isNaN(employeeData.id) || employeeData.id <= 0 || Math.floor(employeeData.id) != employeeData.id) {
                console.log("The employee id must be a positive integer.");
                getEmployees(employees);
            } else if(employeeData.hasOwnProperty("officeNumber") && (isNaN(employeeData.officeNumber) || employeeData.officeNumber <= 0 || Math.floor(employeeData.officeNumber) != employeeData.officeNumber)) {
                console.log("The manager's office number must be a positive integer.");
                getEmployees(employees);
            } else {
                let nextEmployee;
                if(employeeData.hasOwnProperty("officeNumber")) {
                    nextEmployee = new Manager(employeeData.name,employeeData.id,employeeData.email,employeeData.officeNumber);
                } else if(employeeData.hasOwnProperty("github")) {
                    nextEmployee = new Engineer(employeeData.name,employeeData.id,employeeData.email,employeeData.github);
                } else {
                    nextEmployee = new Intern(employeeData.name,employeeData.id,employeeData.email,employeeData.school);
                }
                employees.push(nextEmployee);
                if(!employeeData.addEmployee) {
                    console.log(employees);
                    let html = "<html><head><title>My Team</title>"; //More will be added later

                    html += `</head><body>${hEl("My Team",1,[])}`;
                    for(var i = 0; i < employees.length; i++) {
                        html += employeeCard(employees[i]);
                    }
                    html += `</body></html>`;
                    fs.writeFile('./dist/MyTeam.html', html, err => {
                        if(err) {
                            console.log(err);
                        }
                    });
                } else {
                    getEmployees(employees);
                }
            }
        });
    });
}

getEmployees();