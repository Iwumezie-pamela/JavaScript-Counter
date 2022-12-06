const span = document.querySelector("#value");
const decrease = document.querySelector(".btn-decrease");
const reset = document.querySelector(".btn-reset");
const increase = document.querySelector(".btn-increase");

// Variable to track count
let count = 0;
// Display initial count value
span.textContent = count;

decrease.addEventListener("click", () => {
  count--;
  span.textContent = count;
  span.style.color = "red";
});

reset.addEventListener("click", () => {
  count = 0;
  span.textContent = count;
  span.style.color = "black";
});

increase.addEventListener("click", () => {
  count++;
  span.textContent = count;
  span.style.color = "green";
});
