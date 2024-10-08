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

const subMenuLinks = document.querySelectorAll('.sub-menu a');
const subMenu = document.querySelectorAll('.sub-menu');

const navLangLinks = document.querySelectorAll('.nav__lang > li > a');

function toggleLinkLang(e) {
  e.preventDefault();
  e.currentTarget.classList.toggle('is-opened');
}

function closeLinkLang() {
  navLangLinks.forEach(link => {
    link.classList.remove('is-opened');
  });
}

navLangLinks.forEach(link => {
  link.addEventListener('click', toggleLinkLang);
});

subMenuLinks.forEach(link => {
  link.addEventListener('click', closeLinkLang);
});

document.addEventListener('click', function (e) {
  const isClickInsideNavLang = [...navLangLinks].some(link =>
    link.contains(e.target)
  );
  const isClickInsideSubMenu = [...subMenu].some(menu =>
    menu.contains(e.target)
  );

  if (!isClickInsideNavLang && !isClickInsideSubMenu) {
    closeLinkLang();
  }
});
