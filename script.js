document.querySelectorAll(".dropdown").forEach((dropdown) => {
  const toggle = dropdown.querySelector(".dropdown-toggle");
  const menu = dropdown.querySelector(".dropdown-menu");

  toggle.addEventListener("click", (e) => {
    e.preventDefault();
    menu.classList.toggle("hidden");
  });
});

document.addEventListener("click", (e) => {
  document.querySelectorAll(".dropdown").forEach((dropdown) => {
    if (!dropdown.contains(e.target)) {
      dropdown.querySelector(".dropdown-menu").classList.add("hidden");
    }
  });
});

document
  .querySelector(".newsletter-form button")
  .addEventListener("click", () => {
    if (confirm("Are you sure?")) alert("Subscribed!");
  });
