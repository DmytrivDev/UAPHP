const teamMore = document.querySelector('.team__more');
const teamMoreWrapp = document.querySelector('.team__btn-wrapp');
const teamList = document.querySelector('.team__list');

function addMoreItemsTeam() {
  teamList.classList.add('add-item');
  teamMoreWrapp.classList.add('is-hidden');
}

teamMore?.addEventListener('click', addMoreItemsTeam);

// ==========================================

const trainersMore = document.querySelector('.trainers__more');
const trainersMoreWrapp = document.querySelector('.trainers__btn-wrapp');
const trainersList = document.querySelector('.trainers__list');

function addMoreItemsTrainers() {
  trainersList.classList.add('add-item');
  trainersMoreWrapp.classList.add('is-hidden');
}

trainersMore?.addEventListener('click', addMoreItemsTrainers);

// ==========================================

const trainersBtnInfo = document.querySelectorAll('.trainers__btn-info');
const trainersItems = document.querySelectorAll('.trainers__item');

function toggleItemInfo(event) {
  const btn = event.currentTarget;
  const trainerItem = btn.closest('.trainers__item');

  if (window.innerWidth <= 960) {
    trainerItem.classList.toggle('show');
  }
}

function removeShowClassOutsideClick(event) {
  trainersItems.forEach(item => {
    if (!item.contains(event.target)) {
      item.classList.remove('show');
    }
  });
}

trainersBtnInfo?.forEach(btn => {
  btn.addEventListener('click', toggleItemInfo);
});

document.addEventListener('click', removeShowClassOutsideClick);
