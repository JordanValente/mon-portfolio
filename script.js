const projects = [
  {
    title: "To-Do List",
    description: "Une application simple pour gérer ses tâches.",
    link: "projects/todo.html"
  },
  {
    title: "Formulaire de contact dynamique",
    description: "Un formulaire avec validation JS.",
    link: "projects/contact-form.html"
  }
];

const container = document.getElementById("project-list");

projects.forEach((project) => {
  const card = document.createElement("div");
  card.innerHTML = `
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <a href="${project.link}" target="_blank">Voir le projet</a>
  `;
  card.style.border = "1px solid #ccc";
  card.style.padding = "1rem";
  card.style.borderRadius = "8px";
  card.style.background = "#fff";
  container.appendChild(card);
});
