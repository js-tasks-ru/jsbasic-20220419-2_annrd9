import createElement from '../../assets/lib/create-element.js';

export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.leftPercents = 100 / (steps - 1) * value;
    this.steps = steps;
    this.sliderSegment = steps - 1;
    this.createStepSlider();
    this.clickEvent() 
    this.changeStep(value);
  }

    createStepSlider() {
        this.elem = createElement(`
            <div class="slider">
                <div class="slider__thumb" style="left: ${this.leftPercents}%;">
                <span class="slider__value">${this.value}</span>
                </div>
                <div class="slider__progress" style="width: ${this.leftPercents}%;"></div>
                <div class="slider__steps">
                ${'<span></span>'.repeat(this.steps)}
                </div>
            </div>
        `); 

  }

    changeStep(value) {
        this.value = value;

        let leftPercents = (value / this.sliderSegment) * 100;

        this.elem.querySelector('.slider__thumb').style.left = `${leftPercents}%`;
        this.elem.querySelector('.slider__progress').style.width = `${leftPercents}%`;

        this.elem.querySelector('.slider__value').innerHTML = value;

        if (this.elem.querySelector('.slider__step-active')) {
        this.elem.querySelector('.slider__step-active').classList.remove('slider__step-active');
        }

        this.elem.querySelector('.slider__steps').children[this.value].classList.add('slider__step-active');
    }
    
    clickEvent() {
        this.elem.addEventListener('click', (event) => {
            let newLeft = (event.clientX - this.elem.getBoundingClientRect().left) / this.elem.offsetWidth;

            this.changeStep(Math.round(this.sliderSegment * newLeft));

            this.elem.dispatchEvent(
            new CustomEvent('slider-change', {
                detail: this.value,
                bubbles: true
                })
            );
        })
    }
}