(function () {
  'use strict';

  document.addEventListener('click', function (event) {
    const link = event.target.closest('a[href^="https://calendly.com/"]');
    if (!link || !window.Calendly) return;

    event.preventDefault();
    window.Calendly.initPopupWidget({ url: link.href });
  });
})();
