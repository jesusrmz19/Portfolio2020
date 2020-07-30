var waiting;
var actualWidth = document.body.clientWidth;
console.log(actualWidth);
function loading() {
    waiting = setTimeout(showPage, 4000);
}
function showPage() {
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.main-container').style.display = 'block';
    setTimeout(function(){
        if(actualWidth >= 1200) {
            debugger;
            console.log('flex');
            document.querySelector('.footer').style.display = 'flex';
        }else{
            console.log('block');
            document.querySelector('.footer').style.display = 'block';
        }
    },4000);
}
const toProjects = document.querySelector('#toProjects');
const projects = document.querySelector('#projects');
function projectsIntoView(){
    document.querySelector('#projects').scrollIntoView({behavior: 'smooth'});
}
toProjects.addEventListener('click', projectsIntoView);

