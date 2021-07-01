const cForm = document.getElementById('form');
const email = document.getElementById('email');
const alertMsg = document.querySelector('.contact_form .alert_msg');
alertMsg.textContent = ' * Please change your email to lower case.';
cForm.addEventListener('submit', (e) => {
  if (email.value !== email.value.toLowerCase()) {
    alertMsg.classList.add('active');
    email.style.borderBottomLeftRadius = 0;
    email.style.borderBottomRightRadius = 0;
    email.style.borderColor = '#aa161d';
    email.style.borderStyle = 'solid';
    email.style.borderWidth = '1px';
    e.preventDefault();
  } else {
    alertMsg.classList.remove('active');
  }
});