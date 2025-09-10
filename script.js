let animationCount = 0;

function calculateNewPosition(base, multiplier) {
  let localResult = base * multiplier; // local scope
  return localResult;
}

function updateAnimationCount() {
  animationCount++;
  console.log("Animation triggered " + animationCount + " times");
}

const box = document.querySelector(".box");
const animateBtn = document.getElementById("animateBtn");

animateBtn.addEventListener("click", () => {
  box.classList.toggle("animate"); // trigger CSS transition
  updateAnimationCount();
});
 
const modal = document.getElementById("modal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

openModalBtn.addEventListener("click", () => {
  modal.classList.add("show"); // show with animation
});

closeModalBtn.addEventListener("click", () => {
  modal.classList.remove("show"); // hide modal
});
