var waiting;
function loading() {
    waiting = setTimeout(showPage, 4000);
}
function showPage() {
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.main-container').style.display = 'block';
    setTimeout(function(){
        document.querySelector('.footer').style.display = 'block';
    },4000);
}
const toProjects = document.querySelector('#toProjects');
const projects = document.querySelector('#projects');
function projectsIntoView(){
    document.querySelector('#projects').scrollIntoView({behavior: 'smooth'});
}
toProjects.addEventListener('click', projectsIntoView);

