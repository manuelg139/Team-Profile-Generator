// ! THIS IS AN EXTENTION TO EMPLOYEE.JS //


// LINK TO THE EMPLOYEE FILE
const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github){

        // PASSING OVER TO MAIN CLASS THE VALUES AND ADDING GITHUB 
        super(name, id , email);
        this.github = github;
    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return "Engineer";
    }
}

module.exports = Engineer; 







// * Class reference 10-OOP Activities 22-23