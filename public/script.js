const gatorsButton = document.querySelector(".gators-button");

function gatorTime(e) {
  e.target.classList.toggle("go-gators");
}

gatorsButton.addEventListener("click", gatorTime);
