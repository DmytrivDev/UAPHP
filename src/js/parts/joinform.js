const joinBtn = document.querySelector('.join__btn');

const joinForm = document.querySelector('.joinform');
const closeBtn = document.querySelector('.joinform__close');
const sendBtn = document.querySelector('.joinform__send');
const sendDone = document.querySelector('.joinform__done');

const form = document.querySelector('.joinform__form');
const patr1 = document.querySelector('.joinform__patr1');
const patr2 = document.querySelector('.joinform__patr2');

const body = document.body;

// Валідація форми
function validateForm() {
  let isValid = true;

  const nameField = form.querySelector('input[name="join-name"]');
  const emailField = form.querySelector('input[name="join-email"]');
  const nameLabel = nameField.closest('.joinform__label');
  const emailLabel = emailField.closest('.joinform__label');

  nameLabel.classList.remove('error');
  emailLabel.classList.remove('error');
  sendBtn.classList.remove('disabled');

  if (nameField.value.trim() === '') {
    nameLabel.classList.add('error');
    sendBtn.classList.add('disabled');
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailField.value.trim())) {
    emailLabel.classList.add('error');
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
function openModal() {
  patr1.classList.add('is-transition', 'is-step');
  patr2.classList.remove('is-transition', 'is-step');

  joinForm.classList.add('is-visible');
  body.classList.add('overhide');
}

// Закриття модального вікна
function closeModal() {
  joinForm.classList.remove('is-visible');
  body.classList.remove('overhide');
}

// Перехід до "Успішно!" сторінки
function showSuccess() {
  patr1.classList.remove('is-transition', 'is-step');
  patr2.classList.add('is-transition', 'is-step');
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
joinBtn?.addEventListener('click', openModal);

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
