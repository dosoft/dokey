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
