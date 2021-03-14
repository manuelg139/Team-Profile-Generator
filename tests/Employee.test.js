
const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("Initialization", () => {

        it("should create an object using peramiters name, id and email when provided with valid arguments", () => {
            const manuel = new Employee("Manuel",28,"manuelg139@gmail.com");
            //these should test the constructor values
            expect(manuel.name).toEqual("Manuel")
            expect(manuel.id).toEqual(28)
            expect(manuel.email).toEqual("manuelg139@gmail.com")
        });
    });
    //this is going to test the get name functionality
    describe("getName", () => {
        it("should return the name written on the class", () => {
            const manuel = new Employee("Manuel",28,"manuelg139@gmail.com")
            //should return the name
            expect(manuel.getName()).toEqual("Manuel")
        });
    });

    //this is going to test the get id functionality
    describe("getId", () => {
        it("should return the Id written on the class", () => {
            const manuel = new Employee("Manuel",28,"manuelg139@gmail.com")
            //should return the name
            expect(manuel.getId()).toEqual(28)
        });
    });
    //this is going to test the get email functionality
    describe("getEmail", () => {
        it("should return the Email written on the class", () => {
            const manuel = new Employee("Manuel",28,"manuelg139@gmail.com")
            //should return the name
            expect(manuel.getEmail()).toEqual("manuelg139@gmail.com")
        });
    });

    //this is going to test the get role functionality
    describe("getRole", () => {
        it("should return the employee type written on the class", () => {
            const manuel = new Employee("Manuel",28,"manuelg139@gmail.com")
            //should return the name
            expect(manuel.getRole()).toEqual("Employee")
        });
    });
})