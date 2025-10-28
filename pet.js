// Function to switch between pages
// Select the adoption form
const adoptionForm = document.querySelector("form");

// Handle form submission
adoptionForm.addEventListener("submit", function(event) {
  event.preventDefault(); // prevent actual refresh
  const name = adoptionForm.querySelector("input[type='text']").value;
  const pet = adoptionForm.querySelector("select").value;

  if (pet === "Select a Pet") {
    alert("⚠️ Please select a pet before submitting.");
    return;
  }

  alert(`🎉 Thank you ${name}! Your request to adopt ${pet} has been submitted.`);
  adoptionForm.reset(); // clear form
});

// Navbar active link effect
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
  link.addEventListener("click", () => {
    navLinks.forEach(l => l.classList.remove("active"));
    link.classList.add("active");
  });
});

// Add animation to "Adopt" buttons
const adoptButtons = document.querySelectorAll(".pet-card button");
adoptButtons.forEach(button => {
  button.addEventListener("click", () => {
    button.innerText = "✔ Requested";
    button.style.background = "#4CAF50";
    setTimeout(() => {
      button.innerText = "Adopt";
      button.style.background = "#2c7a7b";
    }, 2000);
  });
});
