const inquirer = require("inquirer");
const chalk = require("chalk");
const Engineer = require("./engineer");
const Intern = require("./intern");
const Manager = require("./manager");

class Employee {

   constructor(name, id, email){
       
    this.name = name;
    this.id = id;
    this.email = email;
    
    this.id = id++;
    }

    getName() {
        return inquirer.prompt([
        {
            type: 'input',
            message: 'enter a team member?',
            name: 'name',
            validate: (value)=>{if(value){return true} else {return 'please enter a name'}},
          },
        
        console.log(`${this.name}`)
        ])
    }

    getId() {
        id = 1;
        if (id === id){
            id++;
        }

        console.log(`${this.id}`);

    }
    getEmail() {
        return inquirer.prompt([
        {
            type: 'input',
            message: 'enter their email?',
            name: 'email',
            validate: (value)=>{if(value){return true} else {return 'please enter an email'}}
          },

        console.log(`${this.email}`)
        ]);
    }

    getRole() {

        console.log(`${this.employee}`)

    }
}


module.exports = Employee;
