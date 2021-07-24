const fs = require("fs");
const inquirer = require("inquirer");
const createHTML = require("./dist/index.html");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const teamArray = [];


// manager question list
const teamQuestion = () => {
  return inquirer.prompt([
    {
      type: 'list',
      name: 'role',
      message: 'What is the employees role?',
      choices: ['Manager', 'Engineer', 'Intern']
    },
    {
      type: 'input',
      name: 'name',
      message: "What is the employee's name?",
      validate: nameInput => {
        if (nameInput){
          return true;
        } else {
          console.log("Please enter the employee's name");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'id',
      message: "What is the employee's ID number?",
      validate: idInput => {
        if (idInput){
          return true;
        } else {
          console.log("Please enter the employee's ID number.");
          return false;
        }
      }
    },
    {
      type:'input',
      name: 'email',
      message: "What is the employee's email address?",
      validate: emailInput => {
        validateEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(emailInput)
        if (validateEmail){
          return true;
        } else {
          console.log("Please enter a valid email address");
          return false;
        }
      }
    },
    {
      type:'input',
      name: 'office',
      message: 'What is the managers office number?',
      when: (input) => input.role === 'Manager',
      validate: officeInput => {
        if (officeInput){
          return true;
        } else {
          console.log("Please enter the manager's office number.");
          return false;
        }
      }
    },
    {
      type:'input',
      name: 'school',
      message: "Where does the intern attend school?",
      when: (input) => input.role === 'Intern',
      validate: schoolInput => {
        if (schoolInput){
          return true;
        } else {
          console.log("Please enter the name of the intern's school.");
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'github',
      message: "What is the engineer's GitHub account?",
      when: (input) => input.role === 'Engineer',
      validate: githubInput => {
        if (githubInput){
          return true;
        } else {
          console.log('Please enter a GitHub account');
          return false;
        }
      }
    },
    {
      type: 'confirm',
      name: 'addEmployee',
      message: 'Would you like to add another team member?',
      default: false
    }
  ]).then((mgrResponse) => {
    const { name, id, email, office, addEmployee } = mgrResponse;

      let newEmployee;
      if(role === 'Engineer'){
        newEmployee = new Engineer(name, id, email, github);

      } else if (role === 'Intern'){
        newEmployee = new Intern(name, id, email, school);
      }

      teamArray.push(newEmployee);

      if(addEmployee){
        return teamQuestion(teamArray);
        } else {
          return teamArray;
        }
      })
    
};




teamQuestion() ;