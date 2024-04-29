const popupButton = document.querySelector("#form");
const popupWindow = document.querySelector("section");

popupButton.addEventListener("click", function() {
    popupWindow.style.display = "block";
});

const closeButton = document.querySelector("#close-button");
closeButton.addEventListener("click", () => {
    popupWindow.style.display = "none";
})




/*Popup*/

