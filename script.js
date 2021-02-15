const title = document.getElementById('title')

let tl =gsap.timeline();

tl.from(".title" , {duration:2,x:100})
  .from(".img-side" , {duration:3 , y:200  , ease : "power3.out"},"-=1.9")
  .to(".container p" , {duration:2 , y:-70 ,ease : "power2.out"},"-=1.5")
  .to(".title" , {duration:2,x:50 ,ease: "ease" })

// gsap.from(".title" , {duration:1.5 , scale:8 , ease:"power2.out"})
// gsap.from(".img-side " , {duration:1 , opacity:0 , scale: 2, rotate:12, ease:"sine.out"})

