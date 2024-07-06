var typed = new Typed(".text", {
  strings: ["Frontend Developer", "Web Developer","Coding Enthusiast", "Competitive Programmer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});


function sendMessage(event) {
  event.preventDefault();

  (function() {
      emailjs.init("0HjqCIl012QAEIATY"); // Replace with your EmailJS Public Key
  })();

  var serviceID = "service_lzwxsst"; // Replace with your EmailJS Service ID
  var templateID = "template_ese3yuf"; // Replace with your EmailJS Template ID

  var params = {
      sendername: document.querySelector("#name").value,
      senderemail: document.querySelector("#email").value,
      subject: document.querySelector("#subject").value,
      message: document.querySelector("#message").value
  };

  emailjs.send(serviceID, templateID, params)
      .then(res => {
          alert('Thank you, ' + params['sendername'] + '! Your message was sent successfully.');
      })
      .catch(err => console.log(err));
}



document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navbar = document.querySelector('.navbar');

  console.log('JavaScript is loaded'); // Debugging line

  menuToggle.addEventListener('click', () => {
    console.log('Menu toggle clicked'); // Debugging line
    menuToggle.classList.toggle('active');
    navbar.classList.toggle('active');
  });

  document.addEventListener('click', (event) => {
    if (!menuToggle.contains(event.target) && !navbar.contains(event.target)) {
      console.log('Clicked outside menu'); // Debugging line
      menuToggle.classList.remove('active');
      navbar.classList.remove('active');
    }
  });
});



var modal = document.getElementById("myModal");

var btns = document.querySelectorAll(" .btn-modal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// Loop through the buttons and add a click event listener
btns.forEach(function(btn) {
  btn.onclick = function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    modal.style.display = "flex";
    modal.style.animation = "fadeIn 0.5s"; // Apply fade in animation
    document.body.style.overflow = "hidden"; // Prevent scrolling
  }
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.animation = "fadeOut 0.5s"; // Apply fade out animation
  setTimeout(function() {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Enable scrolling
  }, 500); // Match the duration of the fade out animation
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.animation = "fadeOut 0.5s"; 
    setTimeout(function() {
      modal.style.display = "none";
      document.body.style.overflow = "auto"; // Enable scrolling
    }, 500); // Match the duration of the fade out animation
  }
}


document.addEventListener("DOMContentLoaded", function() {
  modal.style.display = "none";
});




