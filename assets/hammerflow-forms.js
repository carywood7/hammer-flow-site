(function () {
  'use strict';

  const forms = {
    blueprints: {
      endpoint: 'https://n8n.hammerflowai.com/webhook/hammerflow/blueprints/request',
      successPage: '5-msp-automation-blueprints.html',
      source: 'hammerflowai_website_blueprint_request'
    },
    catalog: {
      endpoint: 'https://n8n.hammerflowai.com/webhook/hammerflow/catalog/request',
      successPage: 'Catalog-landing-page.html',
      source: 'hammerflowai_website_catalog_request'
    },
    partners: {
      endpoint: 'https://n8n.hammerflowai.com/webhook/hammerflow/partners/request',
      successPage: 'Partnership-landing-page.html',
      source: 'hammerflowai_website_partner_request'
    }
  };

  function field(form, name) {
    return form.querySelector('[name="' + name + '"]:not([data-form-email="true"])');
  }

  function value(form, name) {
    const input = field(form, name);
    if (!input) return '';
    if (input.type === 'checkbox') return input.checked ? 'on' : '';
    return input.value.trim();
  }

  function payload(form, key, source) {
    if (key === 'partners') {
      return {
        email: value(form, 'email'),
        gdpr: value(form, 'gdpr'),
        source: source
      };
    }

    return {
      nameFirst: value(form, 'nameFirst'),
      nameLast: value(form, 'nameLast'),
      'Company Name': value(form, 'Company Name'),
      email1: value(form, 'email1'),
      gdpr: value(form, 'gdpr'),
      source: source
    };
  }

  function alertBox(form, type) {
    return form.querySelector(type === 'success' ? '[data-form-alert]' : '[data-form-alert-danger]');
  }

  function hideAlerts(form) {
    ['success', 'danger'].forEach(function (type) {
      const box = alertBox(form, type);
      if (box) box.hidden = true;
    });
  }

  function showError(form, message) {
    const box = alertBox(form, 'danger');
    if (!box) return;
    box.textContent = message;
    box.hidden = false;
  }

  function responseMessage(data, fallback) {
    if (data && Array.isArray(data.errors) && data.errors.length) {
      return data.errors.map(function (error) { return error.message; }).join(' ');
    }
    return (data && data.message) || fallback;
  }

  function isPersonalEmail(email) {
    const domain = String(email || '').toLowerCase().split('@').pop();
    return [
      'gmail.com',
      'googlemail.com',
      'yahoo.com',
      'yahoo.co.in',
      'hotmail.com',
      'outlook.com',
      'live.com',
      'msn.com',
      'icloud.com',
      'me.com',
      'aol.com',
      'proton.me',
      'protonmail.com',
      'gmx.com',
      'mail.com',
      'zoho.com'
    ].includes(domain);
  }

  function submissionError(error) {
    if (error && error.message && error.message !== 'Failed to fetch') {
      return error.message;
    }

    return "We couldn't submit your request right now. Please try again in a moment. If the problem continues, email cary@hammerflowai.com.";
  }

  Object.keys(forms).forEach(function (key) {
    const config = forms[key];
    const form = document.querySelector('form[data-hf-form="' + key + '"]');
    if (!form) return;

    form.action = config.endpoint;
    form.addEventListener('submit', async function (event) {
      event.preventDefault();
      hideAlerts(form);

      if (!form.reportValidity()) return;

      const emailName = key === 'partners' ? 'email' : 'email1';
      if (isPersonalEmail(value(form, emailName))) {
        showError(form, 'Please use your company or MSP email address.');
        return;
      }

      const button = form.querySelector('button[type="submit"]');
      const originalLabel = button ? button.textContent : '';
      if (button) {
        button.disabled = true;
        button.textContent = 'Sending...';
      }

      try {
        const response = await fetch(config.endpoint, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
            },
            body: new URLSearchParams(
              payload(form, key, config.source)
            ).toString()
        });

        let data = null;
        try { data = await response.json(); } catch (_) {}

        if (!response.ok || (data && data.ok === false)) {
          throw new Error(responseMessage(data, 'We could not submit the form. Please check your details and try again.'));
        }

        window.location.assign(config.successPage);
      } catch (error) {
        showError(form, submissionError(error));
        if (button) {
          button.disabled = false;
          button.textContent = originalLabel;
        }
      }
    });
  });
})();
