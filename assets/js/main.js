(function ($) {
  ('use strict');

  $('.header-area nav').meanmenu();

  var fixed_top = $('.header-area');
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 50) {
      fixed_top.addClass('menu-fixed animated fadeInDown');
    } else {
      fixed_top.removeClass('menu-fixed fadeInDown');
    }
  });

  //top
  var testimonial_top_slider = new Swiper('.inner-pages-slider-up', {
    spaceBetween: 20,
    centeredSlides: true,
    speed: 8000,
    autoplay: {
      delay: 3,
      reverseDirection: true,
    },
    loop: true,
    slidesPerView: 'auto',
    allowTouchMove: false,
    disableOnInteraction: true,
  });

  // Bottom
  var testimonial_bottom_slider = new Swiper('.inner-pages-slider-down', {
    spaceBetween: 20,
    centeredSlides: true,
    speed: 8000,
    autoplay: {
      delay: 3,
      reverseDirection: false,
    },
    loop: true,
    slidesPerView: 'auto',
    allowTouchMove: false,
    disableOnInteraction: true,
  });

  // CounterUp Animation;
  function startCounterAnimation() {
    $('.count').each(function () {
      $(this)
        .prop('Counter', 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 2000,
            easing: 'swing',
            step: function (now) {
              now = Number(Math.ceil(now)).toLocaleString('en');
              $(this).text(now);
            },
          }
        );
    });
  }

  // Set up IntersectionObserver
  const observe = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          startCounterAnimation();
          observer.disconnect();
        }
      });
    },
    {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    }
  );

  // Observe the .performance-section
  const performanceSection = document.querySelector('.performance-section');
  if (performanceSection) {
    observe.observe(performanceSection);
  }

  // ---------------------------------------------------------------------

  const options = {
    threshold: 0.5,
  };

  // Intersection Observer start ***
  const observerCallback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        runPieChart();
      }
    });
  };
  const observer = new IntersectionObserver(observerCallback, options);
  // Target element
  const section = document.querySelector('.performance-area');
  // Start observing
  if (section) {
    observer.observe(section);
  }
  // Intersection Observer end ***

  // Progress section end ***

  // WOW Animatin area start here ***
  // Splitting();
  // wow = new WOW({
  //   animateClass: 'animated',
  //   offset: 100,
  // });
  // wow.init();
  // WOW Animatin area start here ***

  // GSAP Animation area start here ***
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, TweenMax, ScrollToPlugin);

  gsap.config({
    nullTargetWarn: false,
  });

  let smoother = ScrollSmoother.create({
    smooth: 2,
    effects: true,
    smoothTouch: 0.1,
    normalizeScroll: false,
    ignoreMobileResize: true,
  });

  function smoothSctoll() {
    $('.smooth a').on('click', function (event) {
      var target = $(this.getAttribute('href'));
      if (target.length) {
        event.preventDefault();
        $('html, body')
          .stop()
          .animate(
            {
              scrollTop: target.offset().top - -60,
            },
            1000
          );
      }
    });
  }
  smoothSctoll();

  if ($('.tp-char-animation').length > 0) {
    // Title Animation
    let char_come = gsap.utils.toArray('.tp-char-animation');
    char_come.forEach((splitTextLine) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: splitTextLine,
          start: 'top 90%',
          end: 'bottom 60%',
          scrub: false,
          markers: false,
          toggleActions: 'play none none none',
        },
      });

      const itemSplitted = new SplitText(splitTextLine, {
        type: 'chars, words',
      });
      gsap.set(splitTextLine, { perspective: 300 });
      itemSplitted.split({ type: 'chars, words' });
      tl.from(itemSplitted.chars, {
        duration: 0.8,
        delay: 0.5,
        x: 100,
        autoAlpha: 0,
        stagger: 0.05,
      });
    });
  }

  if ($('.tp-hero-img-wrap').length > 0) {
    // inner-page-animation
    let t2 = gsap.timeline({
      scrollTrigger: {
        trigger: '.tp-hero-img-wrap',
        start: 'top 100%',
      },
    });
    t2.from('.img3', {
      y: 300,
      opacity: 0,
      duration: 1.3,
    });
    t2.from(
      '.img2',
      {
        x: 200,
        opacity: 0,
        duration: 1,
      },
      '-=0.5'
    );

    t2.from(
      '.img4',
      {
        x: -200,
        opacity: 0,
        duration: 1,
      },
      '-=1'
    );
  }

  if ($('.tp-inner-img-wrap').length > 0) {
    // inner-page-animation
    let t1 = gsap.timeline({
      scrollTrigger: {
        trigger: '.tp-inner-img-wrap',
        start: 'top 100%',
      },
    });
    t1.from('.img8', {
      y: 100,
      opacity: 0,
      duration: 1,
    });
    t1.from(
      '.img7',
      {
        x: 100,
        opacity: 0,
        duration: 1,
      },
      '-=0.5'
    );

    t1.from(
      '.img9',
      {
        x: -100,
        opacity: 0,
        duration: 1,
      },
      '-=1'
    );
    t1.from(
      '.img6',
      {
        x: 100,
        opacity: 0,
        duration: 1,
      },
      '-=0.6'
    );

    t1.from(
      '.img10',
      {
        x: -100,
        opacity: 0,
        duration: 1,
      },
      '-=1'
    );
  }

  // zoom in
  $('.anim-zoomin').each(function () {
    // Add wrap <div>.
    $(this).wrap('<div class="anim-zoomin-wrap"></div>');

    // Add overflow hidden.
    $('.anim-zoomin-wrap').css({ overflow: 'hidden' });

    var $this = $(this);
    var $asiWrap = $this.parents('.anim-zoomin-wrap');

    let tp_ZoomIn = gsap.timeline({
      scrollTrigger: {
        trigger: $asiWrap,
        start: 'top 100%',
        markers: false,
      },
    });
    tp_ZoomIn.from($this, {
      duration: 1.5,
      autoAlpha: 0,
      scale: 1.2,
      ease: Power2.easeOut,
      clearProps: 'all',
    });
  });
  // GSAP Animation area end here ***

  ScrollTrigger.matchMedia({
    '(min-width: 768px)': function () {
      gsap.to('.readymade-pages', {
        scrollTrigger: {
          trigger: '.readymade-section',
          start: 'top -30px',
          end: 'bottom bottom',
          pin: '.readymade-content',
          scrub: true,
          markers: false,
        },
      });
    },
  });


  // gsap.to('.rocket', {
  //   xPercent: 150,
  //   ease: "none",
  //   scrollTrigger: {
  //     trigger: ".rocket",
  //     start: "top center",
  //     end: "bottom top",
  //     scrub: true
  //   }
  // })

  gsap.to(".rocket", {
    scrollTrigger: {
      trigger: ".rocket",
      start: "top center", // Start the animation when the rocket is at the center of the viewport
      // end: "bottom top", // End the animation when the bottom of the viewport hits the top of the rocket
      end: "bottom+=50% top",
      scrub: true, // Smooth scrubbing
      markers:true,
    },
    x: window.innerWidth - 70, // Move to the right edge (adjust 70 based on your rocket's width)
    y: -window.innerHeight + 70, // Move to the top edge (adjust 70 based on your rocket's height)
    ease: "power2.inOut"
  });
})(jQuery);
