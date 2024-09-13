const burger = document.querySelector('.burger-menu');
const headerTop = document.querySelector('.header__top');
const mobMenu = document.querySelector('.mob');
const navLinks = document.querySelectorAll('.nav__link');

const logoFirst = document.querySelector('.logo1');
const logoSecond = document.querySelector('.logo2');

const body = document.querySelector('body');

function updateMobMenuBodyMargin() {
  const header = document.querySelector('.header');
  const mobMenuBody = document.querySelector('.mob__body');

  const height = header.getBoundingClientRect().height;

  mobMenuBody.style.marginTop = `${height}px`;
  mobMenuBody.style.height = `calc(100% - ${height}px)`;
}

function toggleMenu() {
  headerTop.classList.toggle('is-opened');
  burger.classList.toggle('is-opened');
  mobMenu.classList.toggle('is-opened');
  body.classList.toggle('hidden-mob');
  logoFirst.classList.toggle('is-toggle');
  logoSecond.classList.toggle('is-toggle');
}

function closeMenu() {
  headerTop.classList.remove('is-opened');
  burger.classList.remove('is-opened');
  mobMenu.classList.remove('is-opened');
  body.classList.remove('hidden-mob');
  logoFirst.classList.remove('is-toggle');
  logoSecond.classList.remove('is-toggle');
}

export function initMenu() {
  updateMobMenuBodyMargin();
  window.addEventListener('resize', updateMobMenuBodyMargin);

  if (burger) {
    burger.addEventListener('click', toggleMenu);
  }

  if (navLinks) {
    navLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });
  }
}

// ==============================

const subMenu = document.querySelector('.sub-menu');

const navLangs = document.querySelectorAll('.nav__lang');
const navLangLinks = document.querySelectorAll('.nav__lang > li > a');
console.log(navLangLinks);

function toggleLinkLang(e) {
  e.preventDefault();
  console.log('object');
  e.currentTarget.classList.toggle('is-opened');
}

navLangLinks.forEach(link => {
  link.addEventListener('click', toggleLinkLang);
});

// navLangs.forEach(lang => {
//   lang.addEventListener('click', e => {
//     if (e.target !== navLangs) {
//       navLangLinks.forEach(link => {
//         link.classList.remove('is-opened');
//       });
//     }
//   });
// });
