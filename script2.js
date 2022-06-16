
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

ScrollTrigger.create({
  trigger: "#project1",
  start: "top +80", 
  endTrigger: "#contact",
  end: "top bottom", 
  pin: "#projects-content",
  anticipatePin: 0.5
});




var img2 = gsap.timeline({paused:true})
.set('.content1', {'opacity':'0'})
.set('.content2', {'opacity':'1'})
.set('.content3', {'opacity':'0'})


.set('.content1', {'pointer-events':'none'})
.set('.content2', {'pointer-events':'auto'})
.set('.content3', {'pointer-events':'none'})



ScrollTrigger.create({
  trigger: "#project2",
  start: "top center",
endTrigger: "#project2",
  end: "bottom center",
  onEnter: () => img2.play(),
  onLeaveBack: () => img2.reverse(),
});



var img3 = gsap.timeline({paused:true})
.set('.content1', {'opacity':'0'})
.set('.content2', {'opacity':'0'})
.set('.content3', {'opacity':'1'})


.set('.content1', {'pointer-events':'none'})
.set('.content2', {'pointer-events':'none'})
.set('.content3', {'pointer-events':'auto'})



ScrollTrigger.create({
  trigger: "#project3",
  start: "top center",

  end: "+=900000",
  onEnter: () => img3.play(),
  onLeaveBack: () => img3.reverse(),
});






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

