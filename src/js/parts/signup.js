import NiceSelect from 'nice-select2';

const signup = document.querySelector('.signup');
const signupForm = document.querySelector('.signup__form');
const signupContainer = document.querySelector('.signup__container');
const signupClose = document.querySelector('.signup__close');

const activitieAccept = document.querySelector('.activitie__accept');
const body = document.body;

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
    signup.classList.add('is-visible');
    body.classList.add('overhide');
  }

  function closeModal() {
    signup.classList.remove('is-visible');
    body.classList.remove('overhide');
  }

  activitieAccept.addEventListener('click', openModal);

  signupClose.addEventListener('click', closeModal);

  signupContainer.addEventListener('click', function (event) {
    if (event.target === signupContainer) {
      console.log('object');
      closeModal();
    }
  });

  document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
      closeModal();
    }
  });
}
