const Employee = require("./employee");

class Engineer extends Employee {
    constructor(id, email, name, github) {
        super(id, email, name);
        this.github = github;
    }
}

module.exports = Engineer;