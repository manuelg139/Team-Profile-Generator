const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an object using peramiters name, id and email when provided with valid arguments", () => {
            const manuel = new Engineer("Manuel",28,"manuelg139@gmail.com","manuelg139");
            //these should test the constructor values
            expect(manuel.name).toEqual("Manuel")
            expect(manuel.id).toEqual(28)
            expect(manuel.email).toEqual("manuelg139@gmail.com")
            expect(manuel.github).toEqual("manuelg139")
        });
    });
    //This should test the get github functionality
    describe("getGitHub", () => {
        it("should return the Github written on the class", () => {
            const manuel = new Engineer("Manuel",28,"manuelg139@gmail.com","manuelg139");
            //these should test the constructor values
            expect(manuel.getGithub()).toEqual("manuelg139")
        });
    });
    //this is going to test the get role functionality
    describe("getRole", () => {
        it("should return the Engineer type written on the class", () => {
            const manuel = new Engineer("Manuel",28,"manuelg139@gmail.com","manuelg139");
            //these should test the constructor values
            expect(manuel.getRole()).toEqual("Engineer")
        });
    });
})