(function ($) {
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
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
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


    // Testimonials carousel
    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            }
        }
    });
    
    
    // Blogs carousel
    $(".blog-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
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

        portfolioIsotope.isotope({filter: $(this).data('filter')});
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
 
  

