const projectsPreview = document.querySelectorAll(".project__preview");

projectsPreview.forEach((project, index) => {
   project.addEventListener("click", () => {
      localStorage.setItem("id", index);
      window.location.href = `projects.html`;
   });
});
