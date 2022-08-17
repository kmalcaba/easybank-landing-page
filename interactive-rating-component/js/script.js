window.addEventListener("DOMContentLoaded", () => {
  const ratingBtns = document.querySelectorAll(".rating-btn");
  ratingBtns.forEach((element) =>
    element.addEventListener("click", selectRating)
  );

  const submitBtn = document.querySelector("button.submit");
  submitBtn.addEventListener("click", onSubmit);
  disableButton(true);
});

const onSubmit = () => {
  const selected = updateSelected();
  if (selected) showThankYouBox(selected);
  else disableButton(true);
};

const showThankYouBox = (number) => {
  const thankYouBox = document.querySelector(".thank-you");
  const rateBox = document.querySelector(".rate-box");
  rateBox.style.display = "none";
  thankYouBox.style.display = "flex";
  const selected = document.querySelector(".selected");
  selected.textContent = number;
};

const selectRating = (e) => {
  const number = e.target;
  const ratingBtns = document.querySelectorAll(".rating-btn");
  ratingBtns.forEach((element) => {
    if (element.classList.contains("active"))
      element.classList.toggle("active");
  });
  number.classList.toggle("active");
  disableButton(false);
};

const updateSelected = () => {
  const selected = document.querySelector(".active");
  if (selected) return selected.textContent;
};

const disableButton = (isDisabled) => {
  const submitBtn = document.querySelector("button.submit");
  submitBtn.disabled = isDisabled;
};
