const projects = [
  {
    title: 'Multi Post Stories',
    description: `A daily selection of privately personalized reads; 
     no accounts or sign-ups required. has been the industry's standard
      dummy text ever since the 1500s, when an unknown printer took a 
      standard dummy text.`,
    image: {
      imageUrl: 'images/Placeholder.png',
      imageAlt: 'A woman doing a yoga pose',
    },
    technologies: ['css', 'html', 'bootstrap', 'Ruby'],
    liveUrl: 'multipoststories.html',
    soureUrl: 'multipoststoriesSource.html',
  },
  {
    title: 'Keeping track',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
     unknown printer took a galley of type and scrambled it to make a type specimen book.
     It has survived not only five centuries, but also the leap into electronic typesetting,
     remaining essent, Lorem Ipsum is simply dummy text of the printing and typesetting industry.
     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an
     unknown printer took a galley of type and scrambled it to make a type specimen book.
     It has survived not only five centuries, but also the leap into electronic typesetting,
     remaining essent`,
    image: {
      imageUrl: 'images/Portfolio.png',
      imageAlt: 'Image with number 10 at the center',
    },
    technologies: ['html', 'Bootstrap', 'Ruby on rails'],
    liveUrl: 'multipoststories.html',
    soureUrl: 'multipoststoriesSource.html',
  },
  {
    title: 'Data Dashboard',
    description: `A daily selection of privately personalized reads;
   no accounts or sign-ups required. has been the industry's standard`,
    image: {
      imageUrl: 'images/second.png',
      imageAlt: 'background1',
    },
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveUrl: 'TonicLive.html',
    soureUrl: 'Tonic.html',
  },
  {
    title: 'Website Portfolio',
    description: `A daily selection of privately personalized reads;
   no accounts or sign-ups required. has been the industry's standard`,
    image: {
      imageUrl: 'images/third.png',
      imageAlt: 'background1',
    },
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveUrl: 'TonicLive.html',
    soureUrl: 'Tonic.html',
  },
  {
    title: 'Professional Art',
    title2: 'Printing Data',
    description: `A daily selection of privately personalized reads; no accounts
                 or sign-ups required. has been the industry's standard`,
    image: {
      imageUrl: 'images/Portfolio.png',
      imageAlt: 'Image with number 10 at the center',
    },
    technologies: ['html', 'css', 'javaScript'],
    liveUrl: 'TonicLive.html',
    soureUrl: 'Tonic.html',
  },
  {
    title: 'Website Portfolio',
    description: `A daily selection of privately personalized reads;
     no accounts or sign-ups required. has been the industry's standard`,
    image: {
      imageUrl: 'images/third.png',
      imageAlt: 'background1',
    },
    technologies: ['html', 'bootstrap', 'Ruby'],
    liveUrl: 'TonicLive.html',
    soureUrl: 'Tonic.html',
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

                    <button data-modal-target="#modals" class="orange-button">See Project</button>
                    </div>
                </li>
                </div>
                    </li>`;
  return htmlText;
}

function generateModal() {
  let htmlText = `<div class="modal" id="modals">
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
  let htmlText = `<div class="modal" id="modal">
                    <div class="modal-header">
                     <div class="title">${projects[0].title}</div>
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
                      <a href="${projects[0].liveUrl}" class="orange-button">See Live       <i class="fa fa-external-link"></i></a>
                      <a href="${projects[0].sourceUrl}" class="orange-button">See Source   <i class="fa fa-github"></i></a>
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
                    <img src="${projects[2].image.imageUrl}" alt="${projects[2].image.imageAlt}">
                  </div>
  
                  <div class="body-button">
                    <div class="modal-body">
                    ${projects[2].description}
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

function generateModal3() {
  let htmlText = `<div class="modal" id="modal3">
                    <div class="modal-header">
                     <div class="title">${projects[3].title}</div>
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
                    <img src="${projects[3].image.imageUrl}" alt="${projects[3].image.imageAlt}">
                  </div>
  
                  <div class="body-button">
                    <div class="modal-body">
                    ${projects[3].description}
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

function generateModal4() {
  let htmlText = `<div class="modal" id="modal4">
                    <div class="modal-header">
                     <div class="title">${projects[4].title}</div>
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
                    <img src="${projects[4].image.imageUrl}" alt="${projects[4].image.imageAlt}">
                  </div>
  
                  <div class="body-button">
                    <div class="modal-body">
                    ${projects[4].description}
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

function generateModal5() {
  let htmlText = `<div class="modal" id="modal5">
                    <div class="modal-header">
                     <div class="title">${projects[5].title}</div>
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
                    <img src="${projects[5].image.imageUrl}" alt="${projects[5].image.imageAlt}">
                  </div>
  
                  <div class="body-button">
                    <div class="modal-body">
                    ${projects[5].description}
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

function generateModal6() {
  let htmlText = `<div class="modal" id="modal1">
                    <div class="modal-header">
                     <div class="title">${projects[0].title}</div>
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
                    <img src="${projects[5].image.imageUrl}" alt="${projects[5].image.imageAlt}">
                  </div>
  
                  <div class="body-button">
                    <div class="modal-body">
                    ${projects[5].description}
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

function generateSecondCard() {
  let htmlText = `<li>
                    <ul class="card2container">
                      <li class="card2 first">
                        <h3>${projects[4].title}<br/>${projects[4].title2}</h3>

                        <p>${projects[4].description}</p>

                        <ul class="buttons1">`;
  for (let i = 0; i < projects[4].technologies.length; i += 1) {
    htmlText += `<li><button type="button" class="button1">${projects[4].technologies[i]}</button></li>`;
  }
  htmlText += `</ul>

                        <button data-modal-target="#modal" type="button" class="orange-button orange-button3">
                          See Project
                        </button>
                     </li> 
                     

                     <li class="card2 second">
              <h3>
                Professional Art <br />
                Printing Data
              </h3>

              <p>
                A daily selection of privately personalized reads; no accounts
                or sign-ups required. has been the industry's standard
              </p>

              <ul class="buttons1">
                <li><button type="button" class="button1">html</button></li>
                <li>
                  <button type="button" class="button1">bootstrap</button>
                </li>
                <li><button type="button" class="button1">Ruby</button></li>
              </ul>

              <button data-modal-target="#modal2" type="button" class="orange-button orange-button2">
                See Project
              </button>
            </li>

            <li class="card2 third">
            <h3>
              Professional Art <br />
              Printing Data
            </h3>

            <p>
              A daily selection of privately personalized reads; no accounts
              or sign-ups required. has been the industry's standard
            </p>

            <ul class="buttons1">
              <li><button type="button" class="button1">html</button></li>
              <li>
                <button type="button" class="button1">bootstrap</button>
              </li>
              <li><button type="button" class="button1">Ruby</button></li>
            </ul>

            <button data-modal-target="#modal3" type="button" class="orange-button orange-button2">
              See Project
            </button>
          </li>

          <li class="card2 fourth">
            <h3>
              Professional Art <br />
              Printing Data
            </h3>

            <p>
              A daily selection of privately personalized reads; no accounts
              or sign-ups required. has been the industry's standard
            </p>

            <ul class="buttons1">
              <li><button type="button" class="button1">html</button></li>
              <li>
                <button type="button" class="button1">bootstrap</button>
              </li>
              <li><button type="button" class="button1">Ruby</button></li>
            </ul>

            <button data-modal-target="#modal4" type="button" class="orange-button orange-button2">
              See Project
            </button>
          </li>

          <li class="card2 fifth">
            <h3>
              Professional Art <br />
              Printing Data
            </h3>

            <p>
              A daily selection of privately personalized reads; no accounts
              or sign-ups required. has been the industry's standard
            </p>

            <ul class="buttons1">
              <li><button type="button" class="button1">html</button></li>
              <li>
                <button type="button" class="button1">bootstrap</button>
              </li>
              <li><button type="button" class="button1">Ruby</button></li>
            </ul>

            <button data-modal-target="#modal5" type="button" class="orange-button orange-button2">
              See Project
            </button>
          </li>

          <li class="card2 sixth">
            <h3>
              Professional Art <br />
              Printing Data
            </h3>

            <p>
              A daily selection of privately personalized reads; no accounts
              or sign-ups required. has been the industry's standard
            </p>

            <ul class="buttons1">
              <li><button type="button" class="button1">html</button></li>
              <li>
                <button type="button" class="button1">bootstrap</button>
              </li>
              <li><button type="button" class="button1">Ruby</button></li>
            </ul>

            <button data-modal-target="#modal1" type="button" class="orange-button orange-button2">
              See Project
            </button>
          </li>
        </ul>
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