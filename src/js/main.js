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
  const acceptAllButton = cookieConsent?.querySelector('.accept-all');
  const acceptMustButton = cookieConsent?.querySelector('.accept-must');
  const cookiesAccepted = localStorage.getItem('cookiesAccepted');

  const warnConsent = document.querySelector('.warning');
  const warnButton = warnConsent?.querySelector('.accept-all');
  const warnAccepted = localStorage.getItem('warnAccepted');

  if (!warnAccepted && warnConsent) {
    setTimeout(function () {
      warnConsent?.classList.add('is-visible');
    }, 500);
  } else {
    if (!cookiesAccepted) {
      setTimeout(function () {
        cookieConsent.classList.add('is-visible');
      }, 500);
    }
  }

  warnButton?.addEventListener('click', function () {
    localStorage.setItem('warnAccepted', 'is');
    warnConsent.classList.remove('is-visible');

    if (!cookiesAccepted) {
      setTimeout(function () {
        cookieConsent.classList.add('is-visible');
      }, 500);
    }
  });

  acceptAllButton?.addEventListener('click', function () {
    localStorage.setItem('cookiesAccepted', 'all');
    cookieConsent.classList.remove('is-visible');
  });

  acceptMustButton?.addEventListener('click', function () {
    localStorage.setItem('cookiesAccepted', 'necessary');
    cookieConsent.classList.remove('is-visible');
  });
});
