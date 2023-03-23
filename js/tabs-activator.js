const bootcampTabs = document.querySelectorAll(".syllabus-topic");
const bootcampIcon = document.querySelectorAll(".syllabus-topic i");
const bootcampName = document.querySelectorAll(".syllabus-topic p");
const bootcampIndicator = document.querySelectorAll(".syllabus-topic span");
const parentDivs = document.querySelectorAll("#sy-card01, #sy-card02, #sy-card03");

bootcampTabs.forEach((tab, i) => {
  tab.addEventListener("click", () => {
    // Verificar si el elemento clickeado es hijo de un div específico
    let isChild = false;
    let parentDiv = null;
    parentDivs.forEach(pDiv => {
      if (pDiv.contains(tab)) {
        isChild = true;
        parentDiv = pDiv;
      }
    });

    // Aplicar lógica solo si el elemento es hijo
    if (isChild) {
      bootcampTabs.forEach((_, j) => {
        if (i !== j) {
          if (parentDiv.contains(bootcampIndicator[j])) {
            bootcampIcon[j].classList.remove("active");
            bootcampName[j].classList.remove("active");
            bootcampIndicator[j].classList.remove("active");
          }
        }
      });
      bootcampIcon[i].classList.toggle("active");
      bootcampName[i].classList.toggle("active");
      bootcampIndicator[i].classList.toggle("active");
    }
  });
});
