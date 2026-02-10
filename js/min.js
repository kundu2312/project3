
  function toggleDrop(id) {
    document.getElementById(id).classList.toggle('hidden');
  }

  function toggleFaq(button) {
    const content = button.nextElementSibling;
    const icon = button.querySelector("span");

    content.classList.toggle("hidden");
    icon.textContent = content.classList.contains("hidden") ? "+" : "−";

    button.parentElement.classList.toggle("bg-lime-400");
    button.parentElement.classList.toggle("text-black");
  }

  const menuBtn = document.getElementById("menuBtn");
  const closeBtn = document.getElementById("closeBtn");
  const mobileMenu = document.getElementById("mobileMenu");

  menuBtn.addEventListener("click", () => {
    mobileMenu.classList.remove("right-[-100%]");
    mobileMenu.classList.add("right-0");
  });

  closeBtn.addEventListener("click", () => {
    mobileMenu.classList.add("right-[-100%]");
    mobileMenu.classList.remove("right-0");
  });



