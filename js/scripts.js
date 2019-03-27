var link = document.querySelector(".contacts-button");
var popup = document.querySelector(".popup-letter");
var close = popup.querySelector(".button-close");

link.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.add("popup-raise");
});

close.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup-raise");
});


var link1 = document.querySelector(".contacts-map");
var popup1 = document.querySelector(".popup-map");
var close1 = popup1.querySelector(".button-close");

link1.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup1.classList.add("popup-map-raise");
});

close1.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup1.classList.remove("popup-map-raise");
});

