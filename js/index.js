if (!window.WEB3FORMS_KEY) {
  alert('Config not loaded! Add your key to js/config.js');
} else {
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      const formData = new FormData(form);
      formData.append('access_key', window.WEB3FORMS_KEY);

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });
        const result = await response.json();
        if (result.success) {
          alert('Message sent!');
          form.reset();
        } else {
          alert('Error: ' + result.message);
        }
      } catch (err) {
        alert('Submission failed!');
      }
    });
  }
}