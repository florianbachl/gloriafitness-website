(function () {
  // Mobile-Menü
  var btn = document.querySelector('.menu-btn');
  var links = document.querySelector('.menu-links');
  if (btn && links) {
    btn.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      btn.setAttribute('aria-expanded', open);
      btn.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
    });
    links.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        links.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // Calendly sofort laden (Container trägt data-url)
  var embed = document.getElementById('calendly-embed');
  if (embed) {
    // Kampagnen-Parameter (UTM) aus der URL an Calendly weitergeben, damit sie in der Buchung stehen
    var inParams = new URLSearchParams(window.location.search);
    var url = new URL(embed.getAttribute('data-url'));
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content', 'utm_term'].forEach(function (k) {
      var v = inParams.get(k);
      if (v) url.searchParams.set(k, v.slice(0, 200));
    });
    embed.setAttribute('data-url', url.toString());
    var s = document.createElement('script');
    s.src = 'https://assets.calendly.com/assets/external/widget.js';
    s.async = true;
    s.onload = function () { track('calendly_loaded'); };
    document.head.appendChild(s);
  }

  window.addEventListener('message', function (e) {
    if (e.origin === 'https://calendly.com' && e.data && e.data.event === 'calendly.event_scheduled') {
      track('calendly_event_scheduled');
      logInfo('calendly booking completed', { integration: 'calendly' });
    }
  });

  function track(name, props) {
    if (window.posthog && window.posthog.capture) window.posthog.capture(name, props || {});
  }

  function logInfo(message, attributes) {
    var logger = window.posthog && window.posthog.logger;
    if (logger && logger.info) logger.info(message, attributes || {});
  }

  // Klick-Events
  document.addEventListener('click', function (e) {
    var a = e.target.closest && e.target.closest('a,button');
    if (!a) return;
    var href = a.getAttribute('href') || '';
    if (href === '#termin') track('cta_click', { label: a.textContent.trim(), position: a.dataset.pos || '' });
    else if (href.indexOf('tel:') === 0) track('phone_click');
    else if (href.indexOf('mailto:') === 0) track('mail_click');
    else if (href.indexOf('google.com/maps') !== -1) {
      track('directions_click');
      logInfo('directions link selected', { destination: 'google_maps' });
    }
  });
  document.querySelectorAll('details.q').forEach(function (d) {
    d.addEventListener('toggle', function () {
      if (d.open) track('faq_open', { question: d.querySelector('summary').textContent.trim() });
    });
  });
})();
