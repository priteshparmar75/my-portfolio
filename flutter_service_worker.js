'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "6116c884126966a466811046753c13b7",
"version.json": "eb84f7ae1c10a54748aee4730005fe14",
"index.html": "c597e0b760509ff684a571a36296749f",
"/": "c597e0b760509ff684a571a36296749f",
"main.dart.js": "96759af94a3929b5192991f00ca2b0e8",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ba187cc9137671f2f023450536ecf0e8",
"assets/AssetManifest.json": "8c186a3fe776b279b49b8d7d901d7551",
"assets/NOTICES": "e4b807aa16fc4056b4c78716ba5a23f7",
"assets/FontManifest.json": "0f73c5a79ef8f2f6d2f42497c59ed9cb",
"assets/AssetManifest.bin.json": "7becb1b4415c64df4c6083ff555b27ea",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "269f971cec0d5dc864fe9ae080b19e23",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "262525e2081311609d1fdab966c82bfc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "261816fba3cb32c517121365f5b71fc1",
"assets/packages/atlas_icons/lib/fonts/hotel-service/hotel-service.ttf": "50c923469385bd7b44dcb324fe548559",
"assets/packages/atlas_icons/lib/fonts/food-beverage/food-beverage.ttf": "3bd6a218528261210afd0fecba202a31",
"assets/packages/atlas_icons/lib/fonts/transportation/transportation.ttf": "7fe16a999c74f8d1d1c5b380eef01d81",
"assets/packages/atlas_icons/lib/fonts/yoga/yoga.ttf": "66b3143038a6ac7a5b3f98ff41ef1002",
"assets/packages/atlas_icons/lib/fonts/achievement/achievement.ttf": "b4aaadf0bf250f17427edc2bf8d6fffa",
"assets/packages/atlas_icons/lib/fonts/web-design/web-design.ttf": "63e6ea1eeede5eb6d7d1b7e7ea5c5797",
"assets/packages/atlas_icons/lib/fonts/cinema/cinema.ttf": "2c4d6cff8e18f0d725ff07aa98ef5951",
"assets/packages/atlas_icons/lib/fonts/goals/goals.ttf": "0f4c7d9e8c7493ce5c97ed3a6900f454",
"assets/packages/atlas_icons/lib/fonts/love/love.ttf": "d1bb0864325a76ac12868703585dca7e",
"assets/packages/atlas_icons/lib/fonts/arrow/arrow.ttf": "b1de896027e8f8bce86ecb62033361bb",
"assets/packages/atlas_icons/lib/fonts/laboratory/laboratory.ttf": "2ac143285c91dfeaa7bd76b1b9531503",
"assets/packages/atlas_icons/lib/fonts/business-finance/business-finance.ttf": "f2acea65ddcc3cc9f4f603eeda551ef0",
"assets/packages/atlas_icons/lib/fonts/virtual-reality/virtual-reality.ttf": "4f154c6974c3ca6c64e6eabdac9aca8b",
"assets/packages/atlas_icons/lib/fonts/real-estate/real-estate.ttf": "6a12f5fce5044802569cafaa0468851d",
"assets/packages/atlas_icons/lib/fonts/hand-gesture/hand-gesture.ttf": "23cf587d654b727258bdd2e539cbf3ef",
"assets/packages/atlas_icons/lib/fonts/sport/sport.ttf": "35b11c59b869732d524129e81095ee7f",
"assets/packages/atlas_icons/lib/fonts/internet-security/internet-security.ttf": "1a54b082a574356bf84cc740303ed2a2",
"assets/packages/atlas_icons/lib/fonts/working-together/working-together.ttf": "0bb881a4d35082e410776be5e1207d49",
"assets/packages/atlas_icons/lib/fonts/furniture/furniture.ttf": "a3ec0d78085d4bd960a42ad5690c74c9",
"assets/packages/atlas_icons/lib/fonts/social/social.ttf": "14e2653eb89f982208a1c844d145ec0b",
"assets/packages/atlas_icons/lib/fonts/christmas/christmas.ttf": "0d5b397bbefbc79ec6962cab78cdfa7a",
"assets/packages/atlas_icons/lib/fonts/winter/winter.ttf": "498547350c07410d7d2b5ef388786d85",
"assets/packages/atlas_icons/lib/fonts/audio/audio.ttf": "3f1061077885938f7d7950997d204c5d",
"assets/packages/atlas_icons/lib/fonts/world-monuments/world-monuments.ttf": "b4838b4465611323a6f32f6085fb6629",
"assets/packages/atlas_icons/lib/fonts/medical/medical.ttf": "1870469962656e437fe59fbdc1d41f57",
"assets/packages/atlas_icons/lib/fonts/personal-development/personal-development.ttf": "cc1fffe7122f1837e50149b9469cb537",
"assets/packages/atlas_icons/lib/fonts/construction/construction.ttf": "cd4e1da1de050086fca243af5904e782",
"assets/packages/atlas_icons/lib/fonts/marketing/marketing.ttf": "a3c9127874bdf909d03f23340ca680e2",
"assets/packages/atlas_icons/lib/fonts/thanksgiving/thanksgiving.ttf": "3361220d1c358b8e5b9705250af2031f",
"assets/packages/atlas_icons/lib/fonts/basic-ui/basic-ui.ttf": "66ce98cbb527bcc6ebe7ee107c5b4c7b",
"assets/packages/atlas_icons/lib/fonts/weather/weather.ttf": "bf22ee4acf5483d84fcd4fb215f949e7",
"assets/packages/atlas_icons/lib/fonts/ecology/ecology.ttf": "b83e0c5a4760275984251b83c4ae8288",
"assets/packages/atlas_icons/lib/fonts/communication/communication.ttf": "98765079271bc5f10b094f70ec20ef35",
"assets/packages/atlas_icons/lib/fonts/content-box/content-box.ttf": "bdac94c1cf513f6765423de96650ca97",
"assets/packages/atlas_icons/lib/fonts/leadership/leadership.ttf": "027bd6ee2dd9c7eb2fd83ce8c3112024",
"assets/packages/atlas_icons/lib/fonts/partnership/partnership.ttf": "153e3d7bf92828c0b6f344462c96b3a1",
"assets/packages/atlas_icons/lib/fonts/electronic-gadget/electronic-gadget.ttf": "e24858c0b60a69c5646b1547210fff28",
"assets/packages/atlas_icons/lib/fonts/school/school.ttf": "df386f18a52a9184d05a34e44611fc29",
"assets/packages/atlas_icons/lib/fonts/fitness-gym/fitness-gym.ttf": "4271c3a0c2c52db8714961e022c43119",
"assets/packages/atlas_icons/lib/fonts/data-document/data-document.ttf": "a9a08ede494be44999414f064b76e564",
"assets/packages/atlas_icons/lib/fonts/travel/travel.ttf": "ad2106403b4f3178091e5b9b65fbc636",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "860b0e804c9de42162387ddd985bf32f",
"assets/fonts/MaterialIcons-Regular.otf": "5d1e2cc45553890e8625cbc5a8de8e6f",
"assets/assets/images/personal/my_showcase_style.png": "468fafa7f1f854e4f8b9cfab1de4431f",
"assets/assets/images/tools/flutter.svg": "749737f954a8acaae1b3d389b3fc857f",
"assets/assets/images/tools/python.svg": "a1872cef0fb917ddf4d387e298d9f160",
"assets/assets/images/tools/kotlin.svg": "73c815b94511db676068d478c1e80875",
"assets/assets/images/tools/html5.svg": "4447440d22b307c33a57c729e7d7c599",
"assets/assets/images/tools/dart.svg": "77736b70355db3b992d712891749acd5",
"assets/assets/images/tools/graphql.svg": "fa9917f65a8a054a150ed6cc318b163d",
"assets/assets/images/projects/design_patterns.png": "0274f5986b14139edd72021ccbd1326c",
"assets/assets/images/projects/animated_buttons.png": "6adf04371ccfdb14959e97d8eee42250",
"assets/assets/images/projects/graphql_notes.png": "45eda8f8a37c58819a6100631b8c7465",
"assets/assets/images/projects/the_golden_land.png": "c862492f15f121d0f849779928c76f74",
"assets/assets/images/projects/ssa.png": "f587665108e4cf102c487dc7620d58f0",
"assets/assets/images/projects/notee.png": "264a912225cccd84854bd8ffe39658b3",
"assets/assets/images/projects/ggone.jpg": "4212f1730f81119ff06eb14a10a8d36a",
"assets/assets/images/projects/legacy_marker.png": "5b7b6448ba7df74f276459ff24d90297",
"assets/assets/images/projects/pulse_x.png": "4583c5c8f45338f72f4ac6001faff5ca",
"assets/assets/images/projects/mptv.png": "c05a896705c24c3b6db7f0b46d79c1a7",
"assets/assets/images/projects/my_life_compass.png": "a2569647a4053081cb191ecd3f6e1f38",
"assets/assets/images/projects/ai_chat_bot.png": "9d41e8eb12bb98afd6007d8a788839df",
"assets/assets/images/projects/woocomers.png": "68b064031a0b95a308e2243394ebb9e2",
"assets/assets/images/projects/docklyne.png": "647af03d20402d9fe1825fe1950f91f6",
"assets/assets/images/projects/thread.png": "23c161c332c9518d5a6910b17d70d814",
"assets/assets/images/projects/iron_man.png": "8708dc927d907d844431378307225a16",
"assets/assets/images/projects/stable_hub.png": "035764404a77677e3dec9ab81ee0ffa2",
"assets/assets/images/certificates/coursera.png": "8c1b41d7d6ae0798e8a5d910dc74a115",
"assets/assets/images/certificates/machine_learning.jpg": "9421fb6e755a71cc38ed911b5f25945f",
"assets/assets/fonts/shantell_sans/ShantellSans-Regular.ttf": "eea56a073c0622f7157892918d1c336b",
"assets/assets/fonts/shantell_sans/ShantellSans-Medium.ttf": "e7e23424662df693e295dbce4e29ab57",
"assets/assets/fonts/shantell_sans/ShantellSans-ExtraBold.ttf": "7f33160b6a6ff926451c11fa753659cd",
"assets/assets/fonts/shantell_sans/ShantellSans-SemiBold.ttf": "70f404c91428f6427571f1684a62ba56",
"assets/assets/fonts/shantell_sans/ShantellSans-Light.ttf": "4c7abd86e9797d0c26f93f5fb34ce938",
"assets/assets/fonts/shantell_sans/ShantellSans-Italic.ttf": "dd649de8940523775efcace606541e62",
"assets/assets/fonts/shantell_sans/ShantellSans-Bold.ttf": "3f27bd4b2d3b52e2a070784ccc0bb6f2",
"assets/assets/fonts/poppins/Poppins-ExtraLight.ttf": "a0f2eadb0002101ea5da28381ce16cde",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "1bb10326b972c92be6c59c048a4327e4",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "614a91afc751f09d049231f828801c20",
"assets/assets/fonts/poppins/Poppins-ExtraBold.ttf": "4252dae8574e434c7bb0127b8ffd06df",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "cd6b896a19b4babd1a2fa07498e9fc47",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "124cd57d8f41f6db22a724f882dca3f4",
"assets/assets/fonts/poppins/Poppins-Black.ttf": "9a3a3c0803219892727ed9d85ad5caea",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "0fc985df77c6b59d37e79b97ed7fb744",
"assets/assets/fonts/poppins/Poppins-Italic.ttf": "07502c4fe46025097dd8b1e331182ee0",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206"};
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
