class Person {
    name : String;
    constructor (name : String) {
        this.name = name;
    }
    dance(){
        console.log(this.name + " is dancing");
    }
}

const bran = new Person("Bran");
bran.dance();

class AwesomePerson extends Person {
    dance(){
        console.log("SO AWESOME!");
        super.dance();
    }
}
//in typescript when we override a function it doens't automatically call the function in the class it extends. we need the "super"


const robb = new AwesomePerson("Robb");
robb.dance();