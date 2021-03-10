// ! THIS IS AN EXTENTION TO EMPLOYEE.JS //


// LINK TO THE EMPLOYEE FILE
const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school){

        // PASSING OVER TO MAIN CLASS THE VALUES AND ADDING GITHUB 
        super(name, id , email);
        this.school = school;
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return "Intern";
    }
}

module.exports = Intern; 




// * Class reference 10-OOP Activities 22-23