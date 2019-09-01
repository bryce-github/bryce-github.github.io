const staticAssets = [
  './index.html',
  './css/main.css',
  './js/Chart.min.js',
  './js/chartjs-plugin-annotation.js',
  './js/main.js',
  './js/moment.min.js',
  './js/dexie.js'
]

self.addEventListener('install', async event => {
  const cache = await caches.open('macros-static');
  cache.addAll(staticAssets);
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.open('macros-static').then(function (cache) {
      return fetch(event.request).then(function (response) {
        cache.put(event.request, response.clone());
        return response;
      });
    })
  );
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheNames) {
      return Promise.all(
        cacheNames.filter(function (cacheName) {}).map(function (cacheName) {
          return caches.delete(cacheName);
        })
      );
    })
  );
});

self.addEventListener('notificationclose', function (e) {
  var notification = e.notification;
  var primaryKey = notification.data.primaryKey;

  console.log('Closed notification: ' + primaryKey);
});

self.addEventListener('notificationclick', function (e) {
  var notification = e.notification;
  var primaryKey = notification.data.primaryKey;
  var action = e.action;

  if (action === 'close') {
    notification.close();
  } else {
    clients.openWindow('http://www.example.com');
    notification.close();
  }
});