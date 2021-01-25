class Stark {
    name: string = "Brandon";
    static castle : string = "winterfell";
    saying: string;

    constructor(){
        this.saying = "winterfell!";
        //this give it a default property, same as above in the property definition
    }

    hello(person : string){
        console.log("Hello, " + person)
    }
}
//in classes, unlike members of an interface, property in a class cannot be declared optional
 
const Ned = new Stark();
 Ned.saying = "winter is comming";
 console.log(Stark.castle);
 Ned.hello("Robert");

 