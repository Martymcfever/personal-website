// script.js

document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".fade-container");

  if (container) {
    // Force reflow before adding class to ensure animation triggers
    void container.offsetWidth;
    container.classList.add("loaded");
  }

  const currentPath = window.location.pathname;

  document.querySelectorAll("a.nav-link").forEach(link => {
    const url = new URL(link.href);
    const isSameSite = url.origin === window.location.origin;
    const targetPath = url.pathname;

    if (isSameSite && targetPath !== currentPath) {
      link.addEventListener("click", function (e) {
        e.preventDefault();

        if (container) {
          container.classList.remove("loaded");
          container.classList.add("fade-out");
        }

        setTimeout(() => {
          window.location.href = link.href;
        }, 400);
      });
    }
  });
});
