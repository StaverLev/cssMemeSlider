const sliderLine = document.querySelector(".slider__line");
const sliderLineWrapper = document.querySelector(".slider__line__wrapper");
const paginationItems = document.querySelectorAll(".pagination__item");
const paginationDots = document.querySelectorAll(".pagination__dot");
const text = document.querySelector(".slider__text");

const captions = ["First slide", "Second slide", "Third slide", "Fourth slide"];

let counter = 0;
let currentIndex = 0;

text.textContent = captions[0];

window.addEventListener("resize", () => {
  paginationDots[currentIndex].classList.remove(
    "pagination__dot_selected_hovered"
  );
  counter = 0;
  currentIndex = 0;
  text.textContent = captions[0];

  paginationDots.forEach((dot) => {
    dot.classList.remove("pagination__dot_selected");
  });
  paginationDots[0].classList.add("pagination__dot_selected");
  sliderLine.style.transform = `translateX(0px)`;
});

paginationItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    counter = index;

    if (index !== currentIndex) {
      text.style.transform = `translateX(-${
        sliderLineWrapper.offsetWidth + 20
      }px)`;
    }

    paginationDots[index].classList.toggle("pagination__dot_selected");
    paginationDots[index].classList.remove("pagination__dot_hovered");
    paginationDots[index].classList.add("pagination__dot_selected_hovered");
    paginationDots[currentIndex].classList.toggle("pagination__dot_selected");
    currentIndex = index;

    sliderLine.style.transform = `translateX(-${
      counter * sliderLineWrapper.offsetWidth
    }px)`;
  });

  item.addEventListener("mouseover", () => {
    if (paginationDots[index].classList.contains("pagination__dot_selected")) {
      paginationDots[index].classList.add("pagination__dot_selected_hovered");
    } else {
      paginationDots[index].classList.add("pagination__dot_hovered");
    }
  });

  item.addEventListener("mouseout", () => {
    paginationDots[index].classList.remove("pagination__dot_hovered");
    paginationDots[index].classList.remove("pagination__dot_selected_hovered");
  });
});

text.addEventListener("transitionend", () => {
  text.textContent = captions[currentIndex];
  text.style.transform = `translateX(0px)`;
});
