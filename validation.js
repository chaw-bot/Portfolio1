const Form = document.getElementById('form');
const email = document.getElementById('email');
const alertMsg = document.querySelector('.alert_msg');
alertMsg.textContent = ' * Please change your email to lower case.';
//console.log(!email.value !== email.value.toLowerCase());

email.addEventListener('invalid', (e) => {
  e.preventDefault();
  if (!email.value !== email.value.toLowerCase()) {
    alertMsg.style.display='block';
    email.style.borderBottomLeftRadius = 0;
    email.style.borderBottomRightRadius = 0;
    email.style.borderColor = 'RED';
    email.style.borderStyle = 'solid';
    email.style.borderWidth = '1px';
  } else {
    alertMsg.classList.remove('active');
  }
});