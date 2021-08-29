$(function() {
    $('.slider').slick({
       arrows: false,
       fade:true,
       autoplay: 3000,
       dots: true
    });
});

// const navSlide = () => {
//     const burger = document.querySelector('.burger');
//     const nav = document.querySelector('.nav-links');
//     const navLinks = document.querySelectorAll('.nav-links li');


    
//     burger.addEventListener('click', () => {
//         // Toggle Nav
//         nav.classList.toggle('nav-active');

//         //Animate Links
//         navLinks.forEach((link, index) => {
//             if (link.style.animation) {
//                 link.style.animation = '';
//             } else {
//                 link.style.animation =`navLinkFade 0.5 ease forwards ${index / 7 + 2}s`;
//             }
//         });

//         //Burger Animation
//         burger.classList.toggle('toggle');
//     });

// }

// navSlide();



function backToTop() {
    let button = $('.back-to-top');

    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 50) {
            button.fadeIn();
        } else {
            button.fadeOut();
        }
    });

    button.on('click', () => {
        e.preventDefault();
        $('html').animation({scrollTop: 0}, 1000);
    })
}

backToTop();