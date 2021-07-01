//object
const projects = {
  project1: {
    title: 'Multi Post Stories',
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
      imageUrl: 'images/Placeholder.png',
      imageAlt: 'A woman doing a yoga pose',
    },
    technologies: ['css','html', 'bootstrap', 'Ruby'],
    liveUrl: 'multipoststories.html',
    soureUrl: 'multipoststoriesSource.html',
  },
  project2: {
    title: 'Keeping track of hundreds  of components website',
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
  project3: {
    title: 'Project 3',
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
    technologies: ['html', 'css', 'javaScript'],
    liveUrl: 'TonicLive.html',
    soureUrl: 'Tonic.html',
  },
  project4: {
    title: 'Project 4',
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
    technologies: ['html', 'css', 'javaScript'],
    liveUrl: 'mpStoriesLive.html',
    soureUrl: 'mpStories.html',
  },
};

//Generate HTML
const popup = document.getElementsByClassName('popUpProject')[0];
const firstCardContainer = document.getElementsByClassName('container1')[0];

function generateFirstCard(project) {
let htmlText = `<li class="card1">
                  <div class="myWork">
                    <h2>My Recent Works</h2>

                    <hr class="firstline" />

                    <img src="${project.image.imageUrl}" alt="${project.image.imageAlt}">
                  </div>

                  <div class="multiple">
                    <h3>${project.title}</h3>

                    <p>
                      ${project.description}
                    </p>

                    <ul class="buttons">`;
      for (let i = 0; i < project.technologies.length; i += 1 ){

        htmlText += `<li>
                    <button type="button" class="button">${project.technologies[i]}
                    </button></li>`;
      }
        
                  htmlText += `</ul>
                  <br />

                    <button data-modal-target="#modal" class="orange-button">See Project</button>
                    </div>
                </li>`;
return htmlText;
}

function generateModal(project) {
  let htmlText = `<section class="popUpProject">
                  <div class="modal" id="modal">
                    <div class="modal-header">
                     <div class="title">${project.title}</div>
                     <button data-close-button class="close-button">&times;</button>
                    </div>
                    <div class="top-buttons">
                      <ul class="buttons">`;
  
    for (let i = 0; i < project.technologies.length; i += 1 ){

    htmlText += `<li><button type="button" class="button"
              >${project.technologies[i]}</button></li>`;
  }
    htmlText += `</ul>
                  </div>              
                  <div class="theBody">
                  <div class="popUp-img">
                    <img src="${project.image.imageUrl}" alt="${project.image.imageAlt}">
                  </div>
  
                  <div class="body-button">
                    <div class="modal-body">
                    ${project.description}
                    </div>
  
                    <div class="bt-buttons">
                      <a href="${project.liveUrl}" class="orange-button">See Live  <i class="fa fa-external-link"></i></a>
                      <a href="${project.sourceUrl}" class="orange-button">See Source  <i class="fa fa-github"></i></a>
                    </div>
                  </div>
                </div>  
              </div>
              </section>`;

  return htmlText;
}

function insertHtml() {
  firstCardContainer.innerHTML += generateFirstCard(projects.project1);
  firstCardContainer.innerHTML += generateModal(projects.project1);
}

firstCardContainer.onload = insertHtml();

//open close modals
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

openModalBtns.forEach(openBtn => {
openBtn.addEventListener('click', () => {
  const currentModal = document.querySelector(openBtn.dataset.modalTarget);
  openModal(currentModal);
});
});

closeModalBtns.forEach(closeBtn => {
closeBtn.addEventListener('click', () => {
  const currentModal = closeBtn.closest('.modal');
  closeModal(currentModal);
});
});

