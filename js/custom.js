(function ($) {
  'use strict';
  $(document).ready(function () {
    /*=======================
        navbar toggle active
        =========================*/
    $('#toggle-button').click(function () {
      $('.toggle-menus').addClass('toggle-menu-active');
    });
    $('.toggle-close-icon').click(function () {
      $('.toggle-menus').removeClass('toggle-menu-active');
    });

    /*========================
               Slider
       ============================*/
    $('.hero-slider-active').slick({
      slidesToShow: 1,
      infinite: true,
      autoplay: false,
      draggable: true,
      arrows: true,
      slidesToScroll: 1,
      loop: true,
      speed: 1500,
      prevArrow:
        '<button class="slick-arrow btn-prev"><i class="fa-solid fa-arrow-right"></i></button>',
      nextArrow:
        '<button class="slick-arrow btn-next"><i class="fa-solid fa-arrow-left"></i></button>',
      responsive: [
        {
          breakpoint: 767,
          settings: {
            autoplay: true,
          },
        },
      ],
    });
    /*==========================
        Testimonial Slider
        ============================*/
    // if (!$('.testimonial-active-slider').hasClass('slick-initialized')) {
    // if ($('.testimonial-active-slider').hasClass('slick-initialized')) {
    //   $('.testimonial-active-slider').slick('unslick');
    // }
    $('.testimonial-slider').slick({
      slidesToShow: 1,
      infinite: true,
      centerMode: true,
      centerPadding: '0',
      autoplay: false,
      autoplaySpeed: 1500,
      arrows: false,
      dots: true,
      responsive: [
        {
          breakpoint: 768,
        },
      ],
    });

    let totalSlides = $('.testimonial-slider').slick('getSlick').slideCount;
    $('#total-slides').text(totalSlides);

    // Update current slide number after each change
    $('.testimonial-slider').on(
      'afterChange',
      function (event, slick, currentSlide) {
        $('#current-slide').text(currentSlide + 1);
      }
    );
    $('.testimonial-active-slider').slick({
      slidesToShow: 3,
      centerMode: true,
      centerPadding: '0',
      vertical: true,
      verticalSwiping: true,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            vertical: false,
          },
        },
      ],
    });
    //   $('.testimonial-active-slider').on('setPosition', function () {
    //     $(this).slick('setPosition');
    //   });
    //   $('.testimonial-active-slider').slick('slickGoTo', 0);
    // }

    // $('.testimonial-active-slider')
    //   .off('setPosition')
    //   .on('setPosition', function () {
    //     $(this).slick('setPosition');
    //   });

    $('.testimonial-active-slider-nav').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: false,
      autoplay: true,
      autoplaySpeed: 1500,
      asNavFor: '.testimonial-active-slider',
      prevArrow:
        '<button class="slick-arrow btn-prev"><i class="fa-solid fa-caret-right"></i></button>',
      nextArrow:
        '<button class="slick-arrow btn-next"><i class="fa-solid fa-caret-left"></i></button>',
    });

    /*==========================
        Portfolio Slider
        ============================*/
    $('.portfolio-area-active').slick({
      slidesToShow: 3.35,
      slidesToScroll: 1,
      infinite: true,
      autoplay: true,
      speed: 1500,
      draggable: true,
      arrows: false,
      slidesToScroll: 1,
      loop: true,
      dots: false,
      rtl: false,
      responsive: [
        {
          breakpoint: 1400,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 460,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });

    /*==========================
        Blog Details Slider
        ============================*/
    // $('.blog-page-active-slider').slick({
    //   centerMode: true,
    //   centerPadding: '0',
    //   autoplay: true,
    //   autoplaySpeed: 1500,
    //   arrows: false,
    // });

    $('.post-gallery').slick({
      slidesToShow: 1,
      infinite: true,
      autoplay: true,
      draggable: true,
      arrows: true,
      slidesToScroll: 1,
      loop: true,
      dots: false,
      speed: 300,
      rtl: false,
      prevArrow:
        "<button type='button' class='post-gallery-btn prev-btn'><i class='fa fa-arrow-left'></i></button>",
      nextArrow:
        "<button type='button' class='post-gallery-btn next-btn'><i class='fa fa-arrow-right'></i></button>",
    });
    $('.marquee-active').slick({
      slidesToShow: 5,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 0,
      draggable: true,
      arrows: true,
      slidesToScroll: 1,
      loop: true,
      dots: false,
      speed: 5000,
      rtl: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            vertical: false,
          },
        },
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 4,
            vertical: false,
          },
        },
      ],
    });
    $('.marquee-active-two').slick({
      slidesToShow: 2,
      speed: 10000,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: 'linear',
      variableWidth: true,
      infinite: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            vertical: false,
          },
        },
      ],
    });
    $('.marquee-active-three').slick({
      slidesToShow: 2,
      speed: 10000,
      autoplay: true,
      autoplaySpeed: 0,
      cssEase: 'linear',
      variableWidth: true,
      infinite: true,
      arrows: false,
      reverse: true,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            vertical: false,
          },
        },
      ],
    });

    /*============================
        Service Details Accordion
        ============================*/
    document.querySelectorAll('.wuc-accordion-wrapper').forEach(accordion => {
      const title = accordion.querySelector('.wuc-accordion-title');
      const rightArrow = title?.querySelector('.accordin-icon'); // Optional chaining to handle null
      const content = accordion.querySelector('.wuc-accordion-pra');

      if (!title) return; // Skip this iteration if the title is missing

      title.addEventListener('click', () => {
        // Remove 'active' class from all accordions
        document.querySelectorAll('.wuc-accordion-wrapper').forEach(item => {
          if (item !== accordion) {
            item.classList.remove('active');
            const itemContent = item.querySelector('.wuc-accordion-pra');
            const itemRightArrow = item.querySelector('.accordin-icon');
            if (itemContent) itemContent.classList.remove('active'); // Check before removing
            if (itemRightArrow) itemRightArrow.classList.remove('active'); // Check before removing
          }
        });

        // Toggle 'active' class on the clicked accordion
        accordion.classList.toggle('active');
        if (content) content.classList.toggle('active'); // Check before toggling
        if (rightArrow) rightArrow.classList.toggle('active'); // Check before toggling
      });
    });

    document
      .querySelectorAll('.wuc-accordion-wrapper-two')
      .forEach(accordion => {
        const title = accordion.querySelector('.wuc-accordion-title');
        const rightArrow = title?.querySelector('.accordin-icon'); // Optional chaining to handle null
        const content = accordion.querySelector('.wuc-accordion-pra');

        if (!title) return; // Skip this iteration if the title is missing

        title.addEventListener('click', () => {
          // Remove 'active' class from all accordions
          document
            .querySelectorAll('.wuc-accordion-wrapper-two')
            .forEach(item => {
              if (item !== accordion) {
                item.classList.remove('active');
                const itemContent = item.querySelector('.wuc-accordion-pra');
                const itemRightArrow = item.querySelector('.accordin-icon');
                if (itemContent) itemContent.classList.remove('active'); // Check before removing
                if (itemRightArrow) itemRightArrow.classList.remove('active'); // Check before removing
              }
            });

          // Toggle 'active' class on the clicked accordion
          accordion.classList.toggle('active');
          if (content) content.classList.toggle('active'); // Check before toggling
          if (rightArrow) rightArrow.classList.toggle('active'); // Check before toggling
        });
      });

    /*============================
        Magnific Popup
        ============================*/
    $('.video-play').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false,
    });

    /*============================
        Counter Js
        ============================*/
    $('.counter').counterUp({
      delay: 10,
      time: 1000,
    });

    // CountDown
    let countdownSeconds =
      90 * 24 * 3600 + // 90 days in seconds
      50 * 3600 + // 50 hours in seconds
      35 * 60 + // 35 minutes in seconds
      10; // 10 seconds

    // Update countdown display
    function updateCountdownDisplay(totalSeconds) {
      // Convert seconds to weeks, days, hours, minutes, and seconds
      const weeks = Math.floor(totalSeconds / (7 * 24 * 3600));
      totalSeconds %= 7 * 24 * 3600;

      const days = Math.floor(totalSeconds / (24 * 3600));
      totalSeconds %= 24 * 3600;

      const hours = Math.floor(totalSeconds / 3600);
      totalSeconds %= 3600;

      const minutes = Math.floor(totalSeconds / 60);
      const seconds = totalSeconds % 60;

      // Safely update HTML elements
      const weeksEl = document.getElementById('weeks');
      const daysEl = document.getElementById('days');
      const hoursEl = document.getElementById('hours');
      const minutesEl = document.getElementById('minutes');
      const secondsEl = document.getElementById('seconds');

      if (weeksEl) weeksEl.textContent = weeks;
      if (daysEl) daysEl.textContent = days;
      if (hoursEl) hoursEl.textContent = hours;
      if (minutesEl) minutesEl.textContent = minutes;
      if (secondsEl) secondsEl.textContent = seconds;
    }

    // Start countdown
    function startCountdown() {
      updateCountdownDisplay(countdownSeconds);

      const countdownInterval = setInterval(() => {
        countdownSeconds--;

        if (countdownSeconds < 0) {
          clearInterval(countdownInterval); // Stop the countdown when it reaches zero
          console.log('Countdown complete!');
          return;
        }

        updateCountdownDisplay(countdownSeconds);
      }, 1000); // Update every second
    }

    startCountdown();
    /*=======================
        Responsive Dropdown Toggle Active
        =========================*/
    function toggleList(listNumber) {
      var $allLists = $('.hidden-list');
      var $targetList = $('#dropdown-toggle-menu-' + listNumber);

      $allLists.each(function () {
        var $list = $(this);

        if ($list.is($targetList)) {
          if ($list.css('visibility') === 'visible') {
            $list.css({
              visibility: 'hidden',
              opacity: 0,
              height: '0px',
            });
          } else {
            $list.css({
              visibility: 'visible',
              opacity: 1,
              height: $list[0].scrollHeight + 'px',
            });
          }
        } else {
          $list.css({
            visibility: 'hidden',
            opacity: 0,
            height: '0px',
          });
        }
      });
    }
    window.toggleList = toggleList;

    /*
        Window nev scrolled fixed
        ============================*/
    $(window).on('scroll', function () {
      if ($(window).scrollTop() > 50) {
        $('.fixed-menu').addClass('scrolled');
      } else {
        $('.fixed-menu').removeClass('scrolled');
      }
    });

    /*
        Window Load Offcanvas
        ============================*/
    $('.canvas-menu').click(function () {
      $('.off-canvas-menu').addClass('canvas-ative');
      $('.off-canvas-menu-overlay').addClass('canvas-overlay-ative');
    });
    $('.close-icon').click(function () {
      $('.off-canvas-menu').removeClass('canvas-ative');
      $('.off-canvas-menu-overlay').removeClass('canvas-overlay-ative');
    });
    /*
        /*
        Window Load Offcanvas
        ============================*/
    $(document).ready(function () {
      $('.search-btn-active').click(function () {
        $('body').css('overflow', 'hidden');
        $('.search-menu-container').addClass('search-menu-active');
        $('.search-menu-overlay').addClass('search-menu-overlay-active');
      });

      $('.close-btn').click(function () {
        $('body').css('overflow', 'auto');
        $('.search-menu-container').removeClass('search-menu-active');
        $('.search-menu-overlay').removeClass('search-menu-overlay-active');
      });

      window.onclick = function (e) {
        if (e.target.matches('.search-menu-overlay')) {
          $('body').css('overflow', 'auto');
          $('.search-menu-container').removeClass('search-menu-active');
          $('.search-menu-overlay').removeClass('search-menu-overlay-active');
        }
      };
    });

    /*
        Window Load
        ============================*/
    // $(window).on('load', function () {
    //   $('#preloader').fadeOut();
    //   $('body').delay(200).css({ 'overflow-x': 'hidden' });
    // });
    $('#preloader').fadeOut();
    $('body').delay(200).css({ 'overflow-x': 'hidden' });
    /*
        Scroll To Top Js
        ============================*/
    $(function () {
      $('#scrollTop').hide();
      var position = $(window).scrollTop();
      var timer;
      $(window).on('scroll', function () {
        var scrollTop = $(window).scrollTop();
        clearTimeout(timer);
        if (scrollTop > 100) {
          if (scrollTop > position) {
            $('#scrollTop').fadeOut();
          } else {
            $('#scrollTop').fadeIn();
            timer = window.setTimeout(function () {
              $('#scrollTop').fadeOut();
            }, 3000);
          }
          position = scrollTop;
        } else {
          $('#scrollTop').fadeOut();
        }
      });
      $('.scrollup-btn').click(function () {
        $('html, body').animate(
          {
            scrollTop: 0,
          },
          'slow'
        );
        return false;
      });
    });
    /*Blog Hover Card
        ============================*/
    // $('#card-1, #card-3').hover(
    //   function () {
    //     $('#card-2 .visible-card').css({
    //       visibility: 'hidden',
    //       opacity: '0',
    //       'max-height': '0',
    //       transform: 'scaleY(0)',
    //       transition: 'all 0.4s ease 0s',
    //     });
    //     $('#card-2 .blog-area-icon-img').css({
    //       visibility: 'hidden',
    //       opacity: '0',
    //     });
    //   },
    //   function () {
    //     $('#card-2 .visible-card').css({
    //       visibility: 'visible',
    //       opacity: '1',
    //       'max-height': '100px',
    //       transform: 'scaleY(1)',
    //       transition: 'all 0.4s ease 0s',
    //     });
    //     $('#card-2 .blog-area-icon-img').css({
    //       visibility: 'visible',
    //       opacity: '1',
    //       transition: 'all 0.3s ease 0s',
    //     });
    //   }
    // );
    // $('#card-4, #card-6').hover(
    //   function () {
    //     $('#card-5 .visible-card').css({
    //       visibility: 'hidden',
    //       opacity: '0',
    //       'max-height': '0',
    //       transform: 'scaleY(0)',
    //       transition: 'all 0.4s ease 0s',
    //     });
    //     $('#card-5 .blog-area-icon-img').css({
    //       visibility: 'hidden',
    //       opacity: '0',
    //     });
    //   },
    //   function () {
    //     $('#card-5 .visible-card').css({
    //       visibility: 'visible',
    //       opacity: '1',
    //       'max-height': '100px',
    //       transform: 'scaleY(1)',
    //       transition: 'all 0.4s ease 0s',
    //     });
    //     $('#card-5 .blog-area-icon-img').css({
    //       visibility: 'visible',
    //       opacity: '1',
    //       transition: 'all 0.3s ease 0s',
    //     });
    //   }
    // );
    /*pricing Hover Card
        ============================*/
    // $('#cards-1, #cards-3').hover(
    //   function () {
    //     $('#cards-2 .visibles-card').css({
    //       visibility: 'hidden',
    //       opacity: '0',
    //       height: '0',
    //       transform: 'scaleY(0)',
    //     });
    //     $('#cards-2 .card-wrapper-visible').addClass('hidden-before');
    //   },
    //   function () {
    //     $('#cards-2 .visibles-card').css({
    //       visibility: 'visible',
    //       opacity: '1',
    //       height: 'auto',
    //       transform: 'scaleY(1)',
    //       transition: 'all 0.4s ease 0s',
    //     });
    //     $('#cards-2 .card-wrapper-visible').removeClass('hidden-before');
    //   }
    // );

    /*Js-Tilt Animation
        ============================*/
    // $('.tilt-zoom').tilt({
    //   scale: 1.1,
    //   perspective: 1500,
    // });

    // /*Jquery Tilt Js
    //    ============================*/
    // $('.tilt-animate').tilt({
    //   maxTilt: 12,
    //   perspective: 1000,
    // });

    /*
        Window Preload
        ============================*/
    $(window).on('load', function () {
      /*
            Preeloader
            ============================*/
      $('#preloader').fadeOut();
      $('#preloader-status').delay(200).fadeOut('slow');
      $('body').delay(200).css({
        'overflow-x': 'hidden',
      });
    });
  });
})(jQuery);
