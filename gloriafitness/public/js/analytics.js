// PostHog (EU-Cloud): ohne Zustimmung anonym und ohne Cookies/Speicher (persistence: memory),
// mit Zustimmung mit Wiedererkennung (Cookie + localStorage).
(function () {
  var KEY = 'gf-consent';
  var POSTHOG_KEY = 'phc_zPaw9HP93NJUpZzijo6RqKJPtJBELdphgL58Ddc8vjjb';
  var HOST = 'https://eu.i.posthog.com';

  function isDevelopment() {
    return /^(localhost|127\.0\.0\.1)$/.test(window.location.hostname);
  }

  function get() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function set(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }

  function loadPostHog(consented) {
    if (window.posthog && window.posthog.__loaded) return;
    !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
    window.posthog.init(POSTHOG_KEY, {
      api_host: HOST,
      persistence: consented ? 'localStorage+cookie' : 'memory',
      person_profiles: 'identified_only',
      autocapture: false,
      disable_session_recording: true,
      defaults: '2026-08-30',
      logs: {
        serviceName: 'gloriafitness-web',
        environment: isDevelopment() ? 'development' : 'production'
      },
      capture_exceptions: {
        capture_unhandled_errors: true,
        capture_unhandled_rejections: true,
        capture_console_errors: false
      }
    });
  }

  var banner = document.getElementById('consent');
  function decide(v) {
    set(v);
    if (banner) banner.hidden = true;
    if (v === 'yes' && window.posthog && window.posthog.set_config) {
      window.posthog.set_config({ persistence: 'localStorage+cookie' });
    }
  }

  var state = get();
  loadPostHog(state === 'yes');
  if (state !== 'yes' && state !== 'no' && banner) banner.hidden = false;

  var y = document.getElementById('consent-yes'), n = document.getElementById('consent-no');
  if (y) y.addEventListener('click', function () { decide('yes'); });
  if (n) n.addEventListener('click', function () { decide('no'); });

  // Widerruf (Datenschutzseite)
  var re = document.getElementById('consent-reset');
  if (re) re.addEventListener('click', function (e) {
    e.preventDefault();
    set('no');
    if (window.posthog && window.posthog.set_config) {
      window.posthog.reset();
      window.posthog.set_config({ persistence: 'memory' });
    }
    re.textContent = 'Einwilligung widerrufen ✓';
  });
})();
