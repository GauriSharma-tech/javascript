const h2s = document.querySelectorAll('h2')

for (let i = 0; i < h2s.length; i++){
    h2s[i].style.backgroundColor = "pink";
    h2s[i].style.padding = "10px";
    h2s[i].style.borderRadius = "15px";
}

h2s.forEach((h2) => {
    h2.style.color = "white";
    h2.style.backgroundColor = "blue";
    h2.style.padding = "10px";
    h2.style.borderRadius = "15px";

})
