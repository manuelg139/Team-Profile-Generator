// ! THIS IS AN EXTENTION TO EMPLOYEE.JS //


// LINK TO THE EMPLOYEE FILE
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){

        // PASSING OVER TO MAIN CLASS THE VALUES AND ADDING GITHUB 
        super(name, id , email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

    getRole(){
        return "Manager";
    }
}

module.exports = Manager; 







// * Class reference 10-OOP Activities 22-23