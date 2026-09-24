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

const featuresDialog = document.querySelector('#features-dialog');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let featuresOpener = null;
let featuresCloseTimer = null;

function closeFeaturesDialog() {
  if (!featuresDialog?.open || featuresDialog.classList.contains('is-closing')) return;
  if (reducedMotion.matches) {
    featuresDialog.close();
    return;
  }
  featuresDialog.classList.add('is-closing');
  featuresCloseTimer = window.setTimeout(() => featuresDialog.close(), 190);
}

document.querySelectorAll('[data-open-features]').forEach(button => {
  button.addEventListener('click', () => {
    if (!featuresDialog || featuresDialog.open) return;
    featuresOpener = button;
    featuresDialog.classList.remove('is-closing');
    featuresDialog.showModal();
    document.body.classList.add('features-modal-open');
    featuresDialog.querySelector('[data-close-features]')?.focus();
  });
});

featuresDialog?.querySelector('[data-close-features]')?.addEventListener('click', closeFeaturesDialog);
featuresDialog?.addEventListener('click', event => {
  if (event.target === featuresDialog) closeFeaturesDialog();
});
featuresDialog?.addEventListener('cancel', event => {
  event.preventDefault();
  closeFeaturesDialog();
});
featuresDialog?.addEventListener('close', () => {
  window.clearTimeout(featuresCloseTimer);
  featuresCloseTimer = null;
  featuresDialog.classList.remove('is-closing');
  document.body.classList.remove('features-modal-open');
  featuresOpener?.focus();
  featuresOpener = null;
});

if (!reducedMotion.matches && 'IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    });
  }, { rootMargin: '0px 0px -40px 0px', threshold: 0.08 });

  document.querySelectorAll('.section-heading, .feature, .feature-details-cta, .game-shot, .gallery-credit, .quote-inner, .connection-card, .note-row, .steps article, .trial-callout, .faq-list, .contact-layout > *').forEach((element, index) => {
    element.classList.add('reveal');
    element.style.setProperty('--reveal-delay', `${(index % 3) * 85}ms`);
    revealObserver.observe(element);
  });
}

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

