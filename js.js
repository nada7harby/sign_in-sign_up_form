var sign_in_btn = document.getElementById("sign_in_btn");
var sign_up_btn = document.getElementById("sign_up_btn");
var container = document.querySelector(".container");
sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign_up_mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign_up_mode");
});
