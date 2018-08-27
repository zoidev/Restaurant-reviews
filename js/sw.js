/***************************************************************************************
*    Title: Service Workers: an Introduction
*    Author: Matt Gaunt
* 	 Availability: https://developers.google.com/web/fundamentals/primers/service-workers/
*
***************************************************************************************/
var CACHE_NAME = 'my-site-cache-v1';
var cacheFiles = [
	'/',
	'/index.html',
	'/restaurant.html',
	'/css/styles.css',
	'/js/main.js',
	'/js/restaurant_info.js',
	'/js/dbhelper.js'
];
self.addEventListener('install', function(event) {
	console.log("[ServiceWorker] Installed");
	event.waitUntil(
		caches.open(CACHE_NAME)
		.then(function(cache) {
			console.log("[ServiceWorker] Caching cacheFiles");
			return cache.addAll(cacheFiles);
		})
	)
})
self.addEventListener('activate', function(event) {
	console.log("[ServiceWorker] Activated");
	var cacheWhitelist = ['pages-cache-v1', 'blog-posts-cache-v1'];

  	event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
          	console.log("[ServiceWorker] remove cache file from ", cacheName);
            return caches.delete(cacheName);
          }
        })
      )
    })
  )
})
self.addEventListener('fetch', function(event) {
	console.log("[ServiceWorker] Fetching", e.request.url);
	event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

         
        // A request is a stream and can only be consumed once. Since we are consuming this
        // once by cache and once by the browser for fetch, we need
        // to clone the response.
        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // A response is a stream and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        )
      })
    )
})