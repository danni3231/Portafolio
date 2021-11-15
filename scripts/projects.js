const projects = document.querySelectorAll(".project");

const projectId = localStorage.getItem("id");

projects.forEach((project, index) => {
   if (projectId == index) {
      project.classList.remove("hidden");
   }
});
