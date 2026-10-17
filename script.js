(function () {
  'use strict';
  const year = document.getElementById('year');
  if (year) year.textContent = String(new Date().getFullYear());
  const shareButton = document.getElementById('share-profile');
  const toast = document.getElementById('toast');
  let noticeTimer;
  function notify(message) {
    if (!toast) return;
    toast.textContent = message;
    toast.classList.add('visible');
    clearTimeout(noticeTimer);
    noticeTimer = setTimeout(() => toast.classList.remove('visible'), 2600);
  }
  if (shareButton) {
    shareButton.addEventListener('click', async () => {
      const url = location.href.split('#')[0];
      const details = {title: 'Abdihakim Sudi | Regional Manager', text: 'Connect with Abdihakim Sudi, Regional Manager at Dauus Company.', url};
      if (navigator.share) {
        try {await navigator.share(details); return;} catch (err) {if (err && err.name === 'AbortError') return;}
      }
      try {
        if (navigator.clipboard && window.isSecureContext) {await navigator.clipboard.writeText(url); notify('Profile link copied to clipboard');return;}
        const copy = document.createElement('textarea');
        copy.value = url;copy.style.position = 'fixed';copy.style.opacity = '0';
        document.body.appendChild(copy);copy.select();
        const success = document.execCommand('copy');copy.remove();
        notify(success ? 'Profile link copied to clipboard' : 'Copy the link from your browser address bar');
      } catch (err) {notify('Copy the link from your browser address bar');}
    });
  }
})();
