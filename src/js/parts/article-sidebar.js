const paragraphSidebar = document.querySelector('.paragraph__sidebar');
if (paragraphSidebar) {
  articleSidebar('paragraph');
}

const policySidebar = document.querySelector('.policy__sidebar');
if (policySidebar) {
  articleSidebar('policy');
}

function articleSidebar(page) {
  let titles = document.querySelectorAll(`.${page}__content h2`);

  if (titles.length < 1) {
    titles = document.querySelectorAll(`.${page}__content h3`);
  }

  titles.forEach((title, index) => {
    title.setAttribute('id', `title-${index + 1}`);
  });

  const quickBodyList = document.createElement('ul');
  quickBodyList.classList.add(`${page}__article`, 'ankor');

  let cl = 'active';
  titles.forEach((title, index) => {
    const listItem = document.createElement('li');
    const link = document.createElement('a');
    link.className = `${cl} tab`;
    link.setAttribute('href', `#title-${index + 1}`);
    link.textContent = title.textContent;
    listItem.appendChild(link);
    quickBodyList.appendChild(listItem);

    cl = index >= 0 ? 'none' : 'active';
  });

  const quickCont = document.querySelector(`.${page}__sidebar`);
  if (quickCont) {
    quickCont.innerHTML = '';
    quickCont.appendChild(quickBodyList);
  }

  setTimeout(function () {
    const links = quickBodyList.querySelectorAll('a');
    const headers = Array.from(links).map((_, i) =>
      document.getElementById(`title-${i + 1}`)
    );

    const setActiveLink = function () {
      const scrollTop = window.scrollY;
      const headerHeight = document.querySelector('.header').offsetHeight;

      let activeLink = links[0];
      headers.forEach((header, i) => {
        if (scrollTop >= header.offsetTop - headerHeight) {
          activeLink = links[i];
        }
      });

      links.forEach(link => link.classList.remove('active'));
      activeLink.classList.add('active');
    };

    setActiveLink();
    window.addEventListener('scroll', setActiveLink);
  }, 500);

  document.querySelectorAll('a.ankor, .ankor a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      const headerHeight = document.querySelector('.header').offsetHeight;

      const href = this.getAttribute('href');
      const target = document.querySelector(href);
      if (!target) return;

      const offset = target.offsetTop;
      const head = headerHeight;
      let ofF = offset;

      if (this.classList.contains('tab')) {
        ofF = offset - head;
      }

      let topic = this.dataset.topic || this.textContent;

      const targetInput = document.getElementById('target');
      if (targetInput) {
        targetInput.value = topic;
      }

      document.body.classList.remove('openedNav');

      window.scrollTo({
        top: ofF,
        behavior: 'smooth',
      });
    });
  });
}
