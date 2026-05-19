document.addEventListener('DOMContentLoaded', function() {
  console.log('JS loaded, checking key...');
  console.log('WEB3FORMS_KEY:', window.WEB3FORMS_KEY);
  
  if (!window.WEB3FORMS_KEY) {
    alert('Config not loaded! Add your key to js/config.js');
    return;
  }
  
  const form = document.querySelector('.contact-form');
  console.log('form found:', form);
  
  if (form) {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      console.log('Submit intercepted');
      const formData = new FormData(form);
      formData.append('access_key', window.WEB3FORMS_KEY);

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: formData
        });
        const result = await response.json();
        console.log('Result:', result);
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
});