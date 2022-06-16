

const navToggler = document.querySelector('.nav-toggler');
const navMenu = document.querySelector('.site-navbar ul');
const navLinks = document.querySelectorAll('.site-navbar a');

// load all event listners
allEventListners();

// functions of all event listners
function allEventListners() {
  // toggler icon click event
  navToggler.addEventListener('click', togglerClick);
  // nav links click event
  navLinks.forEach( elem => elem.addEventListener('click', navLinkClick));
}

// togglerClick function
function togglerClick() {
  navToggler.classList.toggle('toggler-open');
  navMenu.classList.toggle('open');
}

// navLinkClick function
function navLinkClick() {
  if(navMenu.classList.contains('open')) {
    navToggler.click();
  }
}



gsap.registerPlugin(ScrollTrigger);





gsap.fromTo("header", {"background-color": "rgba(31, 15, 48, 0)"}, {
  "background-color": "rgba(31, 15, 48, 1)",
  scrollTrigger: {
    trigger: "#body",
    start: "top top",
	end: "+=1",
    scrub: .5,
    markers: false, //true per vedere i trigger di inizio e fine
    id: "scrub"
  }
});





