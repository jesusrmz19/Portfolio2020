var waiting;
var actualWidth = document.body.clientWidth;
console.log(actualWidth);
function loading() {
    waiting = setTimeout(showPage, 4000);
}
function showPage() {
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.main-container').style.display = 'block';
    document.querySelector('.footer').style.display = 'flex';
}
const toProjects = document.querySelector('#toProjects');
const projects = document.querySelector('#projects');
function projectsIntoView(){
    document.querySelector('#projects').scrollIntoView({behavior: 'smooth'});
}
toProjects.addEventListener('click', projectsIntoView);

/* Desktop Menu */
function handleClickDesktopLink(event) {
    let toSection = event.target.dataset.block;
    document.getElementById(toSection).scrollIntoView({ behavior: 'smooth'});
}
document.querySelectorAll('.desktop-menu-link').forEach((link) => {
    link.addEventListener('click', handleClickDesktopLink);
});


