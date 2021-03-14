const Manager = require("../lib/manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an object using peramiters name, id and email when provided with valid arguments", () => {
            const manuel = new Manager("Manuel",28,"manuelg139@gmail.com","Office987");
            //these should test the constructor values
            expect(manuel.name).toEqual("Manuel")
            expect(manuel.id).toEqual(28)
            expect(manuel.email).toEqual("manuelg139@gmail.com")
            expect(manuel.officeNumber).toEqual("Office987")
        });
    });
    
    describe("getOfficeNumber", () => {
        it("should return the School written on the class", () => {
            const manuel = new Manager("Manuel",28,"manuelg139@gmail.com","Office987");
            //these should test the constructor values
            expect(manuel.getOfficeNumber()).toEqual("Office987")
        });
    });
    //this is going to test the get role functionality
    describe("getRole", () => {
        it("should return the Intern type written on the class", () => {
            const manuel = new Manager("Manuel",28,"manuelg139@gmail.com","Office987");
            //these should test the constructor values
            expect(manuel.getRole()).toEqual("Manager")
        });
    });
})