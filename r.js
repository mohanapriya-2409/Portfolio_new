function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
};
// Attach the submit event to the form
document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Stop the form's default submission
  var params = {
      to_name: document.getElementById('name').value,
      from_email: document.getElementById('email').value,
      message: document.getElementById('message').value,
  };

  emailjs.send('service_2pywo3h', 'template_1l59fow', params)
      .then(function(response) {
          alert('Message sent successfully!');
          document.getElementById('contact-form').reset(); // Clear form
      })
      .catch(function(error) {
          alert('Message failed to send.');
          console.error(error);
      });
});
