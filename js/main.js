var waiting;
var maximumScroll;
function loading() {
    waiting = setTimeout(showPage, 4000);
}
function showPage() {
    document.querySelector('.loader').style.display = 'none';
    document.querySelector('.main-container').style.display = 'block';
    document.querySelector('.footer').style.display = 'flex';
    maximumScroll = document.body.offsetHeight - window.innerHeight + 30;
}


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

