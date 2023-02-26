window.addEventListener('load', () => {

   const btnLeft = document.querySelector('.btn-left'),
      btnRight = document.querySelector('.btn-right'),
      slider = document.querySelector('.carousel__slide'),
      images = document.querySelectorAll('.carousel__slide img');



   let counter = 0,
      stepSize = images[0].clientWidth;


   btnRight.addEventListener('click', () => {
      counter++;
      if (counter >= images.length) {
         counter = 0;
      }
      slider.style.transform = `translateX(${-stepSize * counter}px)`;
   });
   btnLeft.addEventListener('click', () => {
      counter--;

      if (counter < 0) {
         counter = images.length - 1;
      }
      slider.style.transform = `translateX(${-stepSize * counter}px)`;
   });
});