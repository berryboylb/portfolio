gsap.registerPlugin(ScrollTrigger);
const timeline = gsap.timeline({ defaults: {duration: 1 }})
.from('.link', { opacity: 0, stagger: .5})

