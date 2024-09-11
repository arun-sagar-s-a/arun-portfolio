function toggleMenu() {
  const icon = document.querySelector(".hamburger-icon");
  const menu = document.querySelector(".menu-links");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function takeMeToGithub() {
  window.open("https://github.com/arun-sagar-s-a", "_blank");
}
function takeMeTolinkedIn() {
  window.open(
    "https://www.linkedin.com/in/arun-sagar-s-a-b70b1825b/",
    "_blank"
  );
}
function getMyResume() {
  window.open("./assets/Arun_RESUME_StudentTester_R3.pdf", "_blank");
}
