const range = document.querySelector( '#range'),
      tornado = document.querySelector( '.slider__item--torn'),
      rain = document.querySelector( '.slider__item--rain'),
      slider = document.querySelector( '.slider__container' );

slider.style.transform = `translateX(${10 - range.value/5}%)`;
tornado.style.transform = `translateX(${-52}%)`;
rain.style.transform = `translateX(${-13}%)`;

range.addEventListener( 'input', function () {

  let index = this.value/5;
  
  slider.style.transform = `translateX(${index}%)`;
  tornado.style.transform = `translateX(${-42 - index}%)`;
  rain.style.transform = `translateX(${-13 - index}%)`;


}, false );





