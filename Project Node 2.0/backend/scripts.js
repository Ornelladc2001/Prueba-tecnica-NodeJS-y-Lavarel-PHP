document.addEventListener('DOMContentLoaded', function () {
  const contactForm = document.getElementById('contactForm');

  contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(contactForm);

    console.log(formData)
    fetch('/contacto', {
      method: 'POST',
      body: formData,
    })
    .then(response => response.json())
    .then(data => {
      alert(data.message);
      contactForm.reset();
    })
    .catch(error => {
      console.error('Error al enviar el formulario:', error);
      alert('Error al enviar el formulario. Por favor, inténtelo de nuevo.');
    });
  });
});
