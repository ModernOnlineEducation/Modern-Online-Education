// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Reveal cards on scroll
const animatedCards = document.querySelectorAll(".animate-up");

function onScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  animatedCards.forEach(card => {
    const rect = card.getBoundingClientRect();
    if (rect.top < triggerBottom) {
      card.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", onScroll);
onScroll();
