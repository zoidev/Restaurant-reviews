if ('serviceWorker' in navigator) {
	navigator.serviceWorker
	.register('js/sw.js')
	.then(function(registration) {
		console.log("Service Worker Registered");
	})
	.catch(function(err) {
		console.log("Service Worker Failed to Register", err);
	})
}