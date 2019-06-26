importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

console.log('This is my custom service worker');

workbox.precaching.precacheAndRoute([]);
workbox.googleAnalytics.initialize();

workbox.core.skipWaiting();
workbox.core.clientsClaim();

// This will work!
workbox.routing.registerRoute(
    new RegExp('\.png$'),
    new workbox.strategies.CacheFirst()
);

workbox.routing.setDefaultHandler(new workbox.strategies.NetworkFirst());