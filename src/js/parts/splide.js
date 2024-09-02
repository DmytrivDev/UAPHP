import Splide from '@splidejs/splide';
import '@splidejs/splide/css';

// const instSlider = () => {
//   const slider = document.querySelector('.splide-hero');

//   if (slider) {
//     const options = {
//       type: 'fade',
//       arrows: false,
//       autoplay: true,
//       interval: 3000,
//       rewind: true,
//       speed: 2000,
//       pagination: false,
//       width: '33.125rem',
//       height: '37.8125rem',
//       breakpoints: {
//         960: {
//           width: '100%',
//           height: '22.5rem',
//         },
//         500: {
//           width: '100%',
//           height: '12.5rem',
//         },
//       },
//     };

//     new Splide(slider, options).mount();
//   }
// };
// instSlider();

const instHeroSlider = () => {
  const slider = document.querySelector('.hero__splide');

  if (slider) {
    const options = {
      type: 'slider',
      speed: 2000,
      pagination: false,
      updateOnMove: true,
      drag: false,
      swipe: false,
      // autoplay: true,
      // interval: 5000,
      // pauseOnHover: true,
      // pauseOnFocus: true,
    };

    const splide = new Splide(slider, options).mount();

    updateSlideNumber(splide);
    updateArrowsState(splide);

    splide.on('move', () => {
      updateSlideNumber(splide);
      updateArrowsState(splide);
    });
  }

  arrowsClicker();
};
instHeroSlider();

function arrowsClicker() {
  const container = document.querySelector('.hero__splide');

  const arrowsNext = document.querySelector('.arrows__next');
  const arrowsPrev = document.querySelector('.arrows__prev');

  arrowsNext?.addEventListener('click', () => {
    container.querySelector('.splide__arrow--next').click();
  });

  arrowsPrev?.addEventListener('click', () => {
    container.querySelector('.splide__arrow--prev').click();
  });
}

function updateSlideNumber(slide) {
  const currentIndex = slide.index + 1;
  const totalSlides = slide.Components.Slides.getLength();
  const spanElements = document.querySelectorAll('.arrows__number');

  spanElements?.forEach(spanElement => {
    spanElement.textContent = `${currentIndex}/${totalSlides}`;
  });
}

function updateArrowsState(slide) {
  const arrowsNext = document.querySelector('.arrows__next');
  const arrowsPrev = document.querySelector('.arrows__prev');

  if (slide.index === slide.Components.Slides.getLength() - 1) {
    arrowsNext.disabled = true;
    arrowsNext.classList.add('is-disabled');
  } else {
    arrowsNext.disabled = false;
    arrowsNext.classList.remove('is-disabled');
  }

  if (slide.index === 0) {
    arrowsPrev.disabled = true;
    arrowsPrev.classList.add('is-disabled');
  } else {
    arrowsPrev.disabled = false;
    arrowsPrev.classList.remove('is-disabled');
  }
}
