// this timelien for the nav
function navani(){
const navtext = new SplitType('#navtext', { types: 'words, chars' })
const navtl = gsap.timeline()
navtl.from('.char',{
    y:20,
    opacity:0,
    duration:0.2,
    stagger:0.2,
    ease: "expoScale(0.5,7,none)",
})
navtl.from('#menubtn',{
    y:20,
    opacity:0,
    duration:0.6,
    stagger:0.2,
    transform:" rotate(15deg)",
    ease: "expoScale(0.5,7,none)",
})
navtl.from('#navli li',{
    y:20,
    opacity:0,
    duration:0.6,
    stagger:0.2,
    transform:" rotate(15deg)",
    ease: "expoScale(0.5,7,none)",
})

}


// this timeline for header
function headerani() {   
const text = new SplitType('#headani', { types: 'words' })
const headertl = gsap.timeline()
headertl.from('#avwork',{
    y:20,
    opacity:0,
    duration:0.5,
    stagger:0.1,
    transform:" rotate(10deg)",
    ease: "expoScale(0.5,7,none)",

})
headertl.from('.word',{
    y:20,
    opacity:0,
    duration:1.2,
    stagger:0.2,
    transform:" rotate(6deg)",
    ease: "expoScale(0.5,7,none)",
})
headertl.from('#headerimg',{
    opacity:0,
    duration:0.2,
    stagger:0.1,
    transform:" rotate(6deg)"
})

}


// this animation for aboutme page 
function aboutme(){
const text1 = new SplitType('#pani', { types: 'words' })
const abouttl = gsap.timeline()
abouttl.from('.word',{
    y:10,
    opacity:0,
    duration:0.2,
    stagger:0.1,
    transform:" rotate(5deg)",
    ease: "expoScale(0.5,7,none)",
})
// abouttl.from('#secp',{
//     y:10,
//     opacity:0,
//     duration:0.2,
//     ease: "expoScale(0.5,7,none)",
// })
// abouttl.from('#chatbtn',{
//     y:10,
//     opacity:0,
//     duration:1,
//     stagger:0.1,2
//     transform:" rotate(5deg)",
//     ease: "expoScale(0.5,7,none)",
// })
// abouttl.from('#aboutnavli li',{
//     y:20,
//     opacity:0,
//     duration:0.6,
//     stagger:0.2,
//     transform:" rotate(15deg)",
//     ease: "expoScale(0.5,7,none)",
// })
}
aboutme()