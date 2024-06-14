function imgSlider(anything) {
	document.querySelector('.coke-can').src = anything;
};

gsap.from('.navbar', 1, {
	delay: 1,
	x: -40,
	opacity: 0,
	ease: Expo.easeInOut
})

gsap.to(".stripe", 2.4, {
	delay: 0,
	width: "100%",
	ease: Expo.easeInOut
})

gsap.from(".coke", 1, {
	delay: 1.4,
	opacity: 0,
	y: -1000,
	ease: Circ.easeInOut
})

gsap.from(".header", 2, {
	delay: 1.8,
	x: -600,
	ease: Circ.easeInOut
})

gsap.from(".text h2", 1, {
	delay: 3.3,
	opacity: 0,
	y: 40,
	ease: Circ.easeInOut
})

gsap.from(".text .para", 1.2, {
	delay: 3.9,
	opacity: 0,
	y: 40,
	ease: Circ.easeInOut
})

gsap.from(".small-coke", 1, {
	delay: 4.5,
	opacity: 0,
	y: 40,
	ease: Expo.easeInOut
})

gsap.from(".media ul li", 2, {
	delay: 5,
	opacity: 0,
	x: -40,
	ease: Circ.easeInOut
})