// IIFE with jQuery Wrapper
(function ($) {
  'use strict';



  //Hero Slider
  $('.hero-slider').slick({
    autoplay: true,
    infinite: true,
    arrows: true,
    prevArrow: '<button type=\'button\' class=\'prevArrow\'></button>',
    nextArrow: '<button type=\'button\' class=\'nextArrow\'></button>',
    dots: false,
    autoplaySpeed: 7000,
    pauseOnFocus: false,
    pauseOnHover: false
  });
  $('.hero-slider').slickAnimation();


  // testimonial slider
  $('.testimonial-slider').slick({
    infinite: true,
    dots: true,
    arrows: false,
    autoplay: true,
    fade: true
  });


  $('.blog-slider').slick({
    arrows: false,
    dots: true,
    autoplay: true
  });



  /*
   *----------------------------------
   * Document Ready
   *----------------------------------
   */
  $(document).ready(function () {

    // Add Class in scrolling
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();
      //console.log(scroll);
      if (scroll > 200) {
        //console.log('a');
        $('.navigation').addClass('sticky-header');
      } else {
        //console.log('a');
        $('.navigation').removeClass('sticky-header');
      }
    });


    // mouse hover effect
    // filter
    $(document).ready(function () {
      //Active changer
      $('.filter').on('click', function () {
        $('.filter').removeClass('active');
        $(this).addClass('active');


        let filterCategory = this.getAttribute('data-filter');
        let hide = document.querySelectorAll(`.filtr-container .filtr-item:not([data-category='${filterCategory}'])`);
        let show = document.querySelectorAll(`.filtr-container [data-category='${filterCategory}']`);

        if (filterCategory == 'all') {
          hide = [];
          show = document.querySelectorAll('.filtr-item');
        }

        hide.forEach(portfolioItem => {
          portfolioItem.classList.add('hide');
          portfolioItem.classList.remove('show');
        });

        show.forEach(portfolioItem => {
          portfolioItem.classList.remove('hide');
          portfolioItem.classList.add('show'); 
        });
      });
    });

    /* Popup Video */
    $('#th-video').magnificPopup({
      items: [{
        src: 'video/ocean.mp4',
        type: 'iframe' // this overrides default type
      }],
      gallery: {
        enabled: true
      },
      type: 'image' // this is default type
    });

    /* Popup Image */
    $('.image-link').magnificPopup({
      type: 'image'
    });

    // DOM Content Load Event Actions;
    $(window).load(function () {
      $('div.loading').remove();
      $('body').removeClass('loading');
    });

  }); // DOM Ready

}(jQuery)); // IIFE