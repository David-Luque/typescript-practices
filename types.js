//let n : any = 1;
//Error, change type to 'any', but NOT recommended
var n = 1;
n = 'Rob';
var isWinter = false;
//isWinter = 123;
//Error compiling
var count = 5;
// let name : String = 'Bran';
//vector: an array containing only elements of the specified type
var names = ['john', 'Rickon', 'Arya'];
//let names : String[] = ['jon', 'Rickon', 'Arya', 5];
//Error 
//let names : any[] => to have an array with multiple types
var Starks;
(function (Starks) {
    Starks[Starks["Jon"] = 0] = "Jon";
    Starks[Starks["Bran"] = 1] = "Bran";
    Starks[Starks["Eddard"] = 2] = "Eddard";
    Starks[Starks["Catlyn"] = 3] = "Catlyn";
})(Starks || (Starks = {}));
;
var cat = Starks.Catlyn;
// function getName() : String{
//     return 'Bran'
// }
// function getName() : String{
//     return false;
// }
//Error
//the type "void" is used when a function does not return anything
function getAdvice() {
    console.log('wintes is comming');
}
//this function returning type "void" might just console that log: "winter is comming"
