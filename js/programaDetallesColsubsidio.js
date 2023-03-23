const boxes = document.querySelectorAll('.details__icons');




var marker = document.querySelector("#marker");
var markerBackground = document.querySelector("#markerBackground");


function indicator(e) {
  /* markerBackground.classList.add('hide-markerBackground');
  marker.style.left = e.offsetLeft + "px";
  marker.style.width = e.offsetWidth + "px"; */

  /* console.log(marker); */
}

boxes.forEach((link) => {
  link.addEventListener("click", (e) => {
    indicator(e.target);
  });
});


let count = 0;
boxes.forEach((item) => {
  if (count === 3) {
    count = 0;
  }
  item.id = `boxes-${count}`;
  count++;

  item.addEventListener('click', () => {
    // change box
    boxes.forEach((item, id) => {
      change(id + 1, 'none');
      console.log(id + 1, 'none');
    });
    const boxId = Number(item.id.split("-")[1]);
    change(boxId + 1, '');
    console.log(boxId + 1, '');
  });
  change(count + 1, 'none');
  console.log(count + 1, 'none');
});



// re-construccion
function change(number, display) {
  const grupo = document.querySelectorAll(`.group-${number}`);





  grupo.forEach((item) => {
    item.style.display = display;
  });

  document.querySelectorAll(".details--card__content").forEach(a => a.style.display = "none");
  document.querySelectorAll("#dots").forEach(a => a.style.display = "block");
  document.querySelectorAll(".box__li").forEach(a => a.classList.remove('bg-blueLighter'));
}


