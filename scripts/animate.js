

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: "#omaesittely",
    triggerHook: "onEnter"
})
.setTween(" #omaesittely", 0.2, { scale: 1.2, top: "-200px"})
.addTo(controller);
var scene = new ScrollMagic.Scene({
    triggerElement: "#omaesittely",
    triggerHook: "onLeave"
})
.setTween(" #omaesittely", 0.2, { scale: 1, top: "0px"})
.addTo(controller);