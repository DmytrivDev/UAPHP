const openPopup = document.querySelectorAll('.open-popup');

const joinForm = document.querySelector('.joinform');
const closeBtn = document.querySelector('.joinform__close');
const sendDone = document.querySelector('.joinform__done');

const body = document.body;
const header = document.querySelector('.header');

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
export function showSuccess() {
  const part1N = document.querySelector('.joinform__part1');
  const part2N = document.querySelector('.joinform__part2');

  part1N.classList.remove('is-transition', 'is-step');
  part2N.classList.add('is-transition', 'is-step');
}

// Обробка натискання кнопки "Подати заявку"
// showSuccess();

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
