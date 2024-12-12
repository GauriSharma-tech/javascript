//FUNCTIONS
function Sayhi() {
    console.log("Gauri Sharma");
    
}
Sayhi()
//-----------------------------------------------------------------------------------
function sum(c,d) {
    console.log(`Sum of ${c} and ${d} is ${c + d}`);
}
sum(5, 10)
//-----------------------------------------------------------------------------------

function sum1(a, b) {
    return a+b;
}
x = sum1(10, 10);
console.log(x)
//-----------------------------------------------------------------------------------

function sum2(a, b) {
  return a + b;
}
console.log(sum2(15, 20))

//-----------------------------------------------------------------------------------
   //FUNCTION OVERLOADING
function sum3(a=50, b=20) {
  return a + b;
}
console.log(sum3(10, ));  //this will give 30(10+20)
console.log(sum3(30,));  //this will givw 50(30+20)

