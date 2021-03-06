var waiting;
var maximumScroll;

/* GSAP FUNCTIONALITY */
gsap.registerPlugin(ScrollTrigger);

const projects = gsap.utils.toArray('.project');
projects.forEach((self) => {
    let projectImg = self.querySelectorAll('.project-img');
    let projectName = self.querySelectorAll('.project-name');
    let projectDesc = self.querySelectorAll('.project-description');
    let projectUses = self.querySelectorAll('.project-uses');
    let projectBtns = self.querySelectorAll('.project-btns');
    let projectTl = gsap.timeline();

    projectTl.from(projectImg, {duration: 0.5, x: -100, opacity: 0})
    .from(projectName, {duration: 0.4, x: 100, opacity: 0}, "-=0.20")
    .from(projectDesc, {duration: 0.4, x: 100, opacity: 0}, "-=0.20")
    .from(projectUses, {duration: 0.4, x: 100, opacity: 0}, "-=0.20")
    .from(projectBtns, {duration: 0.4, x: 100, opacity: 0}, "-=0.20");

    ScrollTrigger.create({
        animation: projectTl,
        trigger: self,
        start: "20% 75%"
    });

});

const experiments = gsap.utils.toArray('.experiment');
experiments.forEach((self) => {
    gsap.from(self, {
        scrollTrigger: {
            trigger: self,
            start: "-20% 75% "
        },
        opacity: 0,
        y: 150,
        duration: 0.4,
        stagger: 0.1
    });
});

gsap.from(".about", {
    scrollTrigger: {
        trigger: ".about",
        start: "top: 60%"
    },
    opacity: 0,
    x: -100,
    duration: 0.6
});
gsap.from(".skills--container", {
    scrollTrigger: {
        trigger: ".skills--container",
        start: "top: 60%"
    },
    opacity: 0,
    x: 100,
    duration: 0.6
});

const contactTl = gsap.timeline();
contactTl.from(".contact-title", { duration: 0.4, opacity: 0, y: 100 })
    .from(".contact-subtitle", { duration: 0.4, opacity: 0, y: 100 })
    .from(".form-container", { duration: 0.4, opacity: 0, y: 100 });
ScrollTrigger.create({
    trigger: ".contact",
    start: "top 60%"
});


/* Mobile Menu */
const mobileMenuBtn = document.querySelectorAll('.bar');
const menuOverlay = document.querySelector('.menuoverlay--container');

function openMobileMenu() {
    mobileMenuBtn.forEach(bar => bar.classList.toggle('active'));
    menuOverlay.classList.toggle('open');
}
function handleClickMobileLink(event) {
    mobileMenuBtn.forEach(bar => bar.classList.toggle('active'));
    menuOverlay.classList.toggle('open');
    if(toSection == 'about') {
        return;
    }
    setTimeout(function(){
        let toSection = event.target.dataset.block;
        document.getElementById(toSection).scrollIntoView({ behavior: 'smooth'});
    },650);
}
document.querySelector('.mobile-menu-btn').addEventListener('click', openMobileMenu);
document.querySelectorAll('.menuoverlay--item').forEach((link) => {
    link.addEventListener('click', handleClickMobileLink);
});

/* Desktop Menu */
function handleClickDesktopLink(event) {
    let toSection = event.target.dataset.block;
    if(toSection == 'about') {
        return;
    }
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


