const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');

menuButton?.addEventListener('click', () => {
  const expanded = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!expanded));
  menuButton.setAttribute('aria-label', expanded ? 'Open menu' : 'Close menu');
  nav.classList.toggle('open', !expanded);
});

nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton?.setAttribute('aria-expanded', 'false');
  menuButton?.setAttribute('aria-label', 'Open menu');
}));

document.querySelector('#copy-hash')?.addEventListener('click', async event => {
  const button = event.currentTarget;
  const hash = document.querySelector('#checksum')?.textContent?.trim();
  if (!hash) return;
  try {
    await navigator.clipboard.writeText(hash);
    button.textContent = 'Copied';
    window.setTimeout(() => { button.textContent = 'Copy'; }, 2000);
  } catch {
    button.textContent = 'Select hash';
    window.getSelection()?.selectAllChildren(document.querySelector('#checksum'));
  }
});

