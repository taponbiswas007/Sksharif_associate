(function ($) {

    $(window).on('load', function () {
        $('.preloader').addClass('loaded'); // Add loaded class
        setTimeout(function () {
            $('.preloader').addClass('fade-out');
            setTimeout(function () {
                $('.preloader').remove();
                $('body').css('overflow', 'auto');
            }, 1000);
        }, 1000); // Delay before fade-out
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $('.header_area').addClass('sticky');
        } else {
            $('.header_area').removeClass('sticky');
        }
    });
    "use strict";

    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 90) {
            $('.nav-bar').addClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "73px");
        } else {
            $('.nav-bar').removeClass('nav-sticky');
            $('.carousel, .page-header').css("margin-top", "0");
        }
    });


    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    // banner carosol
    $('.banner-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,

        items: 1,                // Show 1 item per slide
        autoplay: true,          // Enable auto-sliding
        autoplayTimeout: 2000,   // Set the interval to 2 seconds (2000 milliseconds)
        autoplayHoverPause: true, // Pause the autoplay when the mouse hovers over the carousel
        navText: [
            '<i class="fa fa-chevron-left"></i>',  // Left arrow icon (Font Awesome)
            '<i class="fa fa-chevron-right"></i>'  // Right arrow icon (Font Awesome)
        ]
    });


    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        autoplay: true,            // Enable autoplay
        autoplayTimeout: 3000,     // Set the autoplay interval (in milliseconds)
        autoplayHoverPause: true,  // Pause autoplay on hover
        ltr: true,                 // Enable right-to-left direction
        dots: false,                // Enable dots navigation
        loop: true,                // Enable infinite loop
        smartSpeed: 1000,          // Smooth sliding speed (in milliseconds)

    });



    // Blogs carousel
    $(".blog-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });

    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('filter-active');
        $(this).addClass('filter-active');

        portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });

})(jQuery);
// toggle menu style
Array.from(document.getElementsByTagName('path')).map(path => {
    console.log(path.getTotalLength());
    const debugPath = path.cloneNode();
    debugPath.classList.add('line--debug');
    if (path.parentNode) path.parentNode.insertBefore(debugPath.cloneNode(), path);
});

const debugCheckbox = document.getElementById('debug');
debugCheckbox.addEventListener('change', () => {
    const navElement = document.querySelector('.navDeactive'); // Select the .navDeactive element
    if (debugCheckbox.checked) {
        navElement.classList.add('navActive'); // Add 'navActive' when checked
    } else {
        navElement.classList.remove('navActive'); // Remove 'navActive' when unchecked
    }
});

let currentActive = 0;
const checkboxes = document.querySelectorAll('.grid input');
const autoShow = setInterval(() => {
    checkboxes[currentActive % checkboxes.length].checked = !checkboxes[currentActive % checkboxes.length].checked;
    if (!checkboxes[currentActive % checkboxes.length].checked) currentActive += 1;
}, 1000);

document.querySelector('.grid').addEventListener('click', () => {
    clearInterval(autoShow);
});



$(document).ready(function () {
    var $slider = $('.logo-slider');
    var $slides = $slider.children('.logo-slide');
    var slideCount = $slides.length;
    var slideWidth = $slides.width();
    var totalWidth = slideWidth * slideCount;

    $slider.width(totalWidth * 2); // Raddoppia la larghezza per il loop infinito
    $slider.append($slides.clone()); // Clona gli elementi

    function animateSlider() {
        $slider.animate({
            left: '-=' + totalWidth
        }, 15000, 'linear', function () { // Anima lo scorrimento
            $slider.css('left', 0); // Riporta lo slider all'inizio
            animateSlider(); // Richiama la funzione per il loop continuo
        });
    }

    animateSlider();
});

