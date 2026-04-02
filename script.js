document.getElementById("contactForm")?.addEventListener("submit", function(e) {
e.preventDefault();

const name = document.getElementById("name").value;
const email = document.getElementById("email").value;
const message = document.getElementById("message").value;

// Save locally (demo purpose)
localStorage.setItem("contactData", JSON.stringify({ name, email, message }));

alert("Message saved successfully! (Demo)");

this.reset();
});