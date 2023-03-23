const turnerButtons = document.querySelectorAll(".program-body button");
const programDetailsLists = document.querySelectorAll(".program-body ul");
const programSyllabus = document.querySelectorAll(".program-body .syllabus-topics");
const programBody = document.querySelectorAll(".program-body");

function turnCardBody(e) {
  let i = [].indexOf.call(turnerButtons, e.target);
  if (programDetailsLists[i].style.display === "none") {
    programDetailsLists[i].style.display = "block";
    programSyllabus[i].style.display = "none";
    turnerButtons[i].innerHTML = "¡Conoce más!";
    programBody[i].style.height = "65%";
  } else {
    programDetailsLists[i].style.display = "none";
    programSyllabus[i].style.display = "block";
    turnerButtons[i].innerHTML = "¡Volver atras!";
    programBody[i].style.height = "68%";
  }
}

turnerButtons.forEach(function (button) {
  button.addEventListener("click", turnCardBody);
});
