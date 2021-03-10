
// ! CREATING A CONSTUCTOR TO TELL THE APP HOW TO CREATE A NEW CARD //


class Employee{

    // All input coming in from promps will be added to a new Employee using this constructor 
    constructor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    // methods for the class fuctions to handle the inputs 
    getName(){
        console.log(`Employee Name is ${this.name}`);
        return this.name;
    }

    getId(){
        console.log(`Employee ID is ${this.id}`);
        return this.id;
    }

    getEmail(){
        console.log(`Employee Email is ${this.email}`);
        return this.email;
    }

    getRole(){
        console.log(`Employee Role is ${this.getRole}`);
        return "Employee";
    }

}


module.exports = Employee;



// * Class reference 10-OOP Activities 20-21