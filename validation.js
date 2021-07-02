const form = document.getElementById('form');
const email = document.getElementById('email');
const alertMsg = document.querySelector('.alert_msg');
alertMsg.textContent = ' * Please change your email to lower case.';
//console.log(!email.value !== email.value.toLowerCase());

form.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {    
    alertMsg.style.display ='inline-block';
    email.style.borderColor = 'RED';
    email.style.borderStyle = 'solid';
    email.style.borderWidth = '1px';
    e.preventDefault();
  } else {
    alertMsg.style.display ='none';
  }
});
