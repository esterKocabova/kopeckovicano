
const tl = gsap.timeline({defaults: {duration: 1,  ease: 'power1.out'}})


tl.fromTo('.inicialy', {y: -150, opacity: 0}, {y:0, opacity: 1}, '<')
tl.fromTo('.jmena', {x:30, opacity: 0}, {x:0, opacity: 1}, '<')



