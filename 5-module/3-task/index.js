function initCarousel() {
  let sliderWidth = document.querySelector('.carousel__slide').offsetWidth;
  let carousel = document.querySelector('.carousel__inner');
  let rightArrow = document.querySelector('.carousel__arrow_right');
  let leftArrow = document.querySelector('.carousel__arrow_left');

  rightArrow.setAttribute('data-counter', '0');
  leftArrow.style.display = 'none';

  rightArrow.addEventListener('click', () => {
    if (rightArrow.dataset.counter === '0'){
      carousel.style.transform = `translateX(-${sliderWidth}px)`;
      rightArrow.dataset.counter++;
      leftArrow.style.display = '';
    } else if (rightArrow.dataset.counter === '1') {
      carousel.style.transform = `translateX(-${sliderWidth * 2}px)`;
      rightArrow.dataset.counter++;
    } else if (rightArrow.dataset.counter === '2') {
      carousel.style.transform = `translateX(-${sliderWidth * 3}px)`;
      rightArrow.dataset.counter++;
      rightArrow.style.display = 'none';
    } 
  })

  leftArrow.addEventListener('click', () => {
    if (rightArrow.dataset.counter === '1'){
      carousel.style.transform = `translateX(${sliderWidth - sliderWidth}px)`;
      rightArrow.dataset.counter--;
      leftArrow.style.display = 'none';
    } else if (rightArrow.dataset.counter === '2') {
      carousel.style.transform = `translateX(-${sliderWidth}px)`;
      rightArrow.dataset.counter--;
    } else if (rightArrow.dataset.counter === '3') {
      carousel.style.transform = `translateX(-${sliderWidth * 2}px)`;
      rightArrow.dataset.counter--;
      rightArrow.style.display = '';
    }
  })
}
