const userNameInput = document.getElementById("user-name");
const userColorInput = document.getElementById("user-color");
console.log(userColorInput);
const submitBtn = document.getElementById("submit");

const title = document.querySelector("h1");
console.log(title);
const colorParagraph = document.querySelector("p");
console.log(colorParagraph);

// Al click sul bottone submit
submitBtn.addEventListener("click", function () {
  // Prendo il valore dell'input
  const userName = userNameInput.value;
  console.log(userName);
  const userColor = userColorInput.value;
  console.log(userColor);

  // Insersco il valore in h1
  title.innerHTML = `Ciao ${userName}!`;

  // Inserisco il valore in p
  colorParagraph.innerHTML = "Il tuo colore preferito è " + userColor;
  colorParagraph.classList.add(userColor);

  // Ripulisco l'input
  userNameInput.value = "";
  userColorInput.value = "";
});
