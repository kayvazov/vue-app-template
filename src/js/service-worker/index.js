window.addEventListener('beforeinstallprompt', function(e) {
  e.userChoice.then(function(choiceResult) {
    console.log(choiceResult.outcome);
    if ( choiceResult.outcome == 'dismissed' ) {
    } else {
      alert('Поздравляю! Вы установили наш сайт на рабочий стол вашего устройства! ')
    }
  });
});
var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
  'index.html',
  'src/css/index.css',
  'src/js/bundle.js'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('activate', function(event) {
  console.log('Finally active. Ready to start serving content!');
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
          // Cache hit - return response
          if (response) {
            return response;
          }
          return fetch(event.request);
        }
      )
  );
});