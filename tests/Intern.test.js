const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an object using peramiters name, id and email when provided with valid arguments", () => {
            const manuel = new Intern("Manuel",28,"manuelg139@gmail.com","UTAustin");
            //these should test the constructor values
            expect(manuel.name).toEqual("Manuel")
            expect(manuel.id).toEqual(28)
            expect(manuel.email).toEqual("manuelg139@gmail.com")
            expect(manuel.school).toEqual("UTAustin")
        });
    });
    
    describe("getSchool", () => {
        it("should return the School written on the class", () => {
            const manuel = new Intern("Manuel",28,"manuelg139@gmail.com","UTAustin");
            //these should test the constructor values
            expect(manuel.getSchool()).toEqual("UTAustin")
        });
    });
    //this is going to test the get role functionality
    describe("getRole", () => {
        it("should return the Intern type written on the class", () => {
            const manuel = new Intern("Manuel",28,"manuelg139@gmail.com","UTAustin");
            //these should test the constructor values
            expect(manuel.getRole()).toEqual("Intern")
        });
    });
})