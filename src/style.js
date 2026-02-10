/*document.addEventListener("DOMContentLoaded", () => {
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
  startAutoSlide();*/

/*document.addEventListener("DOMContentLoaded", () => {

 
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (menuBtn && mobileMenu) {
    menuBtn.addEventListener("click", () => {
      mobileMenu.classList.toggle("hidden");

      menuBtn.innerHTML = mobileMenu.classList.contains("hidden")
        ? "☰"
        : "✕";
    });
  }

   ================= FAQ ================= */
  window.toggleFaq = function (button) {
    const content = button.nextElementSibling;
    const icon = button.querySelector("span");

    content.classList.toggle("hidden");
    icon.textContent = content.classList.contains("hidden") ? "+" : "−";

    button.parentElement.classList.toggle("bg-lime-400");
    button.parentElement.classList.toggle("text-black");
  };

  /* ================= HERO SLIDER ================= */
 /* const slider = document.getElementById("heroSlider");
  const prevDot = document.getElementById("prevDot");
  const nextDot = document.getElementById("nextDot");

  if (slider && prevDot && nextDot) {
    const totalSlides = slider.children.length;
    let index = 0;
    let interval = null;
    const AUTO_SLIDE_TIME = 6000;

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

    prevDot.addEventListener("click", () => {
      prevSlide();
      resetAutoSlide();
    });

    nextDot.addEventListener("click", () => {
      nextSlide();
      resetAutoSlide();
    });

    updateSlider();
    startAutoSlide();
  }

});
 const slider = document.getElementById("blogSlider");
    const prevBtn = document.getElementById("blogPrev");
    const nextBtn = document.getElementById("blogNext");

    let index = 0;

    function visibleCards() {
      if (window.innerWidth >= 1024) return 5;
      if (window.innerWidth >= 640) return 2;
      return 1;
    }

    function updateSlider() {
      const card = slider.children[0];
      const cardWidth = card.offsetWidth + 32; // gap
      slider.style.transform = `translateX(-${index * cardWidth}px)`;
    }

    nextBtn.addEventListener("click", () => {
      if (index < slider.children.length - visibleCards()) {
        index++;
        updateSlider();
      }
    });

    prevBtn.addEventListener("click", () => {
      if (index > 0) {
        index--;
        updateSlider();
      }
    });

    window.addEventListener("resize", updateSlider);*/
 
/*document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("menuBtn");
  const menu = document.getElementById("mobileMenu");

  btn.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    btn.textContent = menu.classList.contains("hidden") ? "☰" : "✕";
  });
});*/ 
/*document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");

    
    menuBtn.innerHTML = mobileMenu.classList.contains("hidden")
      ? "☰"
      : "✕";
  });
});*/
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("menuBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");

    
    menuBtn.innerHTML = mobileMenu.classList.contains("hidden")
      ? "☰"
      : "✕";
  });
});

  
document.addEventListener("DOMContentLoaded", () => {
  const slider = document.getElementById("heroSlider");
  const dots = document.querySelectorAll(".hero-dot");
  let index = 0;
  const total = dots.length;

  function updateSlider() {
    slider.style.transform = `translateX(-${index * 100}%)`;
    dots.forEach((dot, i) => {
      dot.classList.toggle("bg-lime-400", i === index);
      dot.classList.toggle("bg-gray-500", i !== index);
    });
  }

  dots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      index = i;
      updateSlider();
    });
  });

  // AUTO SLIDE (optional)
  setInterval(() => {
    index = (index + 1) % total;
    updateSlider();
  }, 6000);
});

