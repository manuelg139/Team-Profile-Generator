// ! THIS IS AN EXTENTION TO EMPLOYEE.JS //


// LINK TO THE EMPLOYEE FILE
const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber){

        // PASSING OVER TO MAIN CLASS THE VALUES AND ADDING GITHUB 
        super(name, id , email);
        this.officeNumber = officeNumber;
   /*      this.teamTitle = teamTitle; */
    }

    getOfficeNumber(){
        return this.officeNumber;
    }
   /*  getTeamTitle(){
        return this.teamTitle;
    } */


    getRole(){
        return "Manager";
    }
}

module.exports = Manager; 







// * Class reference 10-OOP Activities 22-23