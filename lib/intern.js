// const Employee = require('./employee');

class Intern extends Employee {

    constructor (name, id, email, school,) {
        
        super(name, id, email, school);
        this.school = school;

    }

    getSchool() {

        console.log(this.school);

    }
 
}
const intern = new Intern("Robert", "6", "robert@gmail.com", "Princeton");
const intern = new Intern("Jenny", "7", "jenny@gmail.com", "Yale");
const intern = new Intern("Ron", "8", "ron@gmail.com", "Harvard");

intern.forEach(intern => intern.getRole());






module.exports = Intern;