const scroll = new SmoothScroll('a[href*="#"]', {
    // speed: 800
    ignore: '[data-scroll-ignore]', 
	header: null, 
	topOnEmptyHash: true, 

	// Speed & Duration
	speed: 800, 
	speedAsDuration: false, 
	durationMax: null, 
	durationMin: null, 
	clip: true, 
}, {easing: 'easeInOutQuint'} );