const staticAssets = [
    './index.html',
    './css/main.css',
    './css/font-awesome.min.css',
    './js/Chart.min.js',
    './js/chartjs-plugin-annotation.js',
    './js/main.js',
    './js/moment.min.js',
    './js/push.min.js',
]

self.addEventListener('install', async event => {
    const cache = await caches.open('macros-static');
    cache.addAll(staticAssets);
});

self.addEventListener('fetch', event => {
    const req = event.request;
    event.respondWith(cacheFirst(req));
});

async function cacheFirst(req) {
    const cachedResponse = await caches.match(req);
    return cachedResponse || fetch(req);
}

