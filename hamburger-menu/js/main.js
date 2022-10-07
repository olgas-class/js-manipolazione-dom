const hamburgerBtn = document.querySelector(".header-right > a");
const hamburgerMenu = document.querySelector(".hamburger-menu");
console.log(hamburgerMenu);
const closeBtn = document.querySelector(".close");
console.log(closeBtn);

hamburgerBtn.addEventListener("click", function() {
    hamburgerMenu.classList.add("active");
});

closeBtn.addEventListener("click", function() {
    hamburgerMenu.classList.remove("active");
});