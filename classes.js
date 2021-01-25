var Stark = /** @class */ (function () {
    function Stark() {
        this.name = "Brandon";
        this.saying = "winterfell!";
        //this give it a default property, same as above in the property definition
    }
    Stark.prototype.hello = function (person) {
        console.log("Hello, " + person);
    };
    Stark.castle = "winterfell";
    return Stark;
}());
//in classes, unlike members of an interface, property in a class cannot be declared optional
var Ned = new Stark();
Ned.saying = "winter is comming";
console.log(Stark.castle);
Ned.hello("Robert");
