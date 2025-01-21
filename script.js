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
