
//let n : any = 1;
//Error, change type to 'any', but NOT recommended

let n : any = 1;

n = 'Rob'; 


let isWinter : Boolean = false;

//isWinter = 123;
//Error compiling

let count : Number = 5;

// let name : String = 'Bran';

//vector: an array containing only elements of the specified type
let names : String[] = ['john', 'Rickon', 'Arya'];
//let names : String[] = ['jon', 'Rickon', 'Arya', 5];
//Error 

//let names : any[] => to have an array with multiple types

enum Starks {Jon, Bran, Eddard, Catlyn};

let cat : Starks = Starks.Catlyn;

// function getName() : String{
//     return 'Bran'
// }

// function getName() : String{
//     return false;
// }
//Error


//the type "void" is used when a function does not return anything
function getAdvice() : void{
        console.log('wintes is comming');
}
//this function returning type "void" might just console that log: "winter is comming"
