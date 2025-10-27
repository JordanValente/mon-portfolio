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
      <img src="${project.image}" alt="${project.title}" />
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <a href="${project.link}" target="_blank">Voir le projet</a>
    `;
    container.appendChild(card);
  });
}

// Lightbox (uniquement si galerie présente)
const lightbox = document.getElementById("lightbox");
if (lightbox) {
  const lightboxImg = document.querySelector(".lightbox-img");
  const closeBtn = document.querySelector(".close");

  document.querySelectorAll(".grid img").forEach(img => {
    img.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
    });
  });

  closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
  });

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      lightbox.style.display = "none";
    }
  });
}
