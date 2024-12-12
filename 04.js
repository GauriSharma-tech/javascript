// Objects
//Anything in curly braces is called Object
let stud = {   //can also use Const here instread of let
    gender: "Female", //for rest keys, we may or may not use double quotes
    "Full name": "Gauri Sharma", //since there is space in between Full Name, that's why we used double quotes here
    email: "gaurisharma89892@gmail.com",
    age: 20,
    location: "Ghaziabad",
    loginDays: ["Sat", "Sun", "Tues"],
    islogin: true,
};
// console.log(stud);
// console.log(typeof stud);

stud.name = "Gauri Sharma";

// console.log(stud);

// console.table(stud);
// console.log(stud.age)
// console.log(stud["Full name"])
// console.log(stud["email"])

console.log(stud["Full name"])  
console.log(stud.name)
console.log(stud["name"]);
//if-else 
if (!stud.islogin) {    
    console.log(stud['loginDays']);   
}
//anything except false,null is true in javascript
if (stud.mobile) {
    console.log("Mobile is given");  
} //this will not give anything as mobile is not the key in the stud
if (stud.email) {
    console.log(stud.email);
    
}

let T1; //if t1={}/[] it will return t1 is there
if (T1) {
    console.log("T1 is there");
}
else {
    console.log("Not there");
}

// == (compare only value)
// ===(compare value and type)

stud.greeting = () => console.log("hello")
stud.greeting()

