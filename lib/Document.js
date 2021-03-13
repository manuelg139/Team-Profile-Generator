
// ! CREATING A CONSTUCTOR TO TELL THE APP HOW TO CREATE A NEW CARD //


class Document{

    // All input coming in from promps will be added to a new Employee using this constructor 
    constructor(type, path, title){
        this.type = type;
        this.path = path;
        this.title = title;
    }

    // methods for the class fuctions to handle the inputs 
    getType(){
        console.log(`Document type is ${this.type}`);
        return this.type;
    }

    getPath(){
        console.log(`Document path is ${this.path}`);
        return this.path;
    }

    getTitle(){
        console.log(`Document title is ${this.title}`);
        return this.title;
    }

    getDoc(){
        console.log(`Document doc is Document`);
        return "Document";
    }

}


module.exports = Document;



// * Class reference 10-OOP Activities 20-21