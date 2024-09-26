import NiceSelect from 'nice-select2';
import IMask from 'imask';

const signup = document.querySelector('.signup');
const signupContainer = document.querySelector('.signup__container');
const signupClose = document.querySelector('.signup__close');

const activitieAccept = document.querySelector('.activitie__accept');
const body = document.body;
const header = document.querySelector('.header');

const signupSelect = document.querySelector('.signup__select');

if (signupSelect) {
  new NiceSelect(signupSelect, {
    searchable: true,
  });
}

const textareas = document.querySelectorAll('textarea.signup__input');

if (textareas) {
  textareas.forEach(textarea => {
    textarea.setAttribute('maxlength', '100');
    textarea.addEventListener('input', autoResize);
    autoResize({ target: textarea });
  });

  window.addEventListener('resize', () => {
    textareas.forEach(textarea => {
      autoResize({ target: textarea });
    });
  });

  function autoResize(event) {
    const textarea = event.target;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  }
}

if (signup) {
  function openModal() {
    const scrollBarWidth =
      window.innerWidth - document.documentElement.clientWidth;
    document.body.style.paddingRight = `${scrollBarWidth}px`;
    header.style.paddingRight = `${scrollBarWidth}px`;

    signup.classList.add('is-visible');
    body.classList.add('overhide');
  }

  function closeModal() {
    document.body.style.paddingRight = '';
    header.style.paddingRight = '';

    signup.classList.remove('is-visible');
    body.classList.remove('overhide');
  }

  activitieAccept?.addEventListener('click', openModal);

  signupClose?.addEventListener('click', closeModal);

  signupContainer?.addEventListener('click', function (event) {
    if (event.target === signupContainer) {
      closeModal();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
}

export const maskOptions = {
  mask: '+{38}(000)000-00-00'  // маска для українського номера телефону
};

document.addEventListener('DOMContentLoaded', function () {
  const telInputs = document.querySelectorAll('input[type="tel"]');

  telInputs.forEach(input => {
    const phoneMask = IMask(input, maskOptions);
  });
});
