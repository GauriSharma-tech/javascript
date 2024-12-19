/*  To print number till 10 using for , while loop

// for (let i = 1; i < 11; i++){
//     console.log(i)
// }

// let i = 1
// while (i < 11) {
//     console.log(i);
//     i++;
// } */
// --------------------------------------------------------------------
const nums = [10, 20, 30, 40, 50, 60]
for (let i = 0; i < nums.length;i++) {
    console.log(nums[i])
}
// --------------------------------------------------------------------
 console.log("Another method:")     
for (let i of nums) {
    console.log(i);
}
// --------------------------------------------------------------------

console.log("USING 'OF':")
const uname = "ABES ENGINEERING COLLEGE"
for (const c of uname) 
    console.log(c);

//of can be used only with array [],[{},{},{}]
// --------------------------------------------------------------------
console.log("Acccessing in map:")
const map = new Map()
map.set("py","Python")
map.set("js", "JavaScript")
map.set("cpp", "c++")
map.set("java", "Java")
// for (const m of map)
// console.log(m); THIS WILL GIVE THE MAP IN ARRAY FORMAT
    // console.log(m[0]); THIS WILL GIVE KEYS IN ARRAY
// console.log(m[1]);   THIS WILL GIVE VALUES OF ARRAY 
    for (const [ext, lname] of map) {
        // console.log(ext)
        console.log(`The ${lname} has ${ext} extension`)
    }
//---------------------------------------------------------------------
const MySelf = {
    Name: "GAURI SHARMA",
    ROLLNO: 2300320120094,
    Branch: "Computer Science",
    Section: "B",
}
for (let i in MySelf)
// console.log(MySelf[i]); This will only give values
    console.log(`The ${i} of student is ${MySelf[i]}`)

// for in - can print any single object
//---------------------------------------------------------------
const languages= [
  {
    lang: "C++",
    ext: ".cpp",
  },
  {
    lang: "C",
    ext: ".c",
  },
  {
    lang: "Python",
    ext: ".py",
  },
  {
    lang: "JavaScript",
    ext: ".js",
  },
  {
    lang: "Java",
    ext: ".java",
  },
];

for (i of languages) {
    const { lang, ext } = i;
    // console.log(`The extension of tech language ${i.lang} is ${i.ext}`)
    console.log(`the extension for ${lang} is ${ext}`)
    
}

//----------------------------------------------------------------------------
// Foreach
languages.forEach((item) => {
    console.log(item.lang);
    console.log(item.ext);
});
//---------------------------------------------------------------------------------
const prices = [1200, 400, 500, 800, 300, 2345];

const newprice = (prices, discount) => {
  const updated = prices.map((price) => {
    if (price > 1000) return price - (price * discount) / 100;
    return price;
  });
  return updated;
};
const updated = newprice(prices, 50);
// console.log(updated);
const filterPrices = prices.filter((price) => price > 1000);
console.log(filterPrices);

// reduce will return only one value
const totalSum = updated.reduce((sum, price) => sum + price, 0);
console.log("total price:", totalSum);
// ---------------------------------------------------------------------
const courses = [
  {
    lang: "C++",
    price: 600,
  },
  {
    lang: "C",
    price: 700,
  },
  {
    lang: "Python",
    price: 550,
  },
  {
    lang: "JavaScript",
    price: 3900,
  },
  {
    lang: "Java",
    price: 4000,
  },
];

const newcourses = courses.filter((course) => course.price > 3500);

const total = newcourses.reduce((sum, course) => sum + course.price, 0);

// Output the results
console.log(newcourses);
console.log(total);




