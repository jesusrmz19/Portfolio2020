var waiting;
var actualWidth = document.body.clientWidth;
console.log(actualWidth);
function loading() {
    waiting = setTimeout(showPage, 4000);
}
function showPage() {
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.main-container').style.display = 'block';
    document.querySelector('.footer').classList.remove('footer-nodisplay');
    if (actualWidth >= 1200) {
        document.querySelector('.footer').classList.add('footer-flex');
    } else {
        document.querySelector('.footer').classList.add('footer-display');
    }
}
const toProjects = document.querySelector('#toProjects');
const projects = document.querySelector('#projects');
function projectsIntoView(){
    document.querySelector('#projects').scrollIntoView({behavior: 'smooth'});
}
toProjects.addEventListener('click', projectsIntoView);

