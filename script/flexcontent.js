const tl = gsap.timeline({defaults: {duration: 1,  ease: 'power1.out'}})


tl.fromTo('.flex-content', {y: -150, opacity: 0}, {y:0, opacity: 1}, '<')
tl.fromTo('.flex-text', {x:30, opacity: 0}, {x:0, opacity: 1}, '<')


