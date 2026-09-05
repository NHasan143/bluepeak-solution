var THEMEMASCOT = {};
(function ($) {

	"use strict";

	/* ---------------------------------------------------------------------- */
	/* --------------------------- Start Demo Switcher  --------------------- */
	/* ---------------------------------------------------------------------- */
	//   var showSwitcher = false;
	//   var $body = $('body');
	//   var $style_switcher = $('#style-switcher');
	//   if( !$style_switcher.length && showSwitcher ) {
	//       $.ajax({
	//           url: "color-switcher/style-switcher.html",
	//           success: function (data) { $body.append(data); },
	//           dataType: 'html'
	//       });
	//   }
	/* ---------------------------------------------------------------------- */
	/* ----------------------------- En Demo Switcher  ---------------------- */
	/* ---------------------------------------------------------------------- */


	//   THEMEMASCOT.isRTL = {
	//     check: function() {
	//       if( $( "html" ).attr("dir") === "rtl" ) {
	//         return true;
	//       } else {
	//         return false;
	//       }
	//     }
	//   };

	//   THEMEMASCOT.isLTR = {
	//     check: function() {
	//       if( $( "html" ).attr("dir") !== "rtl" ) {
	//         return true;
	//       } else {
	//         return false;
	//       }
	//     }
	//   };


	//Hide Loading Box (Preloader)
	function loader() {
		$(window).on('load', function () {
			// Animate loader off screen
			$(".preloader").addClass('loaded');
			$(".preloader").delay(600).fadeOut();
		});
	}

	loader();

	// Call headerStyle on scroll
	$(window).on('scroll', function () {
		headerStyle();
	});

	// Also call on page load to handle reload
	$(document).ready(function () {
		headerStyle();
	});


	//Update Header Style and Scroll to Top
	function headerStyle() {
		if ($('.main-header').length) {
			var windowpos = $(window).scrollTop();
			var siteHeader = $('.header-style-one');
			var scrollLink = $('.scroll-to-top');
			var sticky_header = $('.main-header .sticky-header');
			if (windowpos > 100) {
				sticky_header.addClass("fixed-header animated slideInDown");
				scrollLink.fadeIn(300);
			} else {
				sticky_header.removeClass("fixed-header animated slideInDown");
				scrollLink.fadeOut(300);
			}
			if (windowpos > 1) {
				siteHeader.addClass("fixed-header");
			} else {
				siteHeader.removeClass("fixed-header");
			}
		}
	}
	headerStyle();

	// Header hide on scroll down, show on scroll up (optional)

	if ($(window).width() > 991) {
		if ($(window).width() > 768) {
			$('.parallaxie').parallaxie({
				speed: 0.55,
				offset: 0,
			});
		}
	}

	// hover animation
	const $items = $(".case-block-four");

	// set second one active by default
	$items.eq(1).addClass("active");

	$items.hover(function () {
	$items.removeClass("active");
	$(this).addClass("active");
	});

	//Submenu Dropdown Toggle
	if ($('.main-header li.dropdown ul').length) {
		$('.main-header .navigation li.dropdown').append('<div class="dropdown-btn"><i class="fa fa-angle-down"></i></div>');
	}

	//Mobile Nav Hide Show
	if ($('.mobile-menu').length) {

		var mobileMenuContent = $('.main-header .main-menu .navigation').html();

		$('.mobile-menu .navigation').append(mobileMenuContent);
		$('.sticky-header .navigation').append(mobileMenuContent);
		$('.mobile-menu .close-btn').on('click', function () {
			$('body').removeClass('mobile-menu-visible');
		});

		//Dropdown Button
		$('.mobile-menu li.dropdown .dropdown-btn').on('click', function () {
			$(this).prev('ul').slideToggle(500);
			$(this).toggleClass('active');
		});

		//Menu Toggle Btn
		$('.mobile-nav-toggler').on('click', function () {
			$('body').addClass('mobile-menu-visible');
		});

		//Menu Toggle Btn
		$('.mobile-menu .menu-backdrop, .mobile-menu .close-btn').on('click', function () {
			$('body').removeClass('mobile-menu-visible');
		});

	}

	//Header Search
	if ($(".search-btn").length) {
		$(".search-btn").on("click", function () {
			$(".main-header").addClass("moblie-search-active");
		});
		$(".close-search, .search-back-drop").on("click", function () {
			$(".main-header").removeClass("moblie-search-active");
		});
	}

	//Fact Counter + Text Count
	if ($(".count-box").length) {
		$(".count-box").appear(
			function () {
				var $t = $(this),
					n = $t.find(".count-text").attr("data-stop"),
					r = parseInt($t.find(".count-text").attr("data-speed"), 10);

				if (!$t.hasClass("counted")) {
					$t.addClass("counted");
					$({
						countNum: $t.find(".count-text").text(),
					}).animate(
						{
							countNum: n,
						},
						{
							duration: r,
							easing: "linear",
							step: function () {
								$t.find(".count-text").text(Math.floor(this.countNum));
							},
							complete: function () {
								$t.find(".count-text").text(this.countNum);
							},
						}
					);
				}
			},
			{ accY: 0 }
		);
	}


	//Price Range Slider
	if ($(".price-range-slider").length) {
		$(".price-range-slider").slider({
			range: true,
			min: 10,
			max: 99,
			values: [10, 60],
			slide: function (event, ui) {
				$("input.property-amount").val(ui.values[0] + " - " + ui.values[1]);
			},
		});

		$("input.property-amount").val(
			$(".price-range-slider").slider("values", 0) +
			" - $" +
			$(".price-range-slider").slider("values", 1)
		);
	}

	 /* ================================
      Hover Active Js Start
    ================================ */



	//product bxslider
	if ($(".product-details .bxslider").length) {
		$(".product-details .bxslider").bxSlider({
			nextSelector: ".product-details #slider-next",
			prevSelector: ".product-details #slider-prev",
			nextText: '<i class="fa fa-angle-right"></i>',
			prevText: '<i class="fa fa-angle-left"></i>',
			mode: "fade",
			auto: "true",
			speed: "700",
			pagerCustom: ".product-details .slider-pager .thumb-box",
		});
	}
	//Tabs Box

	//Quantity box
	$(".quantity-box .add").on("click", function () {
		if ($(this).prev().val() < 999) {
			$(this)
				.prev()
				.val(+$(this).prev().val() + 1);
		}
	});
	$(".quantity-box .sub").on("click", function () {
		if ($(this).next().val() > 1) {
			if ($(this).next().val() > 1)
				$(this)
					.next()
					.val(+$(this).next().val() - 1);
		}
	});

	$(".feature-block-one").on("mouseenter", function () {
		$(".feature-block-one").removeClass("active");
		$(this).addClass("active");
	});

	// Horizontal accordion js area start here ***
	$(".hzAccordion__item").on("click", function () {
		$(this).addClass("active").siblings().removeClass("active");
	});
	// Horizontal accordion js area end here ***


	//Accordion Box
	if ($('.accordion-box').length) {
		$(".accordion-box").on('click', '.acc-btn', function () {

			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');

			if ($(this).hasClass('active') !== true) {
				$(outerBox).find('.accordion .acc-btn').removeClass('active ');
			}

			if ($(this).next('.acc-content').is(':visible')) {
				return false;
			} else {
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);
			}
		});
	}

	//Service Hover image
	document.addEventListener("DOMContentLoaded", function() {
		const serviceLinks = document.querySelectorAll(".service-block-three");
		const imageBoxes = document.querySelectorAll(".service-hover-image .image-box");

		if (!serviceLinks.length || !imageBoxes.length) return;

		// Initialize first item as active
		serviceLinks[0].classList.add("active");

		serviceLinks.forEach(link => {
			link.addEventListener("mouseenter", function() {
			const index = this.getAttribute("data-index");
			imageBoxes.forEach(box => box.classList.remove("active"));
			const activeBox = document.querySelector(`.service-hover-image .image-box[data-index="${index}"]`);
			if (activeBox) {
				activeBox.classList.add("active");
			}

			serviceLinks.forEach(l => l.classList.remove("active"));
			this.classList.add("active");
			});
		});
	});


	// Project Image Slider
	if ($('.feature-slider-home1').length) {
		var swiper = new Swiper(".feature-slider-home1", {
			slidesPerView: 5,
			spaceBetween: 20,
			speed: 600,
			loop: true,
		    pagination: {
		      el: ".swiper-pagination",
		      clickable: true,
		    },
		    breakpoints: {
		      320: { slidesPerView: 1 },
		      520: { slidesPerView: 2 },
		      992: { slidesPerView: 3 },
		      1200: { slidesPerView: 4 },
		      1440: { slidesPerView: 5 }
		    },
		});
	}


	// Project Image Slider
	if ($('.project-image-slider').length) {
		var swiper = new Swiper(".project-image-slider", {
			slidesPerView: 2,
			spaceBetween: 30,
			speed: 600,
			loop: true,
			breakpoints: {
				320: {
					slidesPerView: 1,
				},
				576: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 1,
				},
				992: {
					slidesPerView: 2,
				},
				1023: {
					slidesPerView: 2,
				},
			},
		});
	}


	//Brand-slider
	// if ($('.brand-slider').length > 0) {
	// 	const brandSlider = new Swiper(".brand-slider", {
	// 		spaceBetween: 25,
	// 		speed: 2000,
	// 		loop: true,
	// 		autoplay: {
	// 			delay: 1000,
	// 			disableOnInteraction: false,
	// 		},
	// 		pagination: {
	// 			el: ".dot",
	// 			clickable: true,
	// 		},
	// 		breakpoints: {
			
	// 			1399: {
	// 				slidesPerView: 5,
	// 			},
	// 			1199: {
	// 				slidesPerView: 4,
	// 			},
	// 			991: {
	// 				slidesPerView: 3,
	// 			},
	// 			767: {
	// 				slidesPerView: 3,
	// 			},
	// 			575: {
	// 				slidesPerView: 2,
	// 			},
	// 			0: {
	// 				slidesPerView: 1.8,
	// 			},
	// 		},
	// 	});
	// }

	if ($('.brand-slider2').length > 0) {
		const brandSlider2 = new Swiper(".brand-slider2", {
			spaceBetween: 25,
			speed: 2000,
			loop: true,
			autoplay: {
				delay: 1000,
				disableOnInteraction: false,
			},
			pagination: {
				el: ".dot",
				clickable: true,
			},
			breakpoints: {
			
				1399: {
					slidesPerView: 5,
				},
				1199: {
					slidesPerView: 4,
				},
				991: {
					slidesPerView: 3,
				},
				767: {
					slidesPerView: 2,
				},
				0: {
					slidesPerView: 1.4,
				},
			},
		});
	}

	if ($('.clients-swiper').length) {
		var swiper = new Swiper(".clients-swiper", {
			slidesPerView: 5,
			spaceBetween: 100,
			speed: 500,
			loop: true,
			autoplay: true,
			breakpoints: {
				0: {
					slidesPerView: 1,
				},
				576: {
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 3,
				},
				991: {
					slidesPerView: 3,
				},
				1200: {
					slidesPerView: 5,
				}
			},
		});
	}

	//testimonial-slider
	if ($('.testimonial-slider').length > 0) {
		const testimonialSlider = new Swiper(".testimonial-slider", {
			loop: true,
			autoplay: true,
			spaceBetween: 30,
			speed: 2000,
			autoplay: {
				delay: 1000,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: ".array-prev",
				prevEl: ".array-next",
			},
		});
	}

	 if ($('.testimonial-slider-4').length > 0) {
		const testimonialSlider4 = new Swiper(".testimonial-slider-4", {
			spaceBetween: 30,
			speed: 1500,
			loop: true,
			
			autoplay: {
				delay: 2000,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: ".array-prev",
				prevEl: ".array-next",
			},
		});
	}

	/*------------------------------------------
	= inhover active
	-------------------------------------------*/
	$(".ks-mouseenter").on('mouseenter', function () {
		$(".ks-mouseenter").removeClass("active");
		$(this).addClass("active");
	});

	$(".ks-mouseenter2").on('mouseenter', function () {
		$(".ks-mouseenter2").removeClass("active");
		$(this).addClass("active");
	});

	
	if ($('.service-block-slider-3').length > 0) {
		const serviceBlockSlider3 = new Swiper(".service-block-slider-3", {
			spaceBetween: 25,
			speed: 2000,
			loop: true,
			autoplay: {
				delay: 1000,
				disableOnInteraction: false,
			},
			pagination: {
				el: ".dot",
				clickable: true,
			},
			breakpoints: {
				1399: {
					slidesPerView: 4,
				},
				1199: {
					slidesPerView: 3.4,
				},
				991: {
					slidesPerView: 2,
				},
				767: {
					slidesPerView: 2,
				},
				575: {
					slidesPerView: 1.3,
				},
				0: {
					slidesPerView: 1,
				},
			},
		});
	}

	/* ================================
        Mouse Cursor Animation Js Start
    ================================ */

    if ($(".mouseCursor").length > 0) {
        function itCursor() {
            var myCursor = jQuery(".mouseCursor");
            if (myCursor.length) {
                if ($("body")) {
                    const e = document.querySelector(".cursor-inner"),
                        t = document.querySelector(".cursor-outer");
                    let n, i = 0, o = !1;
                    window.onmousemove = function(s) {
                        if (!o) {
                            t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)";
                        }
                        e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)";
                        n = s.clientY;
                        i = s.clientX;
                    };
                    $("body").on("mouseenter", "button, a, .cursor-pointer", function() {
                        e.classList.add("cursor-hover");
                        t.classList.add("cursor-hover");
                    });
                    $("body").on("mouseleave", "button, a, .cursor-pointer", function() {
                        if (!($(this).is("a", "button") && $(this).closest(".cursor-pointer").length)) {
                            e.classList.remove("cursor-hover");
                            t.classList.remove("cursor-hover");
                        }
                    });
                    e.style.visibility = "visible";
                    t.style.visibility = "visible";
                }
            }
        }
        itCursor();
    }

    /* ================================
        Back To Top Button Js Start
    ================================ */
    $(window).on('scroll', function () {
    if (
        $(this).scrollTop() + $(this).height() >= $(document).height() - 10
    ) {
        $('#back-top').addClass('show');
    } else {
        $('#back-top').removeClass('show');
    }
});

$(document).on('click', '#back-top', function (e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 800);
});


	 /* ================================
      Hover Active Js Start
    ================================ */

    $(".award-list-items-items, .service-list-style1, .service-items, .work-block-active, .feature-signle-box-area, .feature-card").hover(
		// Function to run when the mouse enters the element
		function () {
			// Remove the "active" class from all elements
			$(".award-list-items-items, .service-list-style1, .service-items, .work-block-active, .feature-signle-box-area, .feature-card ").removeClass("active");
			// Add the "active" class to the currently hovered element
			$(this).addClass("active");
		}
	);

	 //>> Destination Hover Js Start <<//
	const getSlide = $('project-block-wrapper-4, .project-block-box-4').length - 1;
	const slideCal = 100 / getSlide + '%';
	
	$('.project-block-wrapper-4').css({
		"width": slideCal
	});
	
	$(document).on('mouseenter', '.project-block-box-4', function() {
		$('.project-block-box-4').removeClass('active');
		$(this).addClass('active');
	});  

	//>> Service Items Hover Start <<//
    const serviceItems = document.querySelectorAll(".service-items");

	function followImageCursor(event, serviceItems) {
		const contentBox = serviceItems.getBoundingClientRect();
		const dx = event.clientX - contentBox.left;
		const dy = event.clientY - contentBox.top;

		const targetImage = serviceItems.querySelector('.hover-image'); // Use a class instead of children[2]

		if (targetImage) {
			targetImage.style.transform = `translate(${dx}px, ${dy}px) rotate(15deg)`;
		}
	}

	// Optional: Throttle function to improve performance
	function throttle(fn, limit) {
		let inThrottle;
		return function (...args) {
			if (!inThrottle) {
				fn.apply(this, args);
				inThrottle = true;
				setTimeout(() => (inThrottle = false), limit);
			}
		};
	}

	serviceItems.forEach((item) => {
			item.addEventListener("mousemove", throttle((event) => {
				followImageCursor(event, item);
			}, 16)); // ~60fps (1000ms/60 = ~16ms)
	});

	

	 // Text on Windows  Animation Start
    // Animation-1
    let tHero = gsap.timeline();

    let heading_title = new SplitText(".sec-title-1", { type: "chars" });
    let heading_char = heading_title.chars;

    tHero.from(heading_char, {
      rotate: 20,
      ease: "back.out",
      opacity: 0,
      duration: 2,
      stagger: 0.1,
    });

	//>> Service Items Hover Start <<//
	 const serviceListStyle1 = document.querySelectorAll(".service-list-style1");

	function followImageCursor(event, serviceListStyle1) {
		const contentBox = serviceListStyle1.getBoundingClientRect();
		const dx = event.clientX - contentBox.left;
		const dy = event.clientY - contentBox.top;

		const targetImage = serviceListStyle1.querySelector('.hover-image'); // Use a class instead of children[2]

		if (targetImage) {
			targetImage.style.transform = `translate(${dx}px, ${dy}px) rotate(15deg)`;
		}
	}

	// Optional: Throttle function to improve performance
	function throttle(fn, limit) {
		let inThrottle;
		return function (...args) {
			if (!inThrottle) {
				fn.apply(this, args);
				inThrottle = true;
				setTimeout(() => (inThrottle = false), limit);
			}
		};
	}

	serviceListStyle1.forEach((item) => {
			item.addEventListener("mousemove", throttle((event) => {
				followImageCursor(event, item);
			}, 16)); // ~60fps (1000ms/60 = ~16ms)
	});

	//>> Award List Items Hover Start <<//
	const awardListItems = document.querySelectorAll(".award-list-items-items");

	function followImageCursor(event, awardListItem) {
		const contentBox = awardListItem.getBoundingClientRect();
		const dx = event.clientX - contentBox.left;
		const dy = event.clientY - contentBox.top;

		const targetImage = awardListItem.querySelector('.hover-image'); // Use a class instead of children[2]
		if (targetImage) {
			targetImage.style.transform = `translate(${dx}px, ${dy}px) rotate(15deg)`;
		}
	}

	// Optional: Throttle function to improve performance
	function throttle(fn, limit) {
		let inThrottle;
		return function (...args) {
			if (!inThrottle) {
				fn.apply(this, args);
				inThrottle = true;
				setTimeout(() => (inThrottle = false), limit);
			}
		};
	}

	awardListItems.forEach((item) => {
		item.addEventListener(
			"mousemove",
			throttle((event) => {
				followImageCursor(event, item);
			}, 16) // ~60fps (1000ms/60 = ~16ms)
		);
	});
	//>> Award List Items Hover End <<//


	 /* ================================
      Hover Active Js Start
    ================================ */

    $(".counter-card-item").hover(
		// Function to run when the mouse enters the element
		function () {
			// Remove the "active" class from all elements
			$(".counter-card-item").removeClass("active");
			// Add the "active" class to the currently hovered element
			$(this).addClass("active");
		}
	);


	//MixItup Gallery
	if ($(".filter-list").length) {
		$(".filter-list").mixItUp({});
	}

	//Jquery Knob animation  // Pie Chart Animation
	if ($(".dial").length) {
		$(".dial").appear(
			function () {
				var elm = $(this);
				var color = elm.attr("data-fgColor");
				var perc = elm.attr("value");

				elm.knob({
					value: 0,
					min: 0,
					max: 100,
					skin: "tron",
					readOnly: true,
					thickness: 0.15,
					dynamicDraw: true,
					displayInput: false,
				});
				$({ value: 0 }).animate(
					{ value: perc },
					{
						duration: 2000,
						easing: "swing",
						progress: function () {
							elm.val(Math.ceil(this.value)).trigger("change");
						},
					}
				);
				//circular progress bar color
				$(this).append(function () {
					// elm.parent().parent().find('.circular-bar-content').css('color',color);
					//elm.parent().parent().find('.circular-bar-content .txt').text(perc);
				});
			},
			{ accY: 20 }
		);
	}

	//Accordion Box
	if ($('.accordion-box').length) {
		$(".accordion-box").on('click', '.acc-btn', function () {

			var outerBox = $(this).parents('.accordion-box');
			var target = $(this).parents('.accordion');

			if ($(this).hasClass('active') !== true) {
				$(outerBox).find('.accordion .acc-btn').removeClass('active ');
			}

			if ($(this).next('.acc-content').is(':visible')) {
				return false;
			} else {
				$(this).addClass('active');
				$(outerBox).children('.accordion').removeClass('active-block');
				$(outerBox).find('.accordion').children('.acc-content').slideUp(300);
				target.addClass('active-block');
				$(this).next('.acc-content').slideDown(300);
			}
		});
	}

	if ($(".tabs-box").length) {
		$(".tabs-box .tab-buttons .tab-btn").on("click", function (e) {
			e.preventDefault();
			var target = $($(this).attr("data-tab"));

			if ($(target).is(":visible")) {
				return false;
			} else {
				target
					.parents(".tabs-box")
					.find(".tab-buttons")
					.find(".tab-btn")
					.removeClass("active-btn");
				$(this).addClass("active-btn");
				target
					.parents(".tabs-box")
					.find(".tabs-content")
					.find(".tab")
					.fadeOut(0);
				target
					.parents(".tabs-box")
					.find(".tabs-content")
					.find(".tab")
					.removeClass("active-tab animated fadeIn");
				$(target).fadeIn(300);
				$(target).addClass("active-tab animated fadeIn");
			}
		});
	}

	$(document).ready(function () {
		$("select").niceSelect();
	});

	//>> Video Popup Start <<//
	$(".img-popup").magnificPopup({
		type: "image",
		gallery: {
			enabled: true,
		},
	});

	$('.video-popup').magnificPopup({
		type: 'iframe',
		callbacks: {
		}
	});

	// count Bar
	if ($(".count-bar").length) {
		$(".count-bar").appear(
			function () {
				var el = $(this);
				var percent = el.data("percent");
				$(el).css("width", percent).addClass("counted");
			},
			{
				accY: -50,
			}
		);
	}

	// Elements Animation
	if ($('.wow').length) {
		var wow = new WOW(
			{
				boxClass: 'wow',      // animated element css class (default is wow)
				animateClass: 'animated', // animation css class (default is animated)
				offset: 0,          // distance to the element when triggering the animation (default is 0)
				mobile: false,       // trigger animations on mobile devices (default is true)
				live: true       // act on asynchronously loaded content (default is true)
			}
		);
		wow.init();
	}


	// Gsap Animation Code


	


	(function () {
		function animateProgress(id, valueId, endValue, speed) {
			const progress = document.getElementById(id);
			const valueContainer = document.getElementById(valueId);

			if (!progress || !valueContainer) return;

			let currentValue = 0;

			function updateProgress() {
				currentValue++;
				if (currentValue > endValue) {
					currentValue = endValue;
				}
				valueContainer.textContent = `${currentValue}%`;
				progress.style.background = `conic-gradient(
					#C8F169 ${currentValue * 3.6}deg,
					#D4D4D4 ${currentValue * 3.6}deg
				)`;

				if (currentValue < endValue) {
					setTimeout(() => requestAnimationFrame(updateProgress), speed);
				}
			}

			requestAnimationFrame(updateProgress);
		}

		// Initialize progress bars only if their elements exist
		document.addEventListener("DOMContentLoaded", function () {
			if (document.getElementById('progress1') && document.getElementById('value1')) {
				animateProgress('progress1', 'value1', 95, 20);
			}
			if (document.getElementById('progress2') && document.getElementById('value2')) {
				animateProgress('progress2', 'value2', 85, 20);
			}
			if (document.getElementById('progress3') && document.getElementById('value3')) {
				animateProgress('progress3', 'value3', 85, 20);
			}
			if (document.getElementById('progress4') && document.getElementById('value4')) {
				animateProgress('progress4', 'value4', 85, 20);
			}
			if (document.getElementById('progress5') && document.getElementById('value5')) {
				animateProgress('progress5', 'value5', 85, 20);
			}
			if (document.getElementById('progress6') && document.getElementById('value6')) {
				animateProgress('progress6', 'value6', 85, 20);
			}
			if (document.getElementById('progress7') && document.getElementById('value7')) {
				animateProgress('progress7', 'value7', 85, 20);
			}
			if (document.getElementById('progress8') && document.getElementById('value8')) {
				animateProgress('progress8', 'value8', 85, 20);
			}
		});


	})();

	



})(window.jQuery);
