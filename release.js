(function () {
  const targets = document.querySelectorAll('[data-copyright-years]');
  if (!targets.length) return;
  const start = 2026;
  const current = new Date().getFullYear();
  const years = current > start ? `${start}–${current}` : String(start);
  targets.forEach(el => { el.textContent = years; });
})();

/* Wallet addresses copy on click and confirm in the terminal's own voice. */
(function () {
  const buttons = document.querySelectorAll('.copy');
  if (!buttons.length) return;
  const write = text => {
    if (navigator.clipboard) return navigator.clipboard.writeText(text);
    const field = document.createElement('textarea');
    field.value = text;
    field.setAttribute('readonly', '');
    field.style.position = 'fixed';
    field.style.opacity = '0';
    document.body.append(field);
    field.select();
    const copied = document.execCommand('copy');
    field.remove();
    return copied ? Promise.resolve() : Promise.reject(new Error('copy failed'));
  };
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const hint = button.nextElementSibling;
      const show = (text, failed) => {
        if (!hint) return;
        hint.textContent = text;
        hint.classList.toggle('is-failed', failed);
        hint.classList.add('is-on');
        window.clearTimeout(hint._hintTimer);
        hint._hintTimer = window.setTimeout(() => hint.classList.remove('is-on'), 1600);
      };
      write(button.dataset.copy)
        .then(() => show(button.dataset.copied || '', false))
        .catch(() => show(button.dataset.failed || '', true));
    });
  });
})();

(function () {
  const output = document.getElementById('release-meta');
  if (!output) return;
  const ru = document.documentElement.lang === 'ru';
  fetch('https://api.github.com/repos/dosoft/dokey/releases')
    .then(response => response.ok ? response.json() : null)
    .then(releases => {
      if (!Array.isArray(releases) || !releases.length) return;
      const latest = releases[0];
      const downloads = releases.reduce((sum, release) => {
        const installer = release.assets.find(asset => asset.name === 'dokey-win-Setup.exe');
        return sum + (installer ? installer.download_count : 0);
      }, 0);
      const date = new Date(latest.published_at).toLocaleDateString(ru ? 'ru-RU' : 'en-US', {
        year: 'numeric', month: 'long', day: 'numeric'
      });
      output.textContent = ru ? 'Версия ' : 'Version ';
      const version = document.createElement('strong');
      version.className = 'release-version';
      version.textContent = latest.tag_name;
      output.append(version, ru
        ? ` · ${date} · загрузок: ${downloads}`
        : ` · ${date} · ${downloads} downloads`);
    })
    .catch(() => {});
})();
