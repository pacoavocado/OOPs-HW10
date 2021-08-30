const Employee = require('./employee');

class Manager extends Employee {

    constructor (name, id, email, officeNumber) {
        
        super(name, id, email, officeNumber);
        this.officeNumber = officeNumber;
        id = 1;
        
    }


    getRole() {
        return "Manager"
    }
}

const manager = new Manager("Dale", "1", "dale@gmail.com", "302")

module.exports = Manager;