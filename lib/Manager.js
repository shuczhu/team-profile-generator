const Employee = require("./employee");

class Manager extends Employee {
    constructor(id, email, name, officeNumber) {
        super(id, email, name);
        this.officeNumber = officeNumber;
    }

    getOffice() {
        return this.officeNumber;

    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;