AOS.init({
    duration: 1200,
  })

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


