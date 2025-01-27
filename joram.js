 // https://dashboard.emailjs.com/admin/account
 emailjs.init({
    publicKey: "WYzU1jp5JobAVXtrJ",
  });
})();
import emailjs from "@emailjs/browser";
const msg = document.querySelector(".form-message");
window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      document.querySelector(".loader").classList.add("show");
      // these IDs from the previous steps
      emailjs.sendForm("service_ppbi4mq", "template_r4e9s5e", this).then(
        function () {
document.getElementById("contact-form").reset();
document.querySelector(".loader").classList.remove("show");
msg.innerhtml ="";
msg.innerhtml +="<span class='success-msg'>Email sent</span>"
msg.classList.add("show");
setTimeout(function()=> msg.classList.remove("show"), 2000);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
    });
};

