const netflix = ["Idea of you","squid game","Game of Thrones"]
const prime = ["Anyone but you", "Family Man"]
prime.push(netflix);
console.log(prime);
console.table(prime)

const series = [...netflix, ...prime]
console.log(series);


