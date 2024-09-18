import axios from 'axios';

async function loadFutureEvents(page, sortOld, cat) {
  try {
    const formData = new FormData();
    const castomP = document.querySelector('.custom-pagination');
    const perPage = castomP.dataset.perpage ? castomP.dataset.perpage : 6;
    const isSimp = castomP.dataset.isSimp;
    let sort = 'DESC';
    if (sortOld) {
      sort = 'ASC';
    }
    formData.append('action', 'load_future_events');
    formData.append('page', page);
    formData.append('perpage', perPage);
    formData.append('isSimp', isSimp);
    formData.append('sort', sort);
    formData.append('cat', cat);

    const response = await axios.post('/wp-admin/admin-ajax.php', formData);

    if (response.data) {
      document.querySelector('.events__listpaste').innerHTML =
        response.data.posts;

      // Оновлюємо пагінацію
      document.querySelector('.custom-pagination').innerHTML =
        response.data.pagination;

      // Додаємо слухачів до нових елементів пагінації
      addPaginationListeners();
    }
  } catch (error) {
    console.log(error);
  }
}

// Додаємо слухачів подій для елементів пагінації
function addPaginationListeners() {
  const paginationLinks = document.querySelectorAll('.page-numbers');

  paginationLinks?.forEach(function (link) {
    link?.addEventListener('click', function (e) {
      e.preventDefault();
      const url = this.getAttribute('href');
      const searchParams = new URLSearchParams(new URL(url).search);
      const sortPastCtrl = document.querySelector('.pastCtrl');
      const catSelect = document.querySelector('select.custom-dropdown');
      let page = searchParams.get('paged');

      if (!page) {
        page = url.match(/\/page\/(\d+)/)[1];
      }

      loadFutureEvents(
        page,
        sortPastCtrl?.classList.contains('choice'),
        catSelect?.value
      );
    });
  });
}

const sortPastCtrl = document.querySelector('.pastCtrl');
sortPastCtrl?.addEventListener('click', sortFunc);

async function sortFunc() {
  const curPage = document.querySelector('.custom-pager .current');
  const catSelect = document.querySelector('select.custom-dropdown');

  console.log(catSelect?.value);

  if (sortPastCtrl.classList.contains('choice')) {
    await loadFutureEvents(curPage?.innerText, false, catSelect?.value);
    sortPastCtrl.classList.remove('choice');
  } else {
    await loadFutureEvents(curPage?.innerText, true, catSelect?.value);
    sortPastCtrl.classList.add('choice');
  }
}

const catSelect = document.querySelector('select.custom-dropdown');
catSelect?.addEventListener('change', catsFunc);

function catsFunc(evt) {
  const sortPastCtrl = document.querySelector('.pastCtrl');
  const selectedValue = evt.target.value;

  loadFutureEvents(
    1,
    sortPastCtrl?.classList.contains('choice'),
    selectedValue
  );
}

// Ініціалізуємо слухачі при завантаженні сторінки
addPaginationListeners();
