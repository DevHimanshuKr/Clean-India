let hamb = document.querySelector('.hamberger');
let back = document.querySelector('.back');
let navLinks = document.querySelector('.navLinks');
let navUl = document.querySelector('.navLinks-ul');

hamb.addEventListener('click', function () {

    if (navLinks.style.opacity == 0) {
        navLinks.style.opacity = 1;
        navLinks.style.viability = 'visible';
        navLinks.style.zIndex = 100;
        navUl.style.right = 0;

    } else {
        navLinks.style.opacity = 0;
        navLinks.style.viability = 'hidden';
        navLinks.style.zIndex = -1;
    }

});

back.addEventListener('click', function () {

    navLinks.style.opacity = 0;
    navLinks.style.viability = 'hidden';
    navLinks.style.zIndex = -1;
    navUl.style.right = '-80%';

});
