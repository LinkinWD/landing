AOS.init({
    duration: 1200,
  })


const textWrapper = document.querySelector('.animoi');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline({loop: false})
  .add({
    targets: '.animoi .letter',
    opacity: [0,1],
    easing: "easeInOutQuad",
    duration: 2250,
    delay: (el, i) => 150 * (i+1)
  });



anime({
    targets: '.nuoli',
    keyframes: [
        {translateY: 50},
        {translateY:0}
    ],
    delay: 2500,
    duration: 1000,
    easing: 'spring(1, 80, 10, 0)',
    loop: true
  });


