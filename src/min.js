document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");

    // Optional icon toggle
    menuBtn.innerHTML = mobileMenu.classList.contains("hidden")
      ? "☰"
      : "✕";
  });
});
function toggleFaq(button) {
    const content = button.nextElementSibling;
    const icon = button.querySelector("span");

    content.classList.toggle("hidden");
    icon.textContent = content.classList.contains("hidden") ? "+" : "−";

    button.parentElement.classList.toggle("bg-lime-400");
    button.parentElement.classList.toggle("text-black");
  } 
 
  const swiper = new Swiper(".trainerSwiper", {
    slidesPerView: 1,   // IMPORTANT: 1 grid per slide
    spaceBetween: 40,
    loop: false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    grabCursor: true,
  });


  const slider = document.getElementById("heroSlider");
  const prevDot = document.getElementById("prevDot");
  const nextDot = document.getElementById("nextDot");

  const totalSlides = slider.children.length;
  let index = 0;
  let interval = null;
  const AUTO_SLIDE_TIME = 6000; // 6 seconds

  function updateSlider() {
    slider.style.transform = `translateX(-${index * 100}%)`;
  }

  function nextSlide() {
    index = (index + 1) % totalSlides;
    updateSlider();
  }

  function prevSlide() {
    index = (index - 1 + totalSlides) % totalSlides;
    updateSlider();
  }

  function startAutoSlide() {
    interval = setInterval(nextSlide, AUTO_SLIDE_TIME);
  }

  function resetAutoSlide() {
    clearInterval(interval);
    startAutoSlide();
  }

  // Prev dot click
  prevDot.addEventListener("click", () => {
    prevSlide();
    resetAutoSlide();
  });

  // Next dot click
  nextDot.addEventListener("click", () => {
    nextSlide();
    resetAutoSlide();
  });

  // Init
  updateSlider();
  startAutoSlide();


  
  