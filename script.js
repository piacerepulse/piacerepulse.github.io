const spaceHolder = document.querySelector('.space-holder');
const horizontal = document.querySelector('.horizontal');
spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;

function calcDynamicHeight(ref) {
  const vw = window.innerWidth;
  const vh = window.innerHeight;
  const objectWidth = ref.scrollWidth;
  return objectWidth - vw + vh + (vw / 20); // 150 is the padding (in pixels) desired on the right side of the .cards container. This can be set to whatever your styles dictate
}

window.addEventListener('scroll', () => {
  const sticky = document.querySelector('.sticky');
  horizontal.style.transform = `translateX(-${sticky.offsetTop}px)`;
});

window.addEventListener('resize', () => {
  spaceHolder.style.height = `${calcDynamicHeight(horizontal)}px`;
});







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
  trigger: "#sez1",
  start: "top top",
  endTrigger: '#sez3',
    end: 'top top',
  pin: "#pulse"
});

 ScrollTrigger.create({
  trigger: "#sez1",
  start: "top top",
  endTrigger: '#sez3',
    end: 'top top',
  pin: "#sez"
});






gsap.fromTo("header", {"background-color": "rgba(31, 15, 48, 0)"}, {
  "background-color": "rgba(31, 15, 48, 1)",
  scrollTrigger: {
    trigger: "#intro",
    start: "top top",
	end: "+=1",
    scrub: .5,
    markers: false, //true per vedere i trigger di inizio e fine
    id: "scrub"
  }
});








gsap.fromTo(".item1", {background: "radial-gradient(#F37E2F 27%, transparent 50%)", "margin-left": "16%"}, {
  background: "radial-gradient(#281A3E 27%, transparent 50%)", "margin-left": "-16%",
  scrollTrigger: {
    trigger: "#sez3",
    start: "top center",
	end: "+=1",
    scrub: 1,
    markers: false, //true per vedere i trigger di inizio e fine
    id: "scrub"
  }
});


gsap.fromTo(".item2", {background: "radial-gradient(circle at 50% 50%, #E24232 40%, transparent 65%)"}, {
  background: "radial-gradient(circle at 50% 50%, #4174D8 40%, transparent 65%)",
  scrollTrigger: {
    trigger: "#sez3",
    start: "top center",
	end: "+=1",
    scrub: 1,
    markers: false, //true per vedere i trigger di inizio e fine
    id: "scrub"
  }
});


gsap.fromTo(".item3", {background: "radial-gradient(circle at 50% 50%, #5670C7 65%, transparent 70%)"}, {
  background: "radial-gradient(circle at 50% 50%, #EB1DC8 65%, transparent 70%)",
  scrollTrigger: {
    trigger: "#sez3",
    start: "top center",
	end: "+=1",
    scrub: 1,
    markers: false, //true per vedere i trigger di inizio e fine
    id: "scrub"
  }
});


gsap.fromTo(".item1", {background: "radial-gradient(#111342 27%, transparent 50%)", "margin-left": "-16%"}, {
  background: "radial-gradient(#F37E2F 27%, transparent 50%)", "margin-left": "16%",
  scrollTrigger: {
    trigger: "#sez2",
    start: "top center",
	end: "+=1",
    scrub: 1,
    markers: false, //true per vedere i trigger di inizio e fine
    id: "scrub"
  }
});


gsap.fromTo(".item2", {background: "radial-gradient(circle at 50% 50%, #CD2D58 45%, transparent 70%)"}, {
  background: "radial-gradient(circle at 50% 50%, #E24232 40%, transparent 65%)",
  scrollTrigger: {
    trigger: "#sez2",
    start: "top center",
	end: "+=1",
    scrub: 1,
    markers: false, //true per vedere i trigger di inizio e fine
    id: "scrub"
  }
});


gsap.fromTo(".item3", {background: "radial-gradient(circle at 50% 50%, #C39C22 65%, transparent 70%)"}, {
  background: "radial-gradient(circle at 50% 50%, #5670C7 65%, transparent 70%)",
  scrollTrigger: {
    trigger: "#sez2",
    start: "top center",
	end: "+=1",
    scrub: 1,
    markers: false, //true per vedere i trigger di inizio e fine
    id: "scrub"
  }
});






gsap.fromTo("#malizioso", {opacity: 1, x:0}, {
  opacity: 0, x:-100,
  scrollTrigger: {
    trigger: "#sez2",
    start: "top center",

    end: "+=1",
    scrub: 1,
    markers: false, //true per vedere i trigger di inizio e fine
    id: "scrub"
  }
});




gsap.fromTo("#maliziosotext", {opacity: 1, y:0}, {
  opacity: 0, y:-200,
  scrollTrigger: {
    trigger: "#sez2",
    start: "top center",

    end: "+=1",
    scrub: 1,
    markers: false, //true per vedere i trigger di inizio e fine
    id: "scrub"
  }
});



gsap.fromTo("#empatico", {x: 100, opacity: 0}, {
  opacity: 1, x:0,
  scrollTrigger: {
    trigger: "#sez2",
    start: "top center",
	end: "+=1",
    scrub: 1,
    markers: false, //true per vedere i trigger di inizio e fine
    id: "scrub"
  }
});



gsap.fromTo("#empaticotext", {y: 200, opacity: 0}, {
  opacity: 1, y:0,
  scrollTrigger: {
    trigger: "#sez2",
    start: "top center",
	end: "+=1",
    scrub: 1,
    markers: false, //true per vedere i trigger di inizio e fine
    id: "scrub"
  }
});






	gsap.fromTo("#empatico", {x:0}, {
  opacity: 0, x:-100,
  scrollTrigger: {
    trigger: "#sez3",
    start: "top center",

    end: "+=1",
    scrub: 1,
    markers: false, //true per vedere i trigger di inizio e fine
    id: "scrub"
  }
});




gsap.fromTo("#empaticotext", {y:0}, {
  opacity: 0, y:-200,
  scrollTrigger: {
    trigger: "#sez3",
    start: "top center",

    end: "+=1",
    scrub: 1,
    markers: false, //true per vedere i trigger di inizio e fine
    id: "scrub"
  }
});






gsap.fromTo("#mood3", {x: 100, opacity: 0}, {
  opacity: 1, x:0,
  scrollTrigger: {
    trigger: "#sez3",
    start: "top center",
	end: "+=1",
    scrub: 1,
    markers: false, //true per vedere i trigger di inizio e fine
    id: "scrub"
  }
});



gsap.fromTo("#mood3text", {y: 200, opacity: 0}, {
  opacity: 1, y:0,
  scrollTrigger: {
    trigger: "#sez3",
    start: "top center",
	end: "+=1",
    scrub: 1,
    markers: false, //true per vedere i trigger di inizio e fine
    id: "scrub"
  }
});
