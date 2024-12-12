// Symbol always return unique value

let a = Symbol(10)
console.log(a);

let b = Symbol(10);
console.log(b);

console.log(a === b);
console.log(a==b);

console.log(typeof a);
console.log(typeof b);

let studs = ["abc", "def", "ghi",true,23.14,undefined]
console.log(studs);
console.log(typeof studs);
console.table(studs);
console.log(studs[1]);
console.log(studs[3]);
//Negative indexing not allowed
console.log(studs[-1]);
console.log(studs[-2]); 

studs.push('Ram'); //append from last
console.log(studs);

studs.unshift('Shyam') //add at start
console.log(studs);
studs.pop(); //remove from last
console.log(studs);
studs.shift(); //remove from start
console.log(studs);

studs.push("Gauri", "Nikita") //add both at last
console.log(studs);

studs.unshift("Gagan","Kartikey"); //add both at start
console.log(studs);

console.log(studs.includes("abc")) //it returns true/false whether they are present or not(this will give true)
console.log(studs.indexOf("abc")); //it returns index

console.log(studs.includes("shyam")); //it returns true/false whether they are present or not (this will give false)
console.log(studs.indexOf("ok"));  //returns -1 as not present in the object
 
const abc = studs.join() //join will convert the given array into string
console.log(abc); 


