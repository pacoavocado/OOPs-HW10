// let Employee = require('./employee');

class Engineer extends Employee {
    
    constructor (name, id, email, github,) {
        
        super(name, id, email, github);
        this.github = github;
    }

    getGithub() {
        return inquirer.prompt([
        {
            type: 'input',
            message: 'enter their GitHub Username',
            name: 'gitname',
            when: (answers) => answers.position !== 'Intern'
          },
        console.log(this.github)
        ]);
    }

    getRole() {

    }

}

const engineer 
let bob = new Engineer("Bob", "2", "bob@gmail.com", "bobbyboy");
let dan = new Engineer("Dan", "3", "dan@gmail.com", "dannyboy");
let lilly = new Engineer("Lilly", "4", "lilly@gmail.com", "lillygal");

module.exports = Engineer;