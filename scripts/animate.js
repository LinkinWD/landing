

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
    triggerElement: "#mina"
})
.setClassToggle("#omakuva", 'anime')
.addIndicators()
.addTo(controller);
