const projects = [
  {
    title: 'Corona Worldometer',
    description: `This project is a mobile web application used to check a list of COVID-19 metrics
    worldwide. It keeps track of live corona virus statistics from countries around the world.`,
    image: {
      imageUrl: 'images/CoviData1.png',
      imageAlt: 'Home page with a list of continents.',
    },
    technologies: ['ReactJS', 'Redux', 'CSS', 'JSX'],
    liveUrl: 'https://covidataworldwide.netlify.app/',
    soureUrl: 'https://github.com/chaw-bot/react-capstone-project',
  },
  {
    title: 'Corona Worldometer',
    description: `This project is a mobile web application used to check a list of COVID-19 metrics
    worldwide. It keeps track of live corona virus statistics from countries around the world.`,
    image: {
      imageUrl: 'images/CoviData1.png',
      imageAlt: 'Home page with a list of continents.',
    },
    technologies: ['ReactJS', 'Redux', 'CSS', 'JSX'],
    liveUrl: 'https://covidataworldwide.netlify.app/',
    soureUrl: 'https://github.com/chaw-bot/react-capstone-project',
  },
  {
    title: 'Leader Board',
    description: `The leaderboard website displays different scores that have been submitted.
    It also allows you to submit your score. All data is preserved thanks to the
    external Leaderboard API service.`,
    image: {
      imageUrl: 'images/leaderboard.png',
      imageAlt: 'App home page',
    },
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    liveUrl: 'https://chaw-bot.github.io/Leaderboard/dist/',
    soureUrl: 'https://github.com/chaw-bot/Leaderboard',
  },
  {
    title: 'TIp Calculator - Frontend Mentor',
    description: `This is a solution to the Tip calculator app challenge on Frontend Mentor.
    Users should be able to:
      - View the optimal layout for the app depending on their device's screen size
      - See hover states for all interactive elements on the page
      - Calculate the correct tip and total cost of the bill per person`,
    image: {
      imageUrl: 'images/tipcalculator.png',
      imageAlt: 'background1',
    },
    technologies: ['JavaScript', 'HTML', 'CSS', 'Mobile-first workflow'],
    liveUrl: 'https://tip-calculator-chaw-bot.vercel.app',
    soureUrl: 'https://github.com/chaw-bot/TipCalculator',
  },
  {
    title: 'My Catalog',
    description: `This project is a console app that will help you keep a record
    of different types of things you own: books, music albums and games.
    Everything will be based on the UML class diagram attached below.
    The data will be stored in JSON files. It also contains a schema.sql file
    with tables that are analogical to the structure of the classes in the app`,
    image: {
      imageUrl: 'images/catalog.png',
      imageAlt: 'homepage',
    },
    technologies: ['Ruby', 'PostfreSQL', 'RSpec', 'Rainbow gem'],
    liveUrl: 'TonicLive.html',
    soureUrl: 'https://github.com/chaw-bot/Ruby-Capstone-Project',
  },
  {
    title: 'Space Travelers Hub',
    title2: 'Printing Data',
    description: `This web application is built for a company that provides
    commercial and scientific space travel services. The application
    allows users to book rockets and join selected space missions.`,
    image: {
      imageUrl: 'images/space.png',
      imageAlt: 'Homepage with rockets',
    },
    technologies: ['ReactJS', 'Redux', 'JSX', 'React Router', 'CSS'],
    liveUrl: 'https://duls-travelers-hub.herokuapp.com/',
    soureUrl: 'https://github.com/wuyepabdul/space-travelers-hub',
  },
  {
    title: 'Book Store',
    description: `A lightweight JavaScript project that allows users to interact with a fully client-based interface.
    Users can add books that they own to easily keep track of their list of books. The added books can be removed
    from the list by using the "Remove Book" button.`,
    image: {
      imageUrl: 'images/books.png',
      imageAlt: 'List of books',
    },
    technologies: ['HTML', 'JavaScript', 'CSS'],
    liveUrl: 'https://alexander16108.github.io/Chaws-Awesome-B00k-Store/',
    soureUrl: 'https://github.com/alexander16108/Chaws-Awesome-B00k-Store',
  },
];

// GenerateHTML
const firstCardContainer = document.getElementsByClassName('container1')[0];

function generateFirstCard() {
  let htmlText = `<li class="card1">
                  <div class="myWork">
                    <h2>My Recent Works</h2>

                    <hr class="firstline" />

                    <img src="${projects[0].image.imageUrl}" alt="${projects[0].image.imageAlt}">
                  </div>

                  <div class="multiple">
                    <h3>${projects[0].title}</h3>

                    <p>
                      ${projects[0].description}
                    </p>

                    <ul class="buttons">`;
  for (let i = 0; i < projects[0].technologies.length; i += 1) {
    htmlText += `<li>
                    <button type="button" class="button">${projects[0].technologies[i]}
                    </button></li>`;
  }

  htmlText += `</ul>
                  <br />

                    <button data-modal-target="#modal" class="orange-button">See Project</button>
                    </div>
                </li>
                </div>
                    </li>`;
  return htmlText;
}

function generateModal() {
  let htmlText = `<div class="modal" id="modal">
                    <div class="modal-header">
                     <div class="title">${projects[0].title}</div>
                     <button data-close-button class="close-button">&times;</button>
                    </div>
                    <div class="top-buttons">
                      <ul class="buttons">`;

  for (let i = 0; i < projects[0].technologies.length; i += 1) {
    htmlText += `<li><button type="button" class="button"
              >${projects[0].technologies[i]}</button></li>`;
  }
  htmlText += `</ul>
                  </div>              
                  <div class="theBody">
                  <div class="popUp-img">
                    <img src="${projects[0].image.imageUrl}" alt="${projects[0].image.imageAlt}">
                  </div>
  
                  <div class="body-button">
                    <div class="modal-body">
                    ${projects[0].description}
                    </div>
  
                    <div class="bt-buttons">
                      <a href="${projects[0].liveUrl}" class="orange-button">See Live       <i class="fa fa-external-link"></i></a>
                      <a href="${projects[0].sourceUrl}" class="orange-button">See Source   <i class="fa fa-github"></i></a>
                    </div>
                  </div>
                </div>  
              </div>
              `;

  return htmlText;
}

function generateModal1() {
  let htmlText = `<div class="modal" id="modal1">
                    <div class="modal-header">
                     <div class="title">${projects[1].title}</div>
                     <button data-close-button class="close-button">&times;</button>
                    </div>
                    <div class="top-buttons">
                      <ul class="buttons">`;

  for (let i = 0; i < projects[1].technologies.length; i += 1) {
    htmlText += `<li><button type="button" class="button"
              >${projects[1].technologies[i]}</button></li>`;
  }
  htmlText += `</ul>
                  </div>              
                  <div class="theBody">
                  <div class="popUp-img">
                    <img src="${projects[1].image.imageUrl}" alt="${projects[1].image.imageAlt}">
                  </div>
  
                  <div class="body-button">
                    <div class="modal-body">
                    ${projects[1].description}
                    </div>
  
                    <div class="bt-buttons">
                      <a href="${projects[1].liveUrl}" class="orange-button">See Live       <i class="fa fa-external-link"></i></a>
                      <a href="${projects[1].sourceUrl}" class="orange-button">See Source   <i class="fa fa-github"></i></a>
                    </div>
                  </div>
                </div>  
              </div>
              `;

  return htmlText;
}

function generateModal2() {
  let htmlText = `<div class="modal" id="modal2">
                    <div class="modal-header">
                     <div class="title">${projects[2].title}</div>
                     <button data-close-button class="close-button">&times;</button>
                    </div>
                    <div class="top-buttons">
                      <ul class="buttons">`;

  for (let i = 0; i < projects[2].technologies.length; i += 1) {
    htmlText += `<li><button type="button" class="button"
              >${projects[2].technologies[i]}</button></li>`;
  }
  htmlText += `</ul>
                  </div>              
                  <div class="theBody">
                  <div class="popUp-img">
                    <img src="${projects[2].image.imageUrl}" alt="${projects[2].image.imageAlt}">
                  </div>
  
                  <div class="body-button">
                    <div class="modal-body">
                    ${projects[2].description}
                    </div>
  
                    <div class="bt-buttons">
                      <a href="${projects[2].liveUrl}" class="orange-button">See Live       <i class="fa fa-external-link"></i></a>
                      <a href="${projects[2].sourceUrl}" class="orange-button">See Source   <i class="fa fa-github"></i></a>
                    </div>
                  </div>
                </div>  
              </div>
              `;

  return htmlText;
}

function generateModal3() {
  let htmlText = `<div class="modal" id="modal3">
                    <div class="modal-header">
                     <div class="title">${projects[3].title}</div>
                     <button data-close-button class="close-button">&times;</button>
                    </div>
                    <div class="top-buttons">
                      <ul class="buttons">`;

  for (let i = 0; i < projects[3].technologies.length; i += 1) {
    htmlText += `<li><button type="button" class="button"
              >${projects[1].technologies[i]}</button></li>`;
  }
  htmlText += `</ul>
                  </div>              
                  <div class="theBody">
                  <div class="popUp-img">
                    <img src="${projects[3].image.imageUrl}" alt="${projects[3].image.imageAlt}">
                  </div>
  
                  <div class="body-button">
                    <div class="modal-body">
                    ${projects[3].description}
                    </div>
  
                    <div class="bt-buttons">
                      <a href="${projects[3].liveUrl}" class="orange-button">See Live       <i class="fa fa-external-link"></i></a>
                      <a href="${projects[3].sourceUrl}" class="orange-button">See Source   <i class="fa fa-github"></i></a>
                    </div>
                  </div>
                </div>  
              </div>
              `;

  return htmlText;
}

function generateModal4() {
  let htmlText = `<div class="modal" id="modal4">
                    <div class="modal-header">
                     <div class="title">${projects[4].title}</div>
                     <button data-close-button class="close-button">&times;</button>
                    </div>
                    <div class="top-buttons">
                      <ul class="buttons">`;

  for (let i = 0; i < projects[4].technologies.length; i += 1) {
    htmlText += `<li><button type="button" class="button"
              >${projects[4].technologies[i]}</button></li>`;
  }
  htmlText += `</ul>
                  </div>              
                  <div class="theBody">
                  <div class="popUp-img">
                    <img src="${projects[4].image.imageUrl}" alt="${projects[4].image.imageAlt}">
                  </div>
  
                  <div class="body-button">
                    <div class="modal-body">
                    ${projects[4].description}
                    </div>
  
                    <div class="bt-buttons">
                      <a href="${projects[4].liveUrl}" class="orange-button">See Live       <i class="fa fa-external-link"></i></a>
                      <a href="${projects[4].sourceUrl}" class="orange-button">See Source   <i class="fa fa-github"></i></a>
                    </div>
                  </div>
                </div>  
              </div>
              `;

  return htmlText;
}

function generateModal5() {
  let htmlText = `<div class="modal" id="modal5">
                    <div class="modal-header">
                     <div class="title">${projects[5].title}</div>
                     <button data-close-button class="close-button">&times;</button>
                    </div>
                    <div class="top-buttons">
                      <ul class="buttons">`;

  for (let i = 0; i < projects[5].technologies.length; i += 1) {
    htmlText += `<li><button type="button" class="button"
              >${projects[1].technologies[i]}</button></li>`;
  }
  htmlText += `</ul>
                  </div>              
                  <div class="theBody">
                  <div class="popUp-img">
                    <img src="${projects[5].image.imageUrl}" alt="${projects[5].image.imageAlt}">
                  </div>
  
                  <div class="body-button">
                    <div class="modal-body">
                    ${projects[5].description}
                    </div>
  
                    <div class="bt-buttons">
                      <a href="${projects[5].liveUrl}" class="orange-button">See Live       <i class="fa fa-external-link"></i></a>
                      <a href="${projects[5].sourceUrl}" class="orange-button">See Source   <i class="fa fa-github"></i></a>
                    </div>
                  </div>
                </div>  
              </div>
              `;

  return htmlText;
}

function generateModal6() {
  let htmlText = `<div class="modal" id="modal6">
                    <div class="modal-header">
                     <div class="title">${projects[6].title}</div>
                     <button data-close-button class="close-button">&times;</button>
                    </div>
                    <div class="top-buttons">
                      <ul class="buttons">`;

  for (let i = 0; i < projects[6].technologies.length; i += 1) {
    htmlText += `<li><button type="button" class="button"
              >${projects[6].technologies[i]}</button></li>`;
  }
  htmlText += `</ul>
                  </div>              
                  <div class="theBody">
                  <div class="popUp-img">
                    <img src="${projects[6].image.imageUrl}" alt="${projects[6].image.imageAlt}">
                  </div>
  
                  <div class="body-button">
                    <div class="modal-body">
                    ${projects[6].description}
                    </div>
  
                    <div class="bt-buttons">
                      <a href="${projects[6].liveUrl}" class="orange-button">See Live       <i class="fa fa-external-link"></i></a>
                      <a href="${projects[6].sourceUrl}" class="orange-button">See Source   <i class="fa fa-github"></i></a>
                    </div>
                  </div>
                </div>  
              </div>
              `;

  return htmlText;
}

function generateSecondCard() {
  let htmlText = `<li>
                    <ul class="card2container">
                      <li class="card2 first">
                        <h3>${projects[1].title}</h3>
                        <p>${projects[1].description}</p>
                        <ul class="buttons1">`;
  for (let i = 0; i < projects[1].technologies.length; i += 1) {
    htmlText += `<li><button type="button" class="button1">${projects[1].technologies[i]}</button></li>`;
  }
  htmlText += `</ul>
                  <button data-modal-target="#modal1" type="button" class="orange-button orange-button3">
                    See Project
                  </button>
                </li>
      
              <li class="card2 second">
                <h3>${projects[2].title}</h3>
                <p>${projects[2].description}</p>
              <ul class="buttons1">`;
  for (let i = 0; i < projects[2].technologies.length; i += 1) {
    htmlText += `<li><button type="button" class="button1">${projects[2].technologies[i]}</button></li>`;
  }
  htmlText += `</ul>
                <button data-modal-target="#modal2" type="button" class="orange-button orange-button3">
                See Project
              </button>
              </li>

              <li class="card2 third">
              <h3>${projects[3].title}</h3>
              <p>${projects[3].description}</p>
              <ul class="buttons1">`;
  for (let i = 0; i < projects[3].technologies.length; i += 1) {
    htmlText += `<li><button type="button" class="button1">${projects[3].technologies[i]}</button></li>`;
  }
  htmlText += `</ul>
                <button data-modal-target="#modal3" type="button" class="orange-button orange-button3">
                See Project
              </button>
              </li>

              <li class="card2 forth">
              <h3>${projects[4].title}</h3>
              <p>${projects[4].description}</p>
              <ul class="buttons1">`;
  for (let i = 0; i < projects[4].technologies.length; i += 1) {
    htmlText += `<li><button type="button" class="button1">${projects[4].technologies[i]}</button></li>`;
  }
  htmlText += `</ul>
                <button data-modal-target="#modal4" type="button" class="orange-button orange-button3">
                See Project
              </button>
              </li>

              <li class="card2 fifth">
              <h3>${projects[5].title}</h3>
              <p>${projects[5].description}</p>
              <ul class="buttons1">`;
  for (let i = 0; i < projects[5].technologies.length; i += 1) {
    htmlText += `<li><button type="button" class="button1">${projects[5].technologies[i]}</button></li>`;
  }
  htmlText += `</ul>
                <button data-modal-target="#modal5" type="button" class="orange-button orange-button3">
                See Project
              </button>
              </li>

              <li class="card2 sixth">
              <h3>${projects[6].title}</h3>
              <p>${projects[6].description}</p>
              <ul class="buttons1">`;
  for (let i = 0; i < projects[6].technologies.length; i += 1) {
    htmlText += `<li><button type="button" class="button1">${projects[6].technologies[i]}</button></li>`;
  }
  htmlText += `</ul>
              <button data-modal-target="#modal6" type="button" class="orange-button orange-button3">
                See Project
              </button>
      </li>`;

  return htmlText;
}

function insertHtml() {
  firstCardContainer.innerHTML += generateFirstCard(projects.project1);
  firstCardContainer.innerHTML += generateModal(projects.project1);
  firstCardContainer.innerHTML += generateSecondCard(projects.project1);
  firstCardContainer.innerHTML += generateModal1(projects.project1);
  firstCardContainer.innerHTML += generateModal2(projects.project1);
  firstCardContainer.innerHTML += generateModal3(projects.project1);
  firstCardContainer.innerHTML += generateModal4(projects.project1);
  firstCardContainer.innerHTML += generateModal5(projects.project1);
  firstCardContainer.innerHTML += generateModal6(projects.project1);
}

firstCardContainer.onload = insertHtml();

// openCloseModals
const openModalBtns = document.querySelectorAll('[data-modal-target]');
const closeModalBtns = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');

function openModal(modal) {
  if (modal === null) return;
  modal.classList.add('active');
  overlay.classList.add('active');
}

function closeModal(modal) {
  if (modal === null) return;
  modal.classList.remove('active');
  overlay.classList.remove('active');
}

openModalBtns.forEach((openBtn) => {
  openBtn.addEventListener('click', () => {
    const currentModal = document.querySelector(openBtn.dataset.modalTarget);
    openModal(currentModal);
  });
});

closeModalBtns.forEach((closeBtn) => {
  closeBtn.addEventListener('click', () => {
    const currentModal = closeBtn.closest('.modal');
    closeModal(currentModal);
  });
});