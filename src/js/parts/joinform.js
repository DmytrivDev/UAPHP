const openPopup = document.querySelectorAll('.open-popup');

const joinForm = document.querySelector('.joinform');
const closeBtn = document.querySelector('.joinform__close');
const sendBtn = document.querySelector('.joinform__send');
const sendDone = document.querySelector('.joinform__done');

const form = document.querySelector('.joinform__form');
const part1 = document.querySelector('.joinform__part1');
const part2 = document.querySelector('.joinform__part2');

const body = document.body;
const header = document.querySelector('.header');

// Валідація форми
function validateForm() {
  let isValid = true;

  const nameField = form.querySelector('input[name="join-name"]');
  const emailField = form.querySelector('input[name="join-email"]');
  const nameLabel = nameField.closest('.joinform__label');
  const emailLabel = emailField.closest('.joinform__label');

  nameLabel.classList.remove('is-error');
  emailLabel.classList.remove('is-error');
  sendBtn.classList.remove('disabled');

  if (nameField.value.trim() === '') {
    nameLabel.classList.add('is-error');
    sendBtn.classList.add('disabled');
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailField.value.trim())) {
    emailLabel.classList.add('is-error');
    sendBtn.classList.add('disabled');
    isValid = false;
  }

  sendBtn.disabled = !isValid;

  return isValid;
}

// Відправка форми в консоль
function submitForm() {
  const formData = {
    name: form.querySelector('input[name="join-name"]').value,
    email: form.querySelector('input[name="join-email"]').value,
    comment: form.querySelector('textarea[name="join-mess"]').value,
  };

  console.log('Form submitted: ', formData);

  form.reset();
}

// Функція для відкриття модального вікна
function openModal(evt) {
  const scrollBarWidth =
    window.innerWidth - document.documentElement.clientWidth;
  document.body.style.paddingRight = `${scrollBarWidth}px`;
  header.style.paddingRight = `${scrollBarWidth}px`;
  const id = evt.currentTarget.dataset.id;
  const popup = document.getElementById(id);

  if (popup) {
    const btn = popup.querySelector('.joinform__send');
    const part1Pop = document.querySelector('.joinform__part1');
    const part2Pop = document.querySelector('.joinform__part2');

    const formLabel = popup.querySelectorAll('.joinform__label');
    formLabel?.forEach(label => {
      label.classList.remove('is-error');
    });

    if (btn) {
      btn.classList.remove('disabled');
      btn.disabled = false;
    }

    if (part1Pop && part2Pop) {
      part1Pop.classList.add('is-transition', 'is-step');
      part2Pop.classList.remove('is-transition', 'is-step');
    }

    popup.classList.add('is-visible');
    body.classList.add('overhide');
  }
}

// Закриття модального вікна
function closeModal() {
  document.body.style.paddingRight = '';
  header.style.paddingRight = '';

  joinForm.classList.remove('is-visible');
  body.classList.remove('overhide');
}

// Перехід до "Успішно!" сторінки
function showSuccess() {
  part1.classList.remove('is-transition', 'is-step');
  part2.classList.add('is-transition', 'is-step');
}

// Обробка натискання кнопки "Подати заявку"
sendBtn?.addEventListener('click', function (event) {
  event.preventDefault();

  if (validateForm()) {
    showSuccess();
    submitForm();
  }
});

// Перевірка полів на введення даних у реальному часі
const nameField = form?.querySelector('input[name="join-name"]');
const emailField = form?.querySelector('input[name="join-email"]');

// Обробники подій для валідації під час введення
nameField?.addEventListener('input', validateForm);
emailField?.addEventListener('input', validateForm);

// Відкриття модального вікна при натисканні на кнопку "Стати учасником"
openPopup?.forEach(e => {
  e.addEventListener('click', openModal);
});

// Закриття модального вікна при натисканні на кнопку "X"
closeBtn?.addEventListener('click', closeModal);
sendDone?.addEventListener('click', closeModal);

// Закриття модального вікна при натисканні на бекдроп
joinForm?.addEventListener('click', function (event) {
  if (event.target === joinForm) {
    closeModal();
  }
});

// Закриття модального вікна при натисканні на клавішу "Esc"
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && joinForm.classList.contains('is-visible')) {
    closeModal();
  }
});
