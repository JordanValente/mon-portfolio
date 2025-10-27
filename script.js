// Menu hamburger
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Projets dynamiques
const projects = [
  {
    title: "To-Do List",
    description: "Une application simple pour gérer ses tâches.",
    link: "projects/todo.html",
    image: "images/todo-preview.jpg"
  },
  {
    title: "Formulaire de contact dynamique",
    description: "Un formulaire avec validation JS.",
    link: "projects/contact-form.html",
    image: "images/contact-preview.jpg"
  }
];

const container = document.getElementById("project-list");
if (container) {
  projects.forEach((project) => {
    const card = document.createElement("div");
    card.className = "project-card";
    card.innerHTML = `
      <img src="${project.image}" alt="${project.title}" style="width:100%; border-radius:8px; margin-bottom:12px;" />
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank">Voir le projet</a>
    `;
    container.appendChild(card);
  });
}
