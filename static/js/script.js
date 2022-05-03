function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filtr-item");
  if (c == "all") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}
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