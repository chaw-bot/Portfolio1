// //code for project pop up

// // Get the modal
// const popUp = document.getElementById("popUp");

// // Get the button that opens the modal
// const open = document.getElementById("open");

// // Get the <span> element that closes the modal
// const close = document.getElementsByClassName("close")[0];

// // When the user clicks the button, open the modal 
// open.onclick = function () {
//   popUp.style.display = "block";
// };

// // When the user clicks on (x), close the modal
// close.onclick = function () {
//   popUp.style.display = "none";
// };

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function (event) {
//   if (event.target === popUp) {
//     popUp.style.display = "none";
//   }
// };


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


//object
const projects = {
    project1: {
      title: 'Tonic',
      details: {
        client: 'CANOPY',
        role: 'Back End Dev',
        year: '2015',
      },
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
        imageUrl: './img/snapshoot1.png',
        imageAlt: 'project preview image',
      },
      technologies: ['html', 'css', 'javaScript'],
      liveUrl: 'TonicLive.html',
      soureUrl: 'Tonic.html',
    },
    project2: {
      title: 'Multi-Post Stories',
      details: {
        client: 'Canopy',
        role: 'Back End Dev',
        year: '2015',
      },
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
        imageUrl: './img/snapshoot1.png',
        imageAlt: 'project preview image',
      },
      technologies: ['html', 'css', 'javaScript'],
      liveUrl: 'mpStoriesLive.html',
      soureUrl: 'mpStories.html',
    },
    project3: {
      title: 'Project 3',
      details: {
        client: 'Canopy',
        role: 'Back End Dev',
        year: '2015',
      },
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
        imageUrl: './img/snapshoot1.png',
        imageAlt: 'project preview image',
      },
      technologies: ['html', 'css', 'javaScript'],
      liveUrl: 'TonicLive.html',
      soureUrl: 'Tonic.html',
    },
    project4: {
      title: 'Project 4',
      details: {
        client: 'Canopy',
        role: 'Back End Dev',
        year: '2015',
      },
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
        imageUrl: './img/snapshoot1.png',
        imageAlt: 'project preview image',
      },
      technologies: ['html', 'css', 'javaScript'],
      liveUrl: 'mpStoriesLive.html',
      soureUrl: 'mpStories.html',
    },
  };