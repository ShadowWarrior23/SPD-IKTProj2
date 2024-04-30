//Rendelőfelület popup
const popupButton = document.querySelector("#form");
const popupWindow = document.querySelector("section");

popupButton.addEventListener("click", function() {
    popupWindow.style.display = "block";
});

const closeButton = document.querySelector("#close-button");
closeButton.addEventListener("click", () => {
    popupWindow.style.display = "none";
})

//Játék popup
const popupButton1 = document.querySelector("#gameSelect");
const popupWindow1 = document.querySelector(".game");

popupButton1.addEventListener("click", function() {
    popupWindow1.style.display = "block";
});

const closeButton1 = document.querySelector("#close-button");
closeButton1.addEventListener("click", () => {
    popupWindow1.style.display = "none";
})