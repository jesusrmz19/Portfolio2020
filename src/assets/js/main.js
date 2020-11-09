var waiting;
var maximumScroll;

/* Mobile Menu */
function openMobileMenu() {
    document.querySelector('.overlay-container').classList.toggle('open');
}
function handleClickMobileLink(event) {
    document.querySelector('.overlay-container').classList.toggle('open');
    setTimeout(function(){
        let toSection = event.target.dataset.block;
        document.getElementById(toSection).scrollIntoView({ behavior: 'smooth'});
    },650);
}
document.querySelector('.close_btn').addEventListener('click', openMobileMenu);
document.querySelector('.mobile-menu-btn').addEventListener('click', openMobileMenu);
document.querySelectorAll('.overlay-menu-item').forEach((link) => {
    link.addEventListener('click', handleClickMobileLink);
});

/* Desktop Menu */
function handleClickDesktopLink(event) {
    let toSection = event.target.dataset.block;
    document.getElementById(toSection).scrollIntoView({ behavior: 'smooth'});
}
document.querySelectorAll('.desktop-menu-link').forEach((link) => {
    link.addEventListener('click', handleClickDesktopLink);
});
document.querySelectorAll('.footer-menu-link').forEach((link) => {
    link.addEventListener('click', handleClickDesktopLink);
});

/* GO UP BUTTON */
const goUpBtn = document.querySelector('.go_up_btn');
function goUp() {
    window.scroll({ top: 0, behavior: "smooth" });
}
goUpBtn.addEventListener('click', goUp);
function showUpBtn() {
    if (window.scrollY >= 700) {
        goUpBtn.classList.add('visible');
    } else {
        goUpBtn.classList.remove('visible');
    }
}
window.addEventListener('scroll', showUpBtn);

/* GSAP FUNCTIONALITY */
gsap.from(".first-fold-txt", {duration: 1, x: -300, opacity: 0});
gsap.from(".first-fold-btn", {duration: 1, x: -300, opacity: 0});

