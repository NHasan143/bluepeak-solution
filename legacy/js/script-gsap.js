(function ($) {
    'use strict';

	/* ================================
       Smooth Scroller And Title Animation Js Start
    ================================ */
    if ($('#smooth-wrapper').length && $('#smooth-content').length) {
        gsap.registerPlugin(ScrollTrigger, ScrollSmoother, SplitText);

        gsap.config({
            nullTargetWarn: false,
        });

        let smoother = ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 2,
            effects: true,
            smoothTouch: 0.1,
            normalizeScroll: false,
            ignoreMobileResize: true,
        });
    }

	 /* ================================
       Text Anim Js Start
    ================================ */

   if ($(".text-anim").length) {
        let staggerAmount = 0.03,
            translateXValue = 20,
            delayValue = 0.1,
            easeType = "power2.out",
            animatedTextElements = document.querySelectorAll(".text-anim");

        animatedTextElements.forEach(element => {
            let animationSplitText = new SplitText(element, { type: "chars, words" });

            ScrollTrigger.create({
                trigger: element,
                start: "top 85%",
                onEnter: () => {
                    gsap.from(animationSplitText.chars, {
                        duration: 1,
                        delay: delayValue,
                        x: translateXValue,
                        autoAlpha: 0,
                        stagger: staggerAmount,
                        ease: easeType,
                    });
                },
            });
        });
    }

	// Panel Pin
	gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.matchMedia({

        // ✅ Only 1200px and up
        "(min-width: 991px)": function () {

            document.querySelectorAll('.tm-panel-pin').forEach((panel) => {
                ScrollTrigger.create({
                    trigger: panel,
                    start: "top 10%",
                    end: "bottom 90%",
                    pin: true,
                    pinSpacing: false,
                    scrub: 1,
                    markers: false,
                    endTrigger: ".tm-panel-pin-area",
                });
            });

        },

        // ✅ 1199px and below → auto destroy
        "(max-width: 991px)": function () {
            ScrollTrigger.getAll().forEach(st => st.kill());
        }

    });

	 gsap.utils.toArray('.tm-gsap-animate-circle').forEach((el, index) => {
        let arspin = gsap.timeline({
            scrollTrigger: {
                trigger: el,
                scrub: 1,
                start: "top 100%",
                end: "top -50%",
                toggleActions: "play none none reverse",
                markers: false
            }
        })

        arspin
        .set(el, {transformOrigin: 'center center'})
        .fromTo(el, { rotate: 0}, { rotate: 180, duration: 2, immediateRender: false})
    });

    //Image Reveal Animation  used
gsap.registerPlugin(ScrollTrigger);

// XL and up ( ≥1200px )
ScrollTrigger.matchMedia({

  "(min-width: 1200px)": function () {

    let imgs_reveal = document.querySelectorAll(".img-reveal");

    imgs_reveal.forEach((container) => {
      let image = container.querySelector("img");

      let tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          toggleActions: "restart none none reset"
        }
      });

      tl.set(container, { autoAlpha: 1 });

      tl.from(container, {
        duration: 1.5,
        xPercent: -100,
        ease: "power2.out"
      });

      tl.from(image, {
        duration: 1.5,
        xPercent: 100,
        scale: 1.3,
        ease: "power2.out"
      }, "-=1.5");
    });
  }

});


        // About shape
	if (document.querySelector(".right-to-left-ani")) { 
		let counterImgTL = gsap.timeline({
		  scrollTrigger: {
		    trigger: ".right-to-left-ani",
		    start: "top 80%",
		    end: "bottom 10%",
		    scrub: 2,  
		    markers: false,
		  }
		});
		counterImgTL.fromTo(".right-to-left-ani", 
		  {
		    x: 200,
		  },  
		  { 
		    x: 0,
		    duration: 1.6
		  } 
		);
	}

    if (document.querySelectorAll(".left-to-right-ani").length) { 
		let elements = document.querySelectorAll(".left-to-right-ani");
		elements.forEach((el) => {
			let tl = gsap.timeline({
				scrollTrigger: {
					trigger: el,
					start: "top 80%",
					end: "bottom 10%",
					scrub: 2,
					markers: false,
				},
			});

			tl.fromTo(el, 
				{ x: -200 },  
				{ x: 0, duration: 1.6 }
			);
		});
	}

	 /* ================================
       Advance Ani Js Start
    ================================ */
	
	gsap.registerPlugin(ScrollTrigger);

    ScrollTrigger.matchMedia({

        // ✅ Desktop only (1200px and up)
        "(min-width: 1200px)": function () {

            const items = document.querySelectorAll(".advance-wrap .advance-item");

            if (items.length < 4) return;

            window.addEventListener("load", () => {

                setTimeout(() => {

                    const advanced = gsap.timeline({
                        scrollTrigger: {
                            trigger: ".advance-wrap",
                            start: "top 60%",
                            toggleActions: "play none none reverse",
                            markers: false,
                        },
                        defaults: {
                            ease: "power1.out",
                            duration: 1,
                        },
                    });

                    advanced
                        .from(items[0], { xPercent: 100, rotate: -8 })
                        .from(items[1], { xPercent: 30, rotate: 4.13 }, "<")
                        .from(items[2], { xPercent: -30, rotate: -6.42 }, "<")
                        .from(items[3], { xPercent: -60, rotate: -12.15 }, "<");

                    ScrollTrigger.refresh();

                }, 300);

            });
        },

        // ✅ 1199px and below → auto kill
        "(max-width: 1199px)": function () {
            ScrollTrigger.getAll().forEach(st => st.kill());
        }

    });
	
	

})(jQuery);

