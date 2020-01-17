import { CONSTANTS } from "./util/constants";
const filesToCache = [];

const CURRENT_CACHE = CONSTANTS.cache;

self.addEventListener("install", event => {
  console.log("service worker installed");
});

self.addEventListener("activate", event => {
  console.log("service worker activated");
});

const cacheAllImages = async event => {
  const request = event.request;
  // open cache
  const cache = await caches.open(CURRENT_CACHE);
  const cacheResponse = await cache.match(request);

  // match with request
  if (cacheResponse) {
    return cacheResponse;
  } else {
    // fetch
    // now cache
    return await fetch(request).then(res => {
      const clonedResponse = res.clone();
      cache.put(request, clonedResponse);
      return res;
    });
  }
};

self.addEventListener("fetch", event => {
  console.dir(event.request);
  if (event.request.method != "GET") return;

  if (event.request.destination === "image") {
    event.respondWith(cacheAllImages(event));
  }
});
