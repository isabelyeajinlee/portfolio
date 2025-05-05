document.addEventListener("DOMContentLoaded", () => {
  const trigger = document.getElementById("groove");
  const overlay = document.getElementById("groove-overlay");

  if (trigger && overlay) {
    trigger.addEventListener("click", () => {
      overlay.classList.add("active");
      document.body.classList.add("no-scroll");
    });

    overlay.addEventListener("click", () => {
      overlay.classList.remove("active");
      document.body.classList.remove("no-scroll");
    });
  }
});