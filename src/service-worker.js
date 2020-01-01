self.addEventListener("install", event => {
  console.log("service worker installed");
});

self.addEventListener("activate", event => {
  console.log("service worker activated");
});

self.addEventListener("fetch", event => {
  console.log("service worker fetch event");
});
