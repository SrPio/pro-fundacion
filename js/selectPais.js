// Selecciona los botones y el div
const btn1 = document.getElementById("bt-Co");
const btn2 = document.getElementById("bt-Mx");
const btn3 = document.getElementById("bt-Hn");
const btn4 = document.getElementById("bt-Int");
const subjectDiv = document.getElementById("subject");

// Define las funciones que se ejecutarán cuando se presione cada botón

//Generar form Colombia
function insertScript1() {

  var form = document
    .getElementById("acordion--form")
    .classList.remove("calendar__acordion-item--disabled");

  subjectDiv.innerHTML = "";
  var script = document.createElement("script");
  script.src = "https://js.hsforms.net/forms/v2.js";
  script.onload = function () {
    var formScript = document.createElement("script");
    formScript.textContent = `
        hbspt.forms.create({
          region: "na1",
          portalId: "20826022",
          formId: "f8ff0968-dbcc-422e-8096-79540c3605f3",
          onFormReady: function ($form) {
            let email = localStorage.getItem("email") || "";
            let firstName = localStorage.getItem("nombre") || "";
            let lastName = localStorage.getItem("apellido") || "";
            let phone = localStorage.getItem("tel") || "";
  
            $form.find('input[name="email"]').val(email).change();
            $form.find('input[name="firstname"]').val(firstName).change();
            $form.find('input[name="lastname"]').val(lastName).change();
            $form.find('input[name="phone"]').val(phone).change();
          },
          onFormSubmit: function (form) {
            console.log("Formulario enviado con éxito!");
            localStorage.setItem("submitted_form", true);
            var prueba = document
              .getElementById("acordion--prueba")
              .classList.remove("calendar__acordion-item--disabled");

              // cambiar arrow por check

                          // Capturar el elemento img
                          var img = document.querySelector('img.arrow#arrowForm');

                          // Cambiar el valor del atributo src
                          img.src = "https://res.cloudinary.com/protalento/image/upload/v1678912793/Website/PROtalento/Generales/Icon_j8gtuj.svg";

                          // Eliminar la clase "arrow y arrow-rotate"
                          img.classList.remove("arrow-rotate");
                          img.classList.remove("arrow");

                          // Agregar la clase "arrow--checked"
                          img.classList.add("arrow--checked");

                          //eliminar clase active de accordeonContentForms
                          const accordeonContentForms = document.querySelector('#content--form');
                          accordeonContentForms.classList.remove("active");

                          
                          // fin cambiar arrow por check
          },
        });
      `;
    subjectDiv.appendChild(formScript);
  };
  document.head.appendChild(script);
}


//Generar form México
function insertScript2() {

  var form = document
    .getElementById("acordion--form")
    .classList.remove("calendar__acordion-item--disabled");

  subjectDiv.innerHTML = "";
  var script = document.createElement("script");
  script.src = "https://js.hsforms.net/forms/v2.js";
  script.onload = function () {
    var formScript = document.createElement("script");
    formScript.textContent = `hbspt.forms.create({
    region: "na1",
    portalId: "20826022",
    formId: "baa24fd3-f0d9-432d-a810-e6d76d130fde",
    onFormReady: function ($form) {
      let email = localStorage.getItem("email") || "";
      let firstName = localStorage.getItem("nombre") || "";
      let lastName = localStorage.getItem("apellido") || "";
      let phone = localStorage.getItem("tel") || "";

      $form.find('input[name="email"]').val(email).change();
      $form.find('input[name="firstname"]').val(firstName).change();
      $form.find('input[name="lastname"]').val(lastName).change();
      $form.find('input[name="phone"]').val(phone).change();
    },
    onFormSubmit: function (form) {
      console.log("Formulario enviado con éxito!");
      localStorage.setItem("submitted_form", true);
      var prueba = document
        .getElementById("acordion--prueba")
        .classList.remove("calendar__acordion-item--disabled");

        // cambiar arrow por check

                          // Capturar el elemento img
                          var img = document.querySelector('img.arrow#arrowForm');

                          // Cambiar el valor del atributo src
                          img.src = "https://res.cloudinary.com/protalento/image/upload/v1678912793/Website/PROtalento/Generales/Icon_j8gtuj.svg";

                          // Eliminar la clase "arrow y arrow-rotate"
                          img.classList.remove("arrow-rotate");
                          img.classList.remove("arrow");

                          // Agregar la clase "arrow--checked"
                          img.classList.add("arrow--checked");

                          //eliminar clase active de accordeonContentForms
                          const accordeonContentForms = document.querySelector('#content--form');
                          accordeonContentForms.classList.remove("active");


                          // fin cambiar arrow por check
    },
  });`;
    script.parentNode.removeChild(script);
    subjectDiv.appendChild(formScript);
  };
  document.head.appendChild(script);

}

//Generar form Honduras
function insertScript3() {

  var form = document
    .getElementById("acordion--form")
    .classList.remove("calendar__acordion-item--disabled");

  subjectDiv.innerHTML = "";
  var script = document.createElement("script");
  script.src = "https://js.hsforms.net/forms/v2.js";
  script.onload = function () {
    var formScript = document.createElement("script");
    formScript.innerHTML = `hbspt.forms.create({
    region: "na1",
    portalId: "20826022",
    formId: "21e3febc-db5e-4c24-a6a7-7107e37e6ff7",
    onFormReady: function ($form) {
      let email = localStorage.getItem("email") || "";
      let firstName = localStorage.getItem("nombre") || "";
      let lastName = localStorage.getItem("apellido") || "";
      let phone = localStorage.getItem("tel") || "";

      $form.find('input[name="email"]').val(email).change();
      $form.find('input[name="firstname"]').val(firstName).change();
      $form.find('input[name="lastname"]').val(lastName).change();
      $form.find('input[name="phone"]').val(phone).change();
    },
    onFormSubmit: function (form) {
      console.log("Formulario enviado con éxito!");
      localStorage.setItem("submitted_form", true);
      var prueba = document
        .getElementById("acordion--prueba")
        .classList.remove("calendar__acordion-item--disabled");

        // cambiar arrow por check

                          // Capturar el elemento img
                          var img = document.querySelector('img.arrow#arrowForm');

                          // Cambiar el valor del atributo src
                          img.src = "https://res.cloudinary.com/protalento/image/upload/v1678912793/Website/PROtalento/Generales/Icon_j8gtuj.svg";

                          // Eliminar la clase "arrow y arrow-rotate"
                          img.classList.remove("arrow-rotate");
                          img.classList.remove("arrow");

                          // Agregar la clase "arrow--checked"
                          img.classList.add("arrow--checked");

                          //eliminar clase active de accordeonContentForms
                          const accordeonContentForms = document.querySelector('#content--form');
                          accordeonContentForms.classList.remove("active");


                          // fin cambiar arrow por check
    },
  });`;
    script.parentNode.removeChild(script);
    subjectDiv.appendChild(formScript);
  };
  document.head.appendChild(script);

}


//Generar form Internacional
function insertScript4() {

  var form = document
    .getElementById("acordion--form")
    .classList.remove("calendar__acordion-item--disabled");

  subjectDiv.innerHTML = "";
  var script = document.createElement("script");
  script.src = "https://js.hsforms.net/forms/v2.js";
  script.onload = function () {
    var formScript = document.createElement("script");
    formScript.textContent = `
    hbspt.forms.create({
      region: "na1",
      portalId: "20826022",
      formId: "e7048486-f849-4138-bae5-cfd91d8debbd",
      onFormReady: function ($form) {
        let email = localStorage.getItem("email") || "";
        let firstName = localStorage.getItem("nombre") || "";
        let lastName = localStorage.getItem("apellido") || "";
        let phone = localStorage.getItem("tel") || "";

        $form.find('input[name="email"]').val(email).change();
        $form.find('input[name="firstname"]').val(firstName).change();
        $form.find('input[name="lastname"]').val(lastName).change();
        $form.find('input[name="phone"]').val(phone).change();
      },
      onFormSubmit: function (form) {
        console.log("Formulario enviado con éxito!");
        localStorage.setItem("submitted_form", true);
        var prueba = document
          .getElementById("acordion--prueba")
          .classList.remove("calendar__acordion-item--disabled");

          // cambiar arrow por check

                          // Capturar el elemento img
                          var img = document.querySelector('img.arrow#arrowForm');

                          // Cambiar el valor del atributo src
                          img.src = "https://res.cloudinary.com/protalento/image/upload/v1678912793/Website/PROtalento/Generales/Icon_j8gtuj.svg";

                          // Eliminar la clase "arrow y arrow-rotate"
                          img.classList.remove("arrow-rotate");
                          img.classList.remove("arrow");

                          // Agregar la clase "arrow--checked"
                          img.classList.add("arrow--checked");

                          //eliminar clase active de accordeonContentForms
                          const accordeonContentForms = document.querySelector('#content--form');
                          accordeonContentForms.classList.remove("active");


                          // fin cambiar arrow por check
      },
    });
  `;
    subjectDiv.appendChild(formScript);
  };
  document.head.appendChild(script);

}

// Agrega un "event listener" a cada botón para que ejecute su función correspondiente cuando se haga clic en él
btn1.addEventListener("click", insertScript1);
btn2.addEventListener("click", insertScript2);
btn3.addEventListener("click", insertScript3);
btn4.addEventListener("click", insertScript4);



//cambiar color de botones presionados
function cambiarClasesBotones(event) {
  const botones = [btn1, btn2, btn3, btn4];

  botones.forEach(boton => {
    if (boton.classList.contains('bg-blueLight')) {
      boton.classList.remove('bg-blueLight');
    }
  });

  const botonClickeado = event.target.closest('.btn');
  botonClickeado.classList.add('bg-blueLight');


  // cambiar arrow por check

  // Capturar el elemento img
  var img = document.querySelector("img.arrow#arrowPais");

  // Cambiar el valor del atributo src
  img.src = "https://res.cloudinary.com/protalento/image/upload/v1678912793/Website/PROtalento/Generales/Icon_j8gtuj.svg";

  // Eliminar la clase "arrow y arrow-rotate"
  img.classList.remove("arrow-rotate");
  img.classList.remove("arrow");

  // Agregar la clase "arrow--checked"
  img.classList.add("arrow--checked");

  //eliminar clase active de accordeonContentForms
  const accordeonContentForms = document.querySelector('.accordeon-content--forms');
  accordeonContentForms.classList.remove("active");


  // fin cambiar arrow por check

}

btn1.addEventListener('click', cambiarClasesBotones);
btn2.addEventListener('click', cambiarClasesBotones);
btn3.addEventListener('click', cambiarClasesBotones);
btn4.addEventListener('click', cambiarClasesBotones);

