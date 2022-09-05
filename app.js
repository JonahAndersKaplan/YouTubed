import fetchData from "./src/fetchData.js";
import displayData from "./src/displayData.js";
import paginate from "./src/paginate.js";
import displayButtons from "./src/displayButtons.js";

// const searchTerm = "Sam Gilbert";
const apiKey = "AIzaSyD-EI2HpKERrVIDZM2_EGOL8rZ8c3l8oj4";
// const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=`;
const form = document.querySelector(".form");
const formInput = document.querySelector(".form-input");
const resultsDOM = document.querySelector(".results");

const btnContainer = document.querySelector(".btn-container");
console.log(btnContainer);

let index = 0;
let pages = [];

const setupUI = () => {
  displayData(pages[index]);
  displayButtons(btnContainer, pages, index);
};

const presentVideos = async (searchResult) => {
  const data = await fetchData(searchResult);
  pages = paginate(data);
  setupUI();
};

btnContainer.addEventListener("click", function (e) {
  console.log(e.target);
  if (e.target.classList.contains("btn-container")) return;
  if (e.target.classList.contains("page-ptn")) {
    index = parseInt(e.target.dataset.index);
  }
  if (e.target.classList.contains("next-btn")) {
    index++;
    if (index > pages.length - 1) {
      index = 0;
    }
  }
  if (e.target.classList.contains("prev-btn")) {
    index--;
    if (index < 0) {
      index = pages.length - 1;
    }
  }
  setupUI();
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const searchResult = formInput.value;
  console.log(searchResult);
  if (!searchResult) {
    resultsDOM.innerHTML = `<div class="error"> please enter a valid search term </div>`;
    return;
  }
  presentVideos(searchResult);
  // displayData(data);
  // console.log(searchResult);
});
