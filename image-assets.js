(function () {
  var host = window.location.hostname || '';
  var isManusPreview = /(^|\.)manus\.computer$/.test(host);
  if (!isManusPreview) return;
  var images = document.querySelectorAll('img[data-manus-src]');
  images.forEach(function (image) {
    var localFallback = image.getAttribute('src');
    image.addEventListener('error', function () {
      if (image.getAttribute('src') !== localFallback) image.setAttribute('src', localFallback);
    }, { once: true });
    image.setAttribute('src', image.getAttribute('data-manus-src'));
  });
})();
