const form = document.getElementById('form');
const email = document.getElementById('email');
const alertMsg = document.querySelector('.alert_msg');
alertMsg.textContent = '! Email should be in lower case .';

form.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {    
    alertMsg.style.display ='inline-block';
    email.style.borderColor = 'red';
    email.style.borderStyle = 'solid';
    email.style.borderWidth = '1px';
    e.preventDefault();
  } else {
    alertMsg.style.display ='flex';
  }
});
