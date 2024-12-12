// MODERN FUNCTIONS

const Sayhi = () => console.log("Gauri Sharma")
Sayhi()

const sum = (a,b) => a+b;
console.log(sum(5,10));

const sum1 = (a,b)=> (a * b) - (a + b)
console.log(sum1(5,10))

//if we use curly braces..return keyword will be used

const sum2 = (a, b) =>
    {
        console.log(a + b);
        console.log(a * b);
        console.log(a / b);
}
    
sum2(10, 2)


const sum3 = (...num) =>{
    console.log(num);
}
sum3(10,20)
sum3(10)
sum3(0, 1, 2, 3, 4, 5, 6)
sum3(4 + 8)

