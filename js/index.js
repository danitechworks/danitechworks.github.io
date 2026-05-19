if (!window.WEB3FORMS_KEY) {
  alert('Config not loaded! Add your key to js/config.js');
} else {
  const form = document.querySelector('.contact-form');
  if (form) {
    form.action = 'https://api.web3forms.com/submit';
    const keyInput = document.createElement('input');
    keyInput.type = 'hidden';
    keyInput.name = 'access_key';
    keyInput.value = window.WEB3FORMS_KEY;
    form.appendChild(keyInput);
  }
}