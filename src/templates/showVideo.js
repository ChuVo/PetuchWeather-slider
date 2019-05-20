const elems = document.querySelectorAll('.slider__item');

elems.forEach( (i) => {
  i.addEventListener( 'mouseenter', showVideo );
  i.addEventListener( 'mouseleave', closeVideo );
});

function showVideo(e) {

  let elem = e.target.children[0],
      title = e.target.children[1],
      id = e.target.classList[1].substring(14);

  e.target.style.zIndex="999";
  elem.classList.add('slider__line--video');
  title.classList.add( 'slider__title--color');

  elem.innerHTML = `<video src="media/${id}.mp4" autoplay class="slider__video"></video>`;
}

function closeVideo(e) {

  let elem = e.target.children[0],
      title = e.target.children[1];
  
  elem.classList.remove('slider__line--video');
  e.target.style.zIndex="1";

  setTimeout( () => {
    elem.innerHTML = '';
    title.classList.remove( 'slider__title--color');
  }, 200 );  
}