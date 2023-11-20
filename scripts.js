"use strict";

const sections = document.querySelectorAll(".section");
const section1 = document.querySelector(".section1");
const btns = document.querySelectorAll(".btn");
const submitBtn = document.querySelector(".submit-btn");
const btnContainer = document.querySelector(".ratings-btn");

let markup;
// getBtnRating(btns);
btnContainer.addEventListener("click", function (e) {
  const btn = e.target.closest(".btn");

  if (!btn) return;
  const rating = btn.dataset.btn;

  btns.forEach((bttn) => bttn.classList.remove("btn--selected"));

  btn.classList.toggle("btn--selected");

  const selectedBtn = rating;

  if (!selectedBtn) return;
  markup = `
  <div class="thanks">
  <img
    src="images/illustration-thank-you.svg"
    alt=""
    class="thank-you"
  />

  <!-- Add rating here -->
  <p class="rated-shi">You selected ${selectedBtn} out of 5</p>

  <h1 class="tnx head">Thank you!</h1>

  <p class="app-msg msg">
    We appreciate you taking the time to give a rating. If you ever need
    more support, don’t hesitate to get in touch!
  </p>
</div>
  `;
});

const displaySpinner = function () {
  const markup = `
    <div class="spinner">
    <img src="images/spinner-svgrepo-com.svg" alt="" />
  </div>
  `;

  section1.innerHTML = "";
  section1.style.backgroundColor = " hsl(216, 12%, 8%)";
  section1.insertAdjacentHTML("afterbegin", markup);
};

const renderRating = function () {
  section1.style.backgroundColor = " hsl(213, 19%, 18%)";
  section1.innerHTML = "";
  section1.insertAdjacentHTML("afterbegin", markup);
};
submitBtn.addEventListener("click", function () {
  const btnns = [...btns];

  if (btnns.some((btn) => btn.classList.contains("btn--selected"))) {
    displaySpinner();

    setTimeout(renderRating, 1000);
  } else {
    alert("kindly select a rating");
  }
});
