// Initialize EmailJS with your User ID
(function () {
  emailjs.init("WYzU1jp5JobAVXtrJ"); // Replace with your User ID
})();

// Handle form submission
document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent default form submission

    // Get form data
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Send email using EmailJS
    emailjs
      .send("service_ppbi4mq", "template_r4e9s5e", {
        from_name: name,
        from_email: email,
        message: message,
      })
      .then(() => {
        // Show success message
        document.getElementById("success-message").classList.remove("hidden");
        document.getElementById("error-message").classList.add("hidden");
        // Reset form
        document.getElementById("contact-form").reset();
      })
      .catch((error) => {
        // Show error message
        document.getElementById("error-message").classList.remove("hidden");
        document.getElementById("success-message").classList.add("hidden");
        console.error("Email failed to send:", error);
      });
  });
