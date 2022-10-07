// PRELEVARE ELEMENTI DOM
const myTitle = document.getElementById("my-title");
console.log(myTitle);
// 
// const firstItem = document.querySelector("li:first-child");
// console.log(firstItem);

const red = document.querySelector("p.red");
// console.log(red);

// CAMBBIARE LO STILE DEGLI ELEMENTI
// console.log(red.className);
// red.className += " bg-yellow";
// red.className += " red";

console.log(red.classList);
red.classList.add("bg-yellow");
red.classList.add("red");
red.classList.remove("red");
red.classList.toggle("red");

myTitle.style.color = "green";
myTitle.style.backgroundColor = "pink";

// INSERIRE QUALCOSA ALL'INTERNO DI ELEMENTI
// myTitle.innerHTML = "Hello " + myTitle.innerHTML + " e sono contento di vedervi";
myTitle.append(" e sono contento di vedervi");
myTitle.prepend("Vi saluto");

console.log(myTitle.innerHTML);

// GESTIONE EVENTI
const myBtn = document.getElementById("my-btn");
console.log(myBtn);

myBtn.addEventListener("click", function() {
    myBtn.classList.toggle("red");
}
);

// Quando passo con il mouse sul paragrafo timido, diventa rosso
// Quando tolgo, diventa nero
const shyParagraph = document.getElementById("shy");

shyParagraph.addEventListener("mouseover", function() {
    console.log("mouse");
    shyParagraph.classList.add("red");
});

shyParagraph.addEventListener("mouseleave", function() {
    shyParagraph.classList.remove("red");
});