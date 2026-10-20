'use strict';
document.getElementById('year').textContent = new Date().getFullYear();
const shareButton = document.getElementById('share-button');
const shareStatus = document.getElementById('share-status');
shareButton.addEventListener('click', async () => {
  const url = 'https://nelihevir.github.io/Free-3-day-mini-reset/';
  if (navigator.share) {
    // Share one URL field: some share targets duplicate links when combining fields.
    try { await navigator.share({ url }); return; }
    catch (error) { if (error.name === 'AbortError') return; }
  }
  try {
    await navigator.clipboard.writeText(url);
    shareButton.textContent = 'Link copied ✓';
    shareStatus.textContent = 'Link copied. Share it with someone who could use a little pause.';
    setTimeout(() => { shareButton.textContent = 'Share the reset ↗'; }, 4000);
  } catch {
    shareStatus.classList.remove('sr-only');
    shareStatus.textContent = 'Copy and share this link: ' + url;
  }
});
// MailerLite invokes this only after a successful Mini Reset subscription.
window.ml_webform_success_47366701 = function () {
  const container = document.getElementById('mlb2-47366701');
  container.querySelector('.row-form').style.display = 'none';
  const success = container.querySelector('.row-success');
  success.style.display = 'block';
  success.focus();
};

// Native validation remains in place; these messages also work with screen readers.
const resetEmail = document.getElementById('reset-email');
const resetEmailError = document.getElementById('reset-email-error');
resetEmail.addEventListener('invalid', () => {
  resetEmail.setAttribute('aria-invalid', 'true');
  resetEmailError.textContent = resetEmail.validity.valueMissing
    ? 'Please enter your email address.'
    : 'Please enter an email address like name@example.com.';
});
resetEmail.addEventListener('input', () => {
  if (resetEmail.validity.valid) {
    resetEmail.removeAttribute('aria-invalid');
    resetEmailError.textContent = '';
  }
});

// Choose Google’s compact widget before its deferred script renders on narrow screens.
const captcha = document.querySelector('.g-recaptcha');
if (captcha && captcha.parentElement.clientWidth < 304) captcha.dataset.size = 'compact';
