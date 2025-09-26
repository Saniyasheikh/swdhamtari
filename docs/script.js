const menuBtn = document.getElementById("menuBtn");
const sidebarOverlay = document.getElementById("sidebarOverlay");

// ✅ Toggle sidebar open/close
menuBtn.addEventListener("click", () => {
  sidebarOverlay.classList.toggle("active");
});

// ✅ Close sidebar when clicking the 25% overlay
sidebarOverlay.addEventListener("click", (e) => {
  if (e.target === sidebarOverlay) {
    sidebarOverlay.classList.remove("active");
  }
});


// Countdown JS
const eventDate = new Date("November 28, 2025 00:00:00").getTime(); // Start date
const endDate = new Date("November 30, 2025 23:59:59").getTime(); // End date

function updateCountdown() {
  const now = new Date().getTime();
  let distance;

  if(now < eventDate) {
    distance = eventDate - now;
  } else if(now <= endDate) {
    distance = 0; // Event ongoing
  } else {
    distance = 0; // Event ended
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = days < 10 ? "0" + days : days;
  document.getElementById("hours").innerText = hours < 10 ? "0" + hours : hours;
  document.getElementById("minutes").innerText = minutes < 10 ? "0" + minutes : minutes;
  document.getElementById("seconds").innerText = seconds < 10 ? "0" + seconds : seconds;
}

// Initial call
updateCountdown();

// Update every second
setInterval(updateCountdown, 1000);


const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      // Close all other open FAQs
      faqItems.forEach(i => {
        if (i !== item) i.classList.remove('active');
      });
      // Toggle current one
      item.classList.toggle('active');
    });
  });