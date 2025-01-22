alert("javascript is linked");
document.querrySelector("form").addEventlistener("submit", function (event) {
  let name = document.getElementsByid("name").value;
  let email = document.getElementsByid("email").value;
  if (!name || !email) {
    alert("please fill in all the fields!");
    event.preventdefault();
  }
});
// Show Back-to-Top Button on Scroll
window.addEventListener("scroll", function () {
  const button = document.getElementById("back-to-top");
  if (window.scrollY > 300) {
    button.style.display = "flex";
  } else {
    button.style.display = "none";
  }
});

// Scroll to Top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
document.querySelector("form").addEventListener("submit", function (event) {
  const email = document.getElementById("subscriber-email").value;
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    event.preventDefault(); // Prevent form submission
  }
});
// EmailJS configuration (replace with your own EmailJS user ID)
(function () {
  emailjs.init("cxVzaflBY3d1p29AI");
})();

// Contact form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    emailjs.sendForm(" service_4s7619q", "template_unr55tq", this).then(
      function () {
        console.log("SUCCESS!");
        alert("Message sent successfully!");
      },
      function (error) {
        console.log("FAILED...", error);
        alert("Failed to send message. Please try again.");
      }
    );
  });
