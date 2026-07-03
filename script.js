/* ===========================================
   Mohit Kumar - Personal Portfolio
   script.js
=========================================== */

// ================================
// Loader
// ================================

window.addEventListener("load", () => {

    const loader = document.getElementById("loader");

    setTimeout(() => {

        loader.style.opacity = "0";

        loader.style.visibility = "hidden";

    }, 1500);

});


// ================================
// Typing Effect
// ================================

const typing = document.querySelector(".typing");

const words = [

    "B.Sc IT Student",

    "Web Developer",

    "Python Developer",

    "Frontend Developer",

    "Problem Solver",

    "Tech Enthusiast"

];

let wordIndex = 0;

let charIndex = 0;

let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent = currentWord.substring(0, charIndex++);

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;

        }

    }

    else {

        typing.textContent = currentWord.substring(0, charIndex--);

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 50 : 100);

}

typeEffect();


// ================================
// Sticky Header
// ================================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    header.classList.toggle("sticky", window.scrollY > 80);

});


// ================================
// Counter Animation
// ================================

const counters = document.querySelectorAll(".count");

const speed = 120;

const startCounter = () => {

    counters.forEach(counter => {

        const update = () => {

            const target = +counter.getAttribute("data-target");

            const count = +counter.innerText;

            const increment = target / speed;

            if (count < target) {

                counter.innerText = Math.ceil(count + increment);

                setTimeout(update, 20);

            }

            else {

                counter.innerText = target;

            }

        };

        update();

    });

};

const counterSection = document.querySelector(".counter");

const observer = new IntersectionObserver(entries => {

    if (entries[0].isIntersecting) {

        startCounter();

    }

});

observer.observe(counterSection);


// ================================
// Back To Top
// ================================

const topBtn = document.querySelector(".top");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {

        topBtn.style.display = "flex";

    }

    else {

        topBtn.style.display = "none";

    }

});


// ================================
// Smooth Active Menu
// ================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") == "#" + current) {

            link.classList.add("active");

        }

    });

});


// ================================
// Mobile Menu
// ================================

const menu = document.querySelector(".menu");

const nav = document.querySelector("nav");

menu.addEventListener("click", () => {

    nav.classList.toggle("show");

});


// ================================
// Reveal Animation
// ================================

const reveals = document.querySelectorAll(

".skill-card,.project-card,.achievement-card,.certificate-card,.timeline-box,.counter-box"

);

window.addEventListener("scroll", revealElements);

function revealElements() {

    const windowHeight = window.innerHeight;

    reveals.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < windowHeight - 120) {

            item.classList.add("visible");

        }

    });

}


// ================================
// Current Year
// ================================

const year = new Date().getFullYear();

const footer = document.querySelector("footer p:last-child");

if (footer) {

footer.innerHTML =

`© ${year} Mohit Kumar | All Rights Reserved`;

}

/*====================================================
    CURSOR GLOW EFFECT
====================================================*/

const glow = document.createElement("div");

glow.className = "cursor-glow";

document.body.appendChild(glow);

document.addEventListener("mousemove", (e) => {

    glow.style.left = e.clientX + "px";

    glow.style.top = e.clientY + "px";

});


/*====================================================
    PARALLAX HERO IMAGE
====================================================*/

const heroImage = document.querySelector(".circle");

window.addEventListener("mousemove", (e) => {

    let x = (window.innerWidth / 2 - e.pageX) / 40;

    let y = (window.innerHeight / 2 - e.pageY) / 40;

    heroImage.style.transform =
        `translate(${x}px,${y}px)`;

});


/*====================================================
    BUTTON RIPPLE EFFECT
====================================================*/

const buttons = document.querySelectorAll(".btn,.btn2");

buttons.forEach(btn => {

    btn.addEventListener("click", function (e) {

        let circle = document.createElement("span");

        circle.classList.add("ripple");

        let x = e.clientX - this.offsetLeft;

        let y = e.clientY - this.offsetTop;

        circle.style.left = x + "px";

        circle.style.top = y + "px";

        this.appendChild(circle);

        setTimeout(() => {

            circle.remove();

        }, 600);

    });

});


/*====================================================
    CARD HOVER ROTATION
====================================================*/

const cards = document.querySelectorAll(

".project-card,.skill-card,.achievement-card,.certificate-card"

);

cards.forEach(card => {

    card.addEventListener("mousemove", (e) => {

        let rect = card.getBoundingClientRect();

        let x = e.clientX - rect.left;

        let y = e.clientY - rect.top;

        let rotateY = (x / rect.width - .5) * 15;

        let rotateX = (y / rect.height - .5) * -15;

        card.style.transform =

        `perspective(900px)

         rotateX(${rotateX}deg)

         rotateY(${rotateY}deg)

         scale(1.04)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =

        "perspective(900px) rotateX(0) rotateY(0)";

    });

});


/*====================================================
    IMAGE LIGHTBOX
====================================================*/

const images = document.querySelectorAll(

".certificate-card img,.achievement-card img,.slides img"

);

const lightbox = document.createElement("div");

lightbox.className = "lightbox";

lightbox.innerHTML =

`<img src="">`;

document.body.appendChild(lightbox);

const lightboxImg = lightbox.querySelector("img");

images.forEach(img => {

    img.addEventListener("click", () => {

        lightbox.classList.add("show");

        lightboxImg.src = img.src;

    });

});

lightbox.addEventListener("click", () => {

    lightbox.classList.remove("show");

});


/*====================================================
    FLOATING PARTICLES
====================================================*/

for(let i=0;i<45;i++){

    let particle=document.createElement("span");

    particle.className="particle";

    particle.style.left=Math.random()*100+"vw";

    particle.style.animationDuration=

    (6+Math.random()*8)+"s";

    particle.style.animationDelay=

    Math.random()*5+"s";

    document.body.appendChild(particle);

}


/*====================================================
    AUTO CHANGE HERO BORDER COLOR
====================================================*/

const colors=[

"#00d9ff",

"#8b5cf6",

"#3b82f6",

"#22d3ee",

"#06b6d4"

];

let c=0;

setInterval(()=>{

heroImage.style.borderColor=colors[c];

heroImage.style.boxShadow=

`0 0 40px ${colors[c]}`;

c++;

if(c>=colors.length){

c=0;

}

},2500);


/*====================================================
    PROJECT CARD STAGGER ANIMATION
====================================================*/

window.addEventListener("load",()=>{

document.querySelectorAll(".project-card")

.forEach((card,index)=>{

setTimeout(()=>{

card.style.opacity="1";

card.style.transform="translateY(0)";

},index*250);

});

});


/*====================================================
    PAGE TITLE CHANGE
====================================================*/

const titles=[

"👋 Welcome",

"💻 Mohit Kumar",

"🚀 Personal Portfolio",

"⭐ Web Developer"

];

let titleIndex=0;

setInterval(()=>{

document.title=titles[titleIndex];

titleIndex++;

if(titleIndex>=titles.length){

titleIndex=0;

}

},3000);


/*====================================================
    SCROLL PROGRESS BAR
====================================================*/

const progress=document.createElement("div");

progress.className="progress-bar";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const total=

document.documentElement.scrollHeight-

window.innerHeight;

const current=

(window.pageYOffset/total)*100;

progress.style.width=current+"%";

});


/*====================================================
    CONSOLE MESSAGE
====================================================*/

console.log(

"%cWelcome to Mohit's Portfolio",

"color:cyan;font-size:22px;font-weight:bold;"

);

console.log(

"%cDesigned with HTML CSS JavaScript",

"color:violet;font-size:16px;"

);

/*====================================================
    SMOOTH SCROLL
====================================================*/

document.querySelectorAll('nav a').forEach(anchor => {

    anchor.addEventListener('click', function(e){

        e.preventDefault();

        const target=document.querySelector(this.getAttribute('href'));

        if(target){

            target.scrollIntoView({

                behavior:'smooth'

            });

        }

    });

});


/*====================================================
    NAVBAR ACTIVE LINK
====================================================*/

const navItems=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

    let current="";

    document.querySelectorAll("section").forEach(section=>{

        const top=section.offsetTop-120;

        if(pageYOffset>=top){

            current=section.getAttribute("id");

        }

    });

    navItems.forEach(link=>{

        link.classList.remove("active");

        if(link.getAttribute("href")==="#"+current){

            link.classList.add("active");

        }

    });

});


/*====================================================
    CONTACT FORM
====================================================*/

const contactForm=document.querySelector("form");

if(contactForm){

contactForm.addEventListener("submit",function(e){

e.preventDefault();

alert("Thank You! Your message has been received.");

contactForm.reset();

});

}


/*====================================================
    GALLERY AUTO SLIDER
====================================================*/

const slides=document.querySelectorAll(".slide");

let current=0;

function showSlide(index){

slides.forEach((slide)=>{

slide.classList.remove("active");

});

slides[index].classList.add("active");

}

function nextSlide(){

current++;

if(current>=slides.length){

current=0;

}

showSlide(current);

}

if(slides.length>0){

setInterval(nextSlide,3000);

}


/*====================================================
    GALLERY BUTTONS
====================================================*/

const next=document.querySelector(".next");

const prev=document.querySelector(".prev");

if(next){

next.addEventListener("click",()=>{

nextSlide();

});

}

if(prev){

prev.addEventListener("click",()=>{

current--;

if(current<0){

current=slides.length-1;

}

showSlide(current);

});

}


/*====================================================
    SCROLL TO TOP
====================================================*/

const topButton=document.querySelector(".top");

if(topButton){

topButton.style.display="none";

window.addEventListener("scroll",()=>{

if(window.scrollY>300){

topButton.style.display="flex";

}else{

topButton.style.display="none";

}

});

}


/*====================================================
    IMAGE HOVER EFFECT
====================================================*/

document.querySelectorAll("img").forEach(img=>{

img.addEventListener("mouseover",()=>{

img.style.transition=".5s";

img.style.transform="scale(1.05)";

});

img.addEventListener("mouseout",()=>{

img.style.transform="scale(1)";

});

});


/*====================================================
    CONSOLE MESSAGE
====================================================*/

console.log("====================================");

console.log("Mohit Kumar Personal Portfolio");

console.log("Designed using HTML CSS JavaScript");

console.log("====================================");