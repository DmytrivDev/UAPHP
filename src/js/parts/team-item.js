const teamMore = document.querySelector('.team__more');
const teamMoreWrapp = document.querySelector('.team__btn-wrapp');
const teamList = document.querySelector('.team__list');

function addMoreItems() {
  teamList.classList.add('add-item');
  teamMoreWrapp.classList.add('is-hidden');
}

teamMore?.addEventListener('click', addMoreItems);
