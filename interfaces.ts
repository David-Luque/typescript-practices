interface Stark {
    name: String;
    age?: Number;   
}
//all of this are required parameters
//whit "?" were are defining that property as not required when using this interface

function printName(stark : Stark) {
    console.log(stark.name)
}

printName({name: "Eddard"});
printName({name: "Joe"}); 
