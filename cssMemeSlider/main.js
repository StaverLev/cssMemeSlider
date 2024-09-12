const sliderLine = document.querySelector(".slider__line");
const sliderLineWrapper = document.querySelector(".slider__line__wrapper");
const paginationItems = document.querySelectorAll(".pagination__item");
const text = document.querySelector(".slider__text");

const captions = ["First slide", "Second slide", "Third slide", "Fourth slide"];

let counter = 0;
let currentIndex = 0;

text.textContent = captions[0];

paginationItems.forEach((item, index, arr) => {
  item.addEventListener("click", (event) => {
    counter = index;

    if (index !== currentIndex) {
      text.style.transform = `translateX(-${
        sliderLineWrapper.offsetWidth + 20
      }px)`;
    }

    item.classList.toggle("pagination__item_selected");
    arr[currentIndex].classList.toggle("pagination__item_selected");
    currentIndex = index;

    sliderLine.style.transform = `translateX(-${
      counter * sliderLineWrapper.offsetWidth
    }px)`;
  });
});

text.addEventListener("transitionend", () => {
  text.textContent = captions[currentIndex];
  text.style.transform = `translateX(0px)`;
});
