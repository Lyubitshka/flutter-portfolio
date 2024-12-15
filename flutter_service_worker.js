'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "64df1a12e07d44ef25d3b2371000523a",
"assets/AssetManifest.bin.json": "45bcf9897be432edbab73e158fd82574",
"assets/AssetManifest.json": "5098ef3426e9e2388ec9cee1b18d2766",
"assets/assets/images/aboutme/construction.png": "b90b8810f2266bfcd9409ae3890e42db",
"assets/assets/images/aboutme/learn.png": "7b07e22294e090040a47d89c86270f89",
"assets/assets/images/aboutme/yoga.png": "d7d17092e71f2e7286d866b9f8d47265",
"assets/assets/images/background.jpg": "2b451a203c9cfa8fe0aacc89c5c01c4f",
"assets/assets/images/div.png": "b19791dce6826bbef37fb1b8ba9c214b",
"assets/assets/images/drawer_img.png": "a24249ada63090109a3f52e6d67f7aee",
"assets/assets/images/home_img.png": "513654a1c2119a826eda74f761eb936c",
"assets/assets/images/ooo.jpg": "4f11f81735a7dfa6f788165d1bdc5c58",
"assets/assets/images/ppp.jpg": "ffb42c59ce690ee68c504c058eada272",
"assets/assets/images/projects/chat_app_1.png": "48527a80b3640a61fe313f99b5f3d97a",
"assets/assets/images/projects/chat_app_2.png": "d50685ecc389d9403cc3e6e2c18b7d25",
"assets/assets/images/projects/chat_app_3.png": "976b219d7ef6d2ebe96112bcc3ed6a95",
"assets/assets/images/projects/cookbook_1.png": "4a2e5bece00e557740d52880e650e33f",
"assets/assets/images/projects/cookbook_2.png": "5e5537c3831aaa8fc4c17775d4a7b8fb",
"assets/assets/images/projects/cookbook_3.png": "3013c5d901e4c986fa6986b76a0a6b48",
"assets/assets/images/projects/cookbook_4.png": "1ee93133885004c14c6797f180847cc5",
"assets/assets/images/projects/cookbook_5.png": "2cad004be7c9ca85587e0a873acb2db8",
"assets/assets/images/projects/cookbook_6.png": "f5d4645ecda0ff973e9c2e47e7f135fc",
"assets/assets/images/projects/cookbook_mini.png": "087089efeb1d9b9505b14693080672c9",
"assets/assets/images/projects/favpl_1.png": "58663b4c4a4ccfdfb68dce68fbcf5ad1",
"assets/assets/images/projects/favpl_2.png": "f6494160030c14c68bbd7d20dfb57d8e",
"assets/assets/images/projects/favpl_3.png": "901bfb76424612b4c353ab245176bfdd",
"assets/assets/images/projects/favpl_4.png": "23b9092d9fef023ccf9fb10de35aa44d",
"assets/assets/images/projects/grocery_1.png": "ca03e113bdd99d50c3e8646fe521485e",
"assets/assets/images/projects/grocery_2.png": "b2b26bb48d824c158a8efd7ada496156",
"assets/assets/images/projects/grocery_201.png": "6c59ee95818fbd93653629b237fe06bc",
"assets/assets/images/projects/grocery_21.png": "b46136dc33a2c4a02648af5af7bbf16a",
"assets/assets/images/projects/grocery_22.png": "a803623bc587d9995914c7b3bb6f0046",
"assets/assets/images/projects/grocery_3.png": "7b4a2e752641ac7282fa6c0c833d1534",
"assets/assets/images/projects/grocery_4.png": "c3e1f30fba4e206fff7baa08c31868c2",
"assets/assets/images/projects/grocery_mini.png": "5ea1f6a163cdb609aec26f443d3e8326",
"assets/assets/images/projects/kantor_1.png": "b4185e41ca711d83fc0d8549c7388a60",
"assets/assets/images/projects/kantor_2.png": "ee4b30b42f830782da7e842b6e509636",
"assets/assets/images/projects/kostka.png": "e30bee4212c56cd7d842b834e03df25a",
"assets/assets/images/projects/mini_chat.png": "0d07f120ec9a824dfa70ad7f695e534d",
"assets/assets/images/projects/mini_portfolio.png": "ac9dad0bb7a60a4d76fa5dd1b853c84c",
"assets/assets/images/projects/mini_tetris.png": "3004652ea6ff20b351478d2ae341a046",
"assets/assets/images/projects/mini_weather.png": "216da5b22d960e333db23fec5a9b845f",
"assets/assets/images/projects/myworkout_1.png": "283efa97f05607eb765c0ef99a39d7e1",
"assets/assets/images/projects/myworkout_2.png": "ed57718cb19e295a216a298ed22cfc2b",
"assets/assets/images/projects/myworkout_3.png": "04c41212a9f9da327babd8e78cd05297",
"assets/assets/images/projects/portfolio1.png": "e5efcd18529ce9922b519ddcae7e72c2",
"assets/assets/images/projects/portfolio2.png": "bce5f08dbe50a643747fc3e3b9cea30c",
"assets/assets/images/projects/portfolio3.png": "53b38214512a00085a7dd070b42c685a",
"assets/assets/images/projects/portfolio4.png": "16304f52a2a5aac939aee13ae046d8f3",
"assets/assets/images/projects/tetris_1.png": "e903497522634e540ecb0acb9fa6704f",
"assets/assets/images/projects/tetris_2.png": "5070b0cdf4c7679981c2eacfd8b1480e",
"assets/assets/images/projects/tetris_3.png": "796b4b72c920a1421dd0ded4976cbe03",
"assets/assets/images/projects/weather_1.png": "bfd62197edd271225b0bd2c15fcb7d7a",
"assets/assets/images/projects/weather_2.png": "f04ea66728419b5f1e9fc38501c6c90f",
"assets/assets/images/projects/weather_3.png": "551881e79f9766e8beda097d4c353900",
"assets/assets/images/projects/weather_4.png": "790aac227c6addfd857c88c6421e3162",
"assets/assets/images/sss.png": "c1d6835af57b04571bbc2718c4a64605",
"assets/assets/images/yoga.png": "d7d17092e71f2e7286d866b9f8d47265",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "99a9d6b4529271c35edac9791431f7ff",
"assets/NOTICES": "8164ecb5bf54afda820af03d6b4fc08e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "9c1a7cb4af7056314be50d038d7dce96",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "f79ba9a4198973f6e7abfe8cdb219ccc",
"/": "f79ba9a4198973f6e7abfe8cdb219ccc",
"main.dart.js": "1417cc52341537e2ac9da33974f020ee",
"manifest.json": "b405f9a214290324f22a3e396285ce32",
"version.json": "a5d7b5da1686c402a09c2c215396d212"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
