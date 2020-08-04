var waiting;
var maximumScroll;
function loading() {
    waiting = setTimeout(showPage, 4000);
}
function showPage() {
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.navbar-mobile').classList.add('visible');
    document.querySelector('.main-container').style.display = 'block';
    document.querySelector('.footer').style.display = 'flex';
    maximumScroll = document.body.offsetHeight - window.innerHeight + 50;
}

/* Mobile Menu */
function openMobileMenu() {
    document.querySelector('.overlay-container').classList.toggle('open');
}
function handleClickMobileLink(event) {
    document.querySelector('.overlay-container').classList.toggle('open');
    setTimeout(function(){
        let toSection = event.target.dataset.block;
        if (toSection == 'contact') {
            window.scroll({ top: maximumScroll, behavior: "smooth" });
        }else{
            document.getElementById(toSection).scrollIntoView({ behavior: 'smooth'});
        }
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
    if (toSection == 'contact') {
        window.scroll({ top: maximumScroll, behavior: "smooth" });
    }else{
        document.getElementById(toSection).scrollIntoView({ behavior: 'smooth'});
    }
}
document.querySelectorAll('.desktop-menu-link').forEach((link) => {
    link.addEventListener('click', handleClickDesktopLink);
});
document.querySelectorAll('.footer-menu-link').forEach((link) => {
    link.addEventListener('click', handleClickDesktopLink);
});

