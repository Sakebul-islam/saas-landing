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

	// roket item flying effect
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

	// item rotate and zoom effect
	gsap.set(".feature-wrapper", {rotateX: 30, scale: 0.9});

	const tl = gsap.timeline({
		scrollTrigger: {
			markers: false,
			trigger: ".feature-wrapper",
			start: "top 70%",
			end: "bottom top",
			toggleActions: "play none none reverse",
		},
	});
	tl.to(".feature-wrapper", {
		scale: 1,
		duration: 1.2,
		ease: "power2.inOut",
	}).to(
		".feature-wrapper",
		{
			rotateX: 0,
			duration: 1,
			ease: "power2.inOut",
		},
		"-=0.5"
	);

	// item rotate and zoom effect
	const readymadeImages = document.querySelectorAll(".readymade-page img");

	readymadeImages.forEach((img) => {
		gsap.set(img, {rotateX: 30, scale: 0.8});

		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: img,
				start: "top 70%",
				end: "bottom top",
				toggleActions: "play none none reverse",
			},
		});

		tl.to(img, {
			scale: 1,
			duration: 1,
			ease: "power2.inOut",
		}).to(
			img,
			{
				rotateX: 0,
				duration: 1,
				ease: "power2.inOut",
			},
			"-=0.5"
		);
	});

	// item come from right side
	const left = document.querySelectorAll(".outer-thumbnail, .highlight-4-shape-2");
	if (left.length > 0) {
		left.forEach((element) => {
			gsap.set(element, {x: "100vw", opacity: 0});
			gsap.to(element, {
				x: 0,
				opacity: 1,
				duration: 2,
				ease: "power2.inOut",
				scrollTrigger: {
					markers: false,
					trigger: element,
					start: "top 85%",
					end: "bottom top",
					toggleActions: "play none none reverse",
				},
			});
		});
	}

	// item come from left side
	const elements = document.querySelectorAll(".highlight-2-shape-3, .highlight-1-shape-1, .highlight-4-shape-1");
	if (elements.length > 0) {
		elements.forEach((element) => {
			gsap.set(element, {x: "-100%", opacity: 0});

			gsap.to(element, {
				x: 0,
				opacity: 1,
				duration: 1,
				ease: "power2.inOut",
				scrollTrigger: {
					markers: false,
					trigger: element,
					start: "top 85%",
					end: "bottom top",
					toggleActions: "play none none reverse",
				},
			});
		});
	}

	const zoom = document.querySelectorAll(".highlight-3-shape-1, .highlight.responsive .thumbnail");
	if (zoom.length > 0) {
		zoom.forEach((element) => {
			gsap.set(element, {opacity: 0, scale: 0});
			gsap.to(element, {
				scale: 1,
				opacity: 1,
				duration: 1.5,
				ease: "power2.inOut",
				scrollTrigger: {
					markers: false,
					trigger: element,
					start: "top 85%",
					end: "bottom top",
					toggleActions: "play none none reverse",
				},
			});
		});
	}

	const popUp = document.querySelectorAll(".highlight.support .thumbnail");
	if (popUp.length > 0) {
		popUp.forEach((element) => {
			gsap.set(element, {
				y: "100%",
				opacity: 0,
			});

			gsap.to(element, {
				y: 0,
				opacity: 1,
				duration: 1.5,
				ease: "power2.inOut",
				stagger: 0.5,
				scrollTrigger: {
					markers: false,
					trigger: ".highlight.support",
					start: "top 85%",
					end: "bottom top",
					toggleActions: "play none none reverse",
				},
			});
		});
	}

	const image = document.querySelector(".highlight-5-shape-1");

	// Set initial state
	gsap.set(image, {
		y: "100%", // Start position from bottom
	});

	// Create the scroll-triggered animation
	gsap.to(image, {
		y: 0,
		scale:.8,
		opacity: 1, 
		duration: 1.5,
		ease: "power2.inOut",
		scrollTrigger: {
			markers: false,
			trigger: '.highlight.demo-import',
			start: "top 50%",
			end: "bottom top",
			toggleActions: "play none none reverse",
		},
		onComplete: () => {
			gsap.to(image, {
				scale: 1, 
				duration: 0.2,
				ease: "power1.inOut",
				yoyo: true,
				repeat: 1,
			});
		},
	});
	// GSAP Animation area end here ***
})(jQuery);
