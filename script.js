// let menu =  document.querySelector('#menu-icon');
// let navbar =  document.querySelector('.navbar');

// menu.onclick = () =>{
//     menu.classList.toggle('bx-x');
//     navbar.classList.toggle('.open');
// };

// const sr =  ScrollReveal({
//     distance: '40px',
//     duration:2500,
//     reset: true
// });

// sr.reveal('.logo', {delay:200, origin: 'left'});
// sr.reveal('.navbar', {delay:400, origin: 'top'});
// sr.reveal('.menu-btn', {delay:520, origin: 'right'});
// sr.reveal('.home-text span', {delay:600, origin: 'top'});
// sr.reveal('.home-text h1', {delay:680, origin: 'left'});
// sr.reveal('.home-text p', {delay:750, origin: 'right'});
// sr.reveal('.main-btn', {delay:860, origin: 'left'});


// sr.reveal('.share', {delay:900, origin: 'left'});
// sr.reveal('.social', {delay:900, origin: 'bottom'});
// sr.reveal('.pt', {delay:900, origin: 'bottom'});
// sr.reveal('.home-img', {delay:1000, origin: 'right'});


// Menu toggle
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
};

// ScrollReveal animations
const sr = ScrollReveal({
    distance: '40px',
    duration: 2500,
    reset: true
});

// Header and home section animations
sr.reveal('.logo', { delay: 200, origin: 'left' });
sr.reveal('.navbar', { delay: 400, origin: 'top' });
sr.reveal('.menu-btn', { delay: 520, origin: 'right' });
sr.reveal('.home-text span', { delay: 600, origin: 'top' });
sr.reveal('.home-text h1', { delay: 680, origin: 'left' });
sr.reveal('.home-text p', { delay: 750, origin: 'right' });
sr.reveal('.main-btn', { delay: 860, origin: 'left' });
sr.reveal('.share', { delay: 900, origin: 'left' });
sr.reveal('.social', { delay: 900, origin: 'bottom' });
sr.reveal('.pt', { delay: 900, origin: 'bottom' });
sr.reveal('.home-img', { delay: 1000, origin: 'right' });

// New section animations
sr.reveal('.about', { delay: 200, origin: 'top' });
sr.reveal('.services', { delay: 200, origin: 'top' });
sr.reveal('.portfolio', { delay: 200, origin: 'top' });
sr.reveal('.blog', { delay: 200, origin: 'top' });
sr.reveal('.contacts', { delay: 200, origin: 'top' });
