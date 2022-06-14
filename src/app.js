import "./style.css";

const allImgs = document.querySelectorAll("img");
const btns = document.querySelectorAll("button");
const input = document.querySelector("input");

let nature = "nature";
let space = "space";
let deserts = "deserts";

input.addEventListener("input", (e) => {
  btns.forEach((btn) => {
    btn.classList.remove("bg-green-800");
    btn.classList.add("bg-green-600");
  });
  let userInput = e.target.value.toLowerCase();
  allImgs.forEach((img) => {
    img.classList.add("hidden");
    if (
      (nature.includes(userInput) && img.classList.contains("nature")) ||
      (space.includes(userInput) && img.classList.contains("space")) ||
      (deserts.includes(userInput) && img.classList.contains("deserts"))
    ) {
      showingImgs(img);
    }
  });
});

btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    btns.forEach((btn) => {
      btn.classList.remove("bg-green-800");
      btn.classList.add("bg-green-600");
    });
    btn.classList.remove("bg-green-600");
    btn.classList.add("bg-green-800");
    if (e.target.classList.contains("allBtn")) {
      allImgs.forEach((img) => {
        showingImgs(img);
      });
    } else if (e.target.classList.contains("natureBtn")) {
      filter("nature");
    } else if (e.target.classList.contains("spaceBtn")) {
      filter("space");
    } else if (e.target.classList.contains("desertsBtn")) {
      filter("deserts");
    }
  });
});

function filter(category) {
  allImgs.forEach((img) => {
    img.classList.add("hidden");
    if (img.classList.contains(category)) {
      showingImgs(img);
    }
  });
}

function showingImgs(img) {
  img.classList.remove("hidden");
  img.classList.add("block");
}
