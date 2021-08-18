anime({
    targets: '.nuoli',
    keyframes: [
        {translateY: 50},
        {translateY:0}
    ],
    delay: 1700,
    duration: 1500,
    easing: 'spring(1, 80, 10, 0)',
    loop: true
  });


var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: "#omaesittely",
    triggerHook: "onEnter"
})
.setTween(" #omaesittely",  { scale: 1.2, top: "-200px"})
.addTo(controller);
var scene = new ScrollMagic.Scene({
    triggerElement: "#omaesittely",
    triggerHook: "onLeave"
})
.setTween(" #omaesittely", 0.2, { scale: 1, top: "0px"})
.addTo(controller);




var scene = new ScrollMagic.Scene({
    triggerElement: "#galleria",
    triggerHook: "onEnter"
})
.setTween(" #galleria", 0.4, { scale: 1.2})
.addTo(controller);


var scene = new ScrollMagic.Scene({
    triggerElement: "#galleria",
    triggerHook: "onLeave"
})
.setTween(" #galleria", 0.4, { scale: 1})
.addTo(controller);