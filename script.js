var react = document.querySelector("#center");

react.addEventListener ("mousemove", function(details){
    var reactanglelocation = react.getBoundingClientRect();
    var insidereactval = details.clientX - reactanglelocation.left;
    if (insidereactval<reactanglelocation.width/2){
        var redcolor = gsap.utils.mapRange(0, reactanglelocation.width/2, 255, 0, insidereactval);
        gsap.to(react, {
            backgroundColor:`rgb(${redcolor}, 0,0)`,
            ease: Power4,
        })
    }
    else {
        var bluecolor = gsap.utils.mapRange( reactanglelocation.width/2,reactanglelocation.width, 0, 255, insidereactval);
        gsap.to(react, {
            backgroundColor:`rgb(0, 0,${bluecolor})`,
            ease: Power4,
        })
    }
});

react.addEventListener("mouseleave", function(){
    gsap.to (react, {
        backgroundColor: "white",
    })
})
