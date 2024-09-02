document.addEventListener('DOMContentLoaded', function () {
  const header = document.querySelector('.header');
  let lastScrollTop = 0;

  window.addEventListener('scroll', function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
      header.classList.add('is-fixed');
      header.classList.remove('style-scroll');
    } else {
      header.classList.add('style-scroll');
      header.classList.remove('is-fixed');
    }

    if (scrollTop === 0) {
      header.classList.remove('style-scroll');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
});
