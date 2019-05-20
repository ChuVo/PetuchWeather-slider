(function() {
  const drist = document.querySelector( '.slider__item--drist'),
        event = document.querySelector( '.slider__item--event'),
        eventClone = document.querySelector( '.slider__item--event2'),
        hot = document.querySelector( '.slider__item--hot'),
        may = document.querySelector( '.slider__item--may'),
        rain = document.querySelector( '.slider__item--rain'),
        range = document.querySelector( '#range'),
        tornado = document.querySelector( '.slider__item--torn'),
        slider = document.querySelector( '.slider__container' );

  slider.style.transform = `translateX(${10 - range.value/5}%)`;
  tornado.style.transform = `translateX(${-42}%)`;
  rain.style.transform = `translateX(${-3}%)`;
  may.style.transform = `translateX(${32}%)`;

  range.addEventListener( 'input', function () {

    let index = this.value/5;
    
    slider.style.transform = `translateX(${10 - index}%)`;
    tornado.style.transform = `translateX(${-22 - index}%)`;
    rain.style.transform = `translateX(${-13 + index/2}%)`;
    drist.style.transform = `translateX(${20 - index}%)`;
    event.style.transform = `translateX(${70 - index*3.5}%)`;
    eventClone.style.transform = `translateX(${50 - index*2.5}%)`;
    may.style.transform = `translateX(${42 - index/2}%)`;
    hot.style.transform = `translateX(${-25 - index/2}%)`;

  }, false );

}());