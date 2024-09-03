document.addEventListener('DOMContentLoaded', function () {
  const bannerList = document.querySelector('.banner__list');
  const bannerBody = document.querySelector('.banner__body');

  function updateMarqueeAnimation() {
    const listWidth = bannerList.scrollWidth; // Полная ширина списка
    const bodyWidth = bannerBody.clientWidth; // Ширина видимой области

    const extraSpace = listWidth - bodyWidth;

    const duration = (listWidth + extraSpace) / 200;

    bannerList.style.animationDuration = `${duration}s`;

    bannerList.style.setProperty('--extra-space', `${extraSpace}px`);
  }

  updateMarqueeAnimation();

  window.addEventListener('resize', updateMarqueeAnimation);
});
