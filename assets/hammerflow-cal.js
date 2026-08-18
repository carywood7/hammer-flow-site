(function (window, document) {
  'use strict';

  const CAL_ORIGIN = 'https://app.cal.com';
  let initialized = false;

  function installCalEmbed() {
    if (window.Cal) return;

    (function (C, A, L) {
      const push = function (api, args) { api.q.push(args); };
      const doc = C.document;

      C.Cal = C.Cal || function () {
        const cal = C.Cal;
        const args = arguments;

        if (!cal.loaded) {
          cal.ns = {};
          cal.q = cal.q || [];
          const script = doc.createElement('script');
          script.src = A;
          script.async = true;
          doc.head.appendChild(script);
          cal.loaded = true;
        }

        if (args[0] === L) {
          const api = function () { push(api, arguments); };
          const namespace = args[1];
          api.q = api.q || [];

          if (typeof namespace === 'string') {
            cal.ns[namespace] = api;
            push(api, args);
          } else {
            push(cal, args);
          }
          return;
        }

        push(cal, args);
      };
    })(window, CAL_ORIGIN + '/embed/embed.js', 'init');
  }

  function initialize() {
    installCalEmbed();
    if (initialized) return;

    window.Cal('init', { origin: CAL_ORIGIN });
    window.Cal('ui', {
      theme: 'light',
      styles: {
        branding: { brandColor: '#00a896' }
      },
      hideEventTypeDetails: false,
      layout: 'month_view'
    });
    initialized = true;
  }

  function eventSlug(url) {
    try {
      const parsed = new URL(url, window.location.href);
      if (parsed.hostname !== 'cal.com' && parsed.hostname !== 'www.cal.com') {
        return '';
      }
      return parsed.pathname.replace(/^\/+|\/+$/g, '');
    } catch (error) {
      return '';
    }
  }

  function open(url) {
    const calLink = eventSlug(url);
    if (!calLink) return false;

    initialize();
    window.Cal('modal', {
      calLink: calLink,
      config: { layout: 'month_view' }
    });
    return true;
  }

  window.HammerFlowCal = { open: open };
  initialize();

  document.addEventListener('click', function (event) {
    const link = event.target.closest('a[href^="https://cal.com/"]');
    if (!link || !open(link.href)) return;

    event.preventDefault();
    event.stopImmediatePropagation();
  }, true);
})(window, document);
