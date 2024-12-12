//shortcut to print
console.log("Hello JS");  


// const,let,var are keywords for ddeclaring variables
const name= "Gauri"
let Age = 20
console.log(name);
console.log(Age);

//name will not reassign,const value never changed once assigned
// name = 'vipin'
// console.log(name);

// Age = 53
// console.log(Age); 
//we can reassign in let 

console.log('Name :', name)
console.log('Hello,My name is', name, 'and my age is', Age, 'years old');
console.log(`Hello, My name is ${name} and I am ${Age} years old`);

let salary;
console.log(salary);

let num = 5;
console.log(typeof num);
num = 5.34;
console.log(typeof num);
num = "Hello";
console.log(typeof num);
num = false;
console.log(typeof num);
num = {};
console.log('num type:', typeof num);

// Data-Types- Primitive
/*
1.Number
2.String
3.Boolean
4.null
5.undefined
6.symbol
7.bigInt
*/
console.log("Differentate b/w undefined and null type");

let xyz;
console.log(typeof xyz);
xyz = null;
console.log(typeof xyz);


