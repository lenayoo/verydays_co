window.dataLayer = window.dataLayer || [];

window.gtag = window.gtag || function gtag() {
  window.dataLayer.push(arguments);
};

if (!window.__verydaysAnalyticsInitialized) {
  window.__verydaysAnalyticsInitialized = true;
  window.gtag("js", new Date());
  window.gtag("config", "G-TL7F77BC2L");
}

window.verydaysTrackEvent = function verydaysTrackEvent(eventName, params) {
  if (!eventName) {
    return;
  }

  window.gtag("event", eventName, params || {});
};
