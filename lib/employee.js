const inquirer = require("inquirer");
const chalk = require("chalk");
const Engineer = require("./engineer");
const Intern = require("./intern");
const Manager = require("./manager");

class Employee {

   constructor( name, id, email, ){
       
    this.name = name;
    this.id = id;
    this.email = email;
    
    }

    getName() {
        
        console.log(`${this.name}`);
        
    }

    getId() {

        console.log(`${this.id}`);

    }
    getEmail(){

        console.log(`${this.email}`);
        
    }

    getRole() {
        console.log(`${this.employee}`)
    }
}


module.exports = Employee;
