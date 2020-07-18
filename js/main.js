const toProjects = document.querySelector('#toProjects');
var projects = document.querySelector('#projects');
const y = projects.getBoundingClientRect().top + window.scrollY;
function projectsIntoView(){
   window.scroll({
    top: y,
    behavior: 'smooth'
    });
}
toProjects.addEventListener('click', projectsIntoView);

