gsap.registerPlugin(ScrollTrigger);

        // Your GSAP animation code
        gsap.to(".second h2", {
            x: "-150%", // Use GSAP's x property for translateX
            scrollTrigger: {
                trigger: ".second",
                scroller: "body",
                start: "top 0%",
                end: "top -100%",
                scrub: 3, // Can be set to true for smooth scrubbing
                pin: true // Pin the trigger element (".second" in this case)
            }
        });