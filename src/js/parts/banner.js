document.addEventListener('DOMContentLoaded', function () {
  const bannerCarousell = document.querySelector('.banner__carousell');

  const bannerList = document.querySelector('.banner__list');
  const carousellPartF = document.querySelector('.carousell-part1');
  const carousellPartS = document.querySelector('.carousell-part2');

  function updateMarqueeAnimation() {
    const listWidthPartF = carousellPartF.scrollWidth; // Полная ширина списка
    const listWidthPartS = carousellPartS.scrollWidth; // Полная ширина списка
    console.log(listWidthPartF);
    console.log(listWidthPartS);

    const carousellWidth = bannerCarousell.clientWidth; // Ширина видимой области
    console.log(carousellWidth);

    // const spacePartS = listWidthPartS - carousellWidth;

    // const duration = (listWidth + extraSpace) / 200;

    // bannerList.style.animationDuration = `${duration}s`;

    const moveValueF = listWidthPartF - carousellWidth;
    carousellPartF.style.setProperty('--move1', `${Math.abs(moveValueF)}px`);
    console.log(moveValueF);

    const moveValueS = listWidthPartS - carousellWidth;
    carousellPartS.style.setProperty('--move2', `${Math.abs(moveValueS)}px`);
    console.log(moveValueS);
  }

  updateMarqueeAnimation();

  window.addEventListener('resize', updateMarqueeAnimation);
});
