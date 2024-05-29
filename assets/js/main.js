(function ($) {
	("use strict");

	$(".header-area nav").meanmenu();

	var fixed_top = $(".header-area");
	$(window).on("scroll", function () {
		if ($(this).scrollTop() > 50) {
			fixed_top.addClass("menu-fixed animated fadeInDown");
		} else {
			fixed_top.removeClass("menu-fixed fadeInDown");
		}
	});

	//top
	var testimonial_top_slider = new Swiper(".inner-pages-slider-up", {
		spaceBetween: 20,
		centeredSlides: true,
		speed: 8000,
		autoplay: {
			delay: 3,
			reverseDirection: true,
		},
		loop: true,
		slidesPerView: "auto",
		allowTouchMove: false,
		disableOnInteraction: true,
	});

	// Bottom
	var testimonial_bottom_slider = new Swiper(".inner-pages-slider-down", {
		spaceBetween: 20,
		centeredSlides: true,
		speed: 8000,
		autoplay: {
			delay: 3,
			reverseDirection: false,
		},
		loop: true,
		slidesPerView: "auto",
		allowTouchMove: false,
		disableOnInteraction: true,
	});

	// CounterUp Animation;
	function startCounterAnimation() {
		$(".count").each(function () {
			$(this)
				.prop("Counter", 0)
				.animate(
					{
						Counter: $(this).text(),
					},
					{
						duration: 2000,
						easing: "swing",
						step: function (now) {
							now = Number(Math.ceil(now)).toLocaleString("en");
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
			rootMargin: "0px",
			threshold: 0.1,
		}
	);

	// Observe the .performance-section
	const performanceSection = document.querySelector(".performance-section");
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
	const section = document.querySelector(".performance-area");
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
		$(".smooth a").on("click", function (event) {
			var target = $(this.getAttribute("href"));
			if (target.length) {
				event.preventDefault();
				$("html, body")
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

	// GSAP Animation area end here ***

	ScrollTrigger.matchMedia({
		"(min-width: 768px)": function () {
			gsap.to(".readymade-pages", {
				scrollTrigger: {
					trigger: ".readymade-section",
					start: "top -30px",
					end: "bottom bottom",
					pin: ".readymade-content",
					scrub: true,
					markers: false,
				},
			});
		},
	});

	if ($(".tp-char-animation").length > 0) {
		// Title Animation
		let char_come = gsap.utils.toArray(".tp-char-animation");
		char_come.forEach((splitTextLine) => {
			const tl = gsap.timeline({
				scrollTrigger: {
					trigger: splitTextLine,
					start: "top 90%",
					end: "bottom 60%",
					scrub: false,
					markers: false,
					toggleActions: "play none none none",
				},
			});

			const itemSplitted = new SplitText(splitTextLine, {
				type: "chars, words",
			});
			gsap.set(splitTextLine, {perspective: 300});
			itemSplitted.split({type: "chars, words"});
			tl.from(itemSplitted.chars, {
				duration: 0.8,
				delay: 0.5,
				x: 100,
				autoAlpha: 0,
				stagger: 0.05,
			});
		});
	}

	gsap.to(".rocket", {
		scrollTrigger: {
			trigger: ".performance-section",
			start: "top+=30% center",
			end: "bottom+=50% top",
			scrub: true,
			markers: false,
		},
		duration: 1,
		x: innerWidth * 1,
		y: -innerWidth * 1,
		ease: "none",
	});

	// Animate the rotation on scroll
  gsap.set(".feature-wrapper", { rotateX:30, scale: 0.90 });

  // Create a timeline for the animations
  const tl = gsap.timeline({
    scrollTrigger: {
      markers: false,
      trigger: ".feature-wrapper",
      start: "top 70%", 
      end: "bottom top",
      toggleActions: "play none none reverse",
    }
  });
  
  // Add the scale animation with a delay
  tl.to(".feature-wrapper", {
    scale: 1,
    duration: 1.5,
    ease: "power2.inOut",
  })
  .to(".feature-wrapper", {
    rotateX: 0,
    duration: 1,
    ease: "power2.inOut",
  }, "-=0.5");








  // Select all .readymade-page img elements
  const readymadeImages = document.querySelectorAll('.readymade-page img');

  readymadeImages.forEach((img) => {

    gsap.set(img, { rotateX: 30, scale: 0.8 });


    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: img,
        start: "top 70%", 
        end: "bottom top",
        toggleActions: "play none none reverse",
      }
    });


    tl.to(img, {
      scale: 1,
      duration: 1,
      ease: "power2.inOut",
    })
    .to(img, {
      rotateX: 0,
      duration: 1,
      ease: "power2.inOut",
    }, "-=0.5"); 
  });
})(jQuery);
