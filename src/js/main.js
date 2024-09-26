import './parts/scroll-header';
import './parts/splide';
import './parts/banner';
import './parts/calendar';
import './parts/joinform';
import './parts/more-item';
import './parts/article-sidebar';
import './parts/select';
import './parts/signup';
import './parts/filter';
import './parts/formsend';

import { initMenu } from './parts/navigation';

initMenu();

document.addEventListener('DOMContentLoaded', function () {
  const cookieConsent = document.querySelector('.cookie');
  const acceptAllButton = document.querySelector('.accept-all');
  const acceptMustButton = document.querySelector('.accept-must');

  const cookiesAccepted = localStorage.getItem('cookiesAccepted');

  if (!cookiesAccepted) {
    setTimeout(function () {
      cookieConsent.classList.add('is-visible');
    }, 500);
  }

  acceptAllButton.addEventListener('click', function () {
    localStorage.setItem('cookiesAccepted', 'all');
    cookieConsent.classList.remove('is-visible');
  });

  acceptMustButton.addEventListener('click', function () {
    localStorage.setItem('cookiesAccepted', 'necessary');
    cookieConsent.classList.remove('is-visible');
  });
});
