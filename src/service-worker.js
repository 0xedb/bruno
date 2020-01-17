import { CONSTANTS } from "./util/constants";
const filesToCache = [];

const CURRENT_CACHE = CONSTANTS.cache;

self.addEventListener("install", event => {
  console.log("service worker installed");
});

self.addEventListener("activate", event => {
  console.log("service worker activated");
});

self.addEventListener("fetch", event => {
  console.log("service worker fetch event");
  console.log(event.request);

  // event.respondWith(
  //   caches
  //     .match(event.request)
  //     .then(response => {
  //       // response || fetch(event.request);
  //       response ? response : //
  //     })
  //     .catch(err => console.error(err))
  // );
});

// function fetchAndCache(event) {
//   const request = event.request;

//   if (request.destination === "image") { 
//     // fetch
//     fetch(request).then(() => 
//       caches.open(CURRENT_CACHE).then(cache => return cache.add)
//     )
//     // cache 
//   }
// }
