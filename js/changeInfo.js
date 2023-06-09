let boxes = document.querySelectorAll('.industrias__box');
let main = document.getElementById('main-box');

// array
const information = [
  {
    title:
      'PROtalento me aportó conocimiento del mercado y una red de contactos invaluable.',
    img: 'https://res.cloudinary.com/protalento/image/upload/q_auto/v1660169214/Website/PROtalento/Home/Talentos/jorge-mario-salazar_pqjvqg_qdpowg.svg',
    name: 'Jorge Mario Salazar',
    ruta: 'Al inicio de la ruta',
    trabajo: 'Cientifíco de Datos en',
    lugar: 'Endava',
    profesion: 'Académico con PhD',
    linkEmpresa: 'https://www.linkedin.com/company/endava/',
    linkTalento: 'https://www.linkedin.com/in/jorgemariosalazarrios/'
  },

  {
    title:
      'PROtalento me guió para elegir mi camino profesional en el mundo de la tecnología y una red de colegas con el mismo mindset.',
    img: 'https://res.cloudinary.com/protalento/image/upload/q_auto/v1660169208/Website/PROtalento/Home/Talentos/chelsy-mena_dnpdpw_jieg9w.svg',
    name: 'Chelsy Mena',
    ruta: 'Al inicio de la ruta',
    trabajo: 'Analista de Datos en',
    lugar: 'Andercol',
    profesion: 'Estudiante Ingeniería de Petróleos',
    linkEmpresa: 'https://www.linkedin.com/company/andercol-sas/',
    linkTalento: 'https://www.linkedin.com/in/chelsy-mena-gonzalez/'
  },

  {
    title:
      'PROtalento me dio la seguridad y apoyo que necesitaba para despegar mi carrera.',
    img: 'https://res.cloudinary.com/protalento/image/upload/q_auto/v1660169209/Website/PROtalento/Home/Talentos/duvan-andres-villadiegos_t7k0gj_oyr5uy.svg',
    name: 'Duvan Andrés Villadiego',
    ruta: 'Al inicio de la ruta',
    trabajo: 'Full Stack Developer en',
    lugar: 'Accenture',
    profesion: 'Paseador de perros',
    linkEmpresa: 'https://www.linkedin.com/company/endava/',
    linkTalento: 'https://www.linkedin.com/in/duvan-villadiego/'
  },

  {
    title:
      'PROtalento me inyectó confianza en mis habilidades y capacidades, lo que me permitió verme y ver el mundo diferente, y allí mi éxito como desarrolladora web.',
    img: 'https://res.cloudinary.com/protalento/image/upload/q_auto/v1660169214/Website/PROtalento/Home/Talentos/karen-edith-moreno_jcuymx_zxcuio.svg',
    name: 'Karen Edith Moreno',
    ruta: 'Al inicio de la ruta',
    trabajo: 'Back End Developer en',
    lugar: 'Credicorp Capital',
    profesion: 'Profesora de Ciencias Naturales',
    linkEmpresa: 'https://www.linkedin.com/company/credicorpcapital/',
    linkTalento: 'https://www.linkedin.com/in/karen-edith-moreno-moreno-a99992a7/'
  },

  {
    title:
      'PROtalento para mi fue un motor de oportunidades. En el proceso aprendí a reconocer y explotar mis fortalezas, a trabajar en mis debilidades y a ver mi potencial como impulsora del cambio.',
    img: 'https://res.cloudinary.com/protalento/image/upload/q_auto/v1660169216/Website/PROtalento/Home/Talentos/maria-camila-arroyo_cf6xhr_lyhday.svg',
    name: 'Maria Camila Arroyo',
    ruta: 'Al inicio de la ruta',
    trabajo: 'Desarrolladora Full Stack Jr en',
    lugar: 'Banco de Bogotá',
    profesion: 'Ingeniera Ambiental',
    linkEmpresa: 'https://www.linkedin.com/company/banco-de-bogota/',
    linkTalento: 'https://www.linkedin.com/in/mariacamilaarroyoa/'
  },
];

let id = 0;

boxes.forEach((info) => {
  info.id = id;
  id++;

  info.addEventListener('click', () => {
    console.log(info.id);
    placeInformation(info.id);
  });
});

// function
function placeInformation(id) {
  // console.log(id)
  const { img, ruta, profesion, title, trabajo, lugar, name, linkEmpresa, linkTalento } = information[id];

  main.innerHTML = `
    <div class="industrias__avatar" id="avatar">
            <img
              src="${img}"
              alt=""
              class="industrias__img"
            />
        </div>

          <ul>
            <li>
              <h2
                class="title title--begin medium-bigger-size line-height-md c-blueDark"
              >
                ${title}
              </h2>
            </li>
            <li class="mT-4">
              <h2 class="medium-size c-blueDark">${name}</h2>
            </li>
            <div>
            <h3 class="title--begin sm-size c-blueDark talent__title">Antes</h3>
            <h2 class="sm-size line-height-md fw-600 c-blueDark">${profesion}</h2>
            </div>
            <div>
            <h3 class="title--begin sm-size c-blueDark talent__title">Ahora</h3>
            <li class="sm-size c-blueDark">
              <p>${trabajo} <a href="${linkEmpresa}" target="_blank" class="c-yellow">${lugar}</a></p>
              <a href="${linkTalento}" target="_blank" class="c-yellow"><i class="uil uil-linkedin-alt"></i></a>
            </li>
            </div>
          </ul>
          
    `;
}
