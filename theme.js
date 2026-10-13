/* Apply the preference before the page paints. Storage is optional. */
(() => {
  const root = document.documentElement;
  const system = window.matchMedia('(prefers-color-scheme: dark)');
  let preference = null;
  try {
    const saved = localStorage.getItem('triple-l-theme');
    if (saved === 'light' || saved === 'dark') preference = saved;
  } catch (_) { /* Keep the toggle usable if storage is blocked. */ }

  function apply() {
    const dark = preference ? preference === 'dark' : system.matches;
    root.dataset.theme = dark ? 'dark' : 'light';
    const button = document.querySelector('.theme-toggle');
    if (!button) return;
    button.hidden = false;
    button.setAttribute('aria-pressed', String(dark));
    button.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    button.querySelector('.theme-icon').textContent = dark ? '☀' : '☾';
    button.querySelector('.theme-label').textContent = dark ? 'Light mode' : 'Dark mode';
  }

  apply();
  document.addEventListener('DOMContentLoaded', () => {
    apply();
    document.querySelector('.theme-toggle').addEventListener('click', () => {
      preference = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('triple-l-theme', preference); } catch (_) {}
      apply();
    });
  });
  system.addEventListener('change', () => { if (!preference) apply(); });
  window.addEventListener('storage', (event) => {
    if (event.key !== 'triple-l-theme' && event.key !== null) return;
    preference = event.newValue === 'light' || event.newValue === 'dark' ? event.newValue : null;
    apply();
  });
})();
