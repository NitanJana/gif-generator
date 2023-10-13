import "./style.css";

let fixedList;
const searchEndPoint = "https://api.giphy.com/v1/gifs/search";
const apiKey = "5GKwlugTc2fvgI0J70inREhyabHFK7TB";
const defSearchTerm = "cat";
let url = `${searchEndPoint}?api_key=${apiKey}&q=${defSearchTerm}`;

search(url);

const gifImg = document.querySelector(".main-image");
const searchButton = document.querySelector("#btn-search");
const refreshButton = document.querySelector("#btn-refresh");
const searchBox = document.querySelector("#searchBox");
searchBox.value = "";

refreshButton.addEventListener("click", function () {
  displayImg(fixedList);
});

searchButton.addEventListener("click", function () {
  let searchTerm = searchBox.value;
  if (searchTerm) {
    url = `${searchEndPoint}?api_key=${apiKey}&q=${searchTerm}`;
  }
  search(url);
});

function search(url) {
  fetch(url, { mode: "cors" })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      fixedList = response;
      displayImg(response);
    });
}

function displayImg(response) {
  gifImg.src =
    response.data[Math.floor(Math.random() * 50)].images.original.url;
}
