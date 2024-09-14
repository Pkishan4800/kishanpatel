'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "1c60262dfb47d3a579c92c96cf28b923",
"/": "1c60262dfb47d3a579c92c96cf28b923",
"main.dart.js": "458410a798b864d9454f56a5a6d52493",
"flutter.js": "7d69e653079438abfbb24b82a655b0a4",
"favicon.jpg": "b78cc9f9507d33e2f7a02392d1dbf481",
"favicon.png": "e3ba0936cce0ed61f1884210da59afbc",
"icons/Icon_logo192.jpg": "b78cc9f9507d33e2f7a02392d1dbf481",
"icons/Icon-192.png": "45ccc3c17e417eb1ae5cf520c65d3f90",
"icons/Icon_logo.png": "849777546ff886f0d888799215546437",
"icons/Icon-maskable-192.png": "45ccc3c17e417eb1ae5cf520c65d3f90",
"icons/Icon-maskable-512.png": "8e7d731479c8e7407e6cc7a4038518fb",
"icons/Icon-512.png": "8e7d731479c8e7407e6cc7a4038518fb",
"manifest.json": "7edbf6423992e0d26df8e9a268c6a37c",
".git/ORIG_HEAD": "fff40d99f4e0d2fa00f166aa5c9d732c",
".git/config": "a01bfa5b94a46799e27d3c3babd75745",
".git/objects/0c/18e7b05a4231233e6f72c11f07714bc177241c": "41170dd5c08b28c14acc729f836f8fdb",
".git/objects/50/05d57c9159facf09bd8cb701dcf7038e5501cc": "cd48087810f25bf86ae03f9e0c03ff42",
".git/objects/57/77e8185e3798dbac3923ab813c33327848adbb": "ff5c34811470b15aedcb403f02c285ec",
".git/objects/3b/07d0176f6cb778ff1477521f218168e3fa85a6": "16c6eda7e5619d6fe994a7bace691766",
".git/objects/6f/375b1d0e66776874b149cb148817df39667b4c": "c357adc7191a0ef850650dd72522d43c",
".git/objects/9e/70fb7a5fa8d2aecb816eda3c6280e7f61a3a9a": "d8ac92e5d27bb33fcd7f085026d2f033",
".git/objects/32/27f9b436de8481c8c47df91c6f7bbf35268be2": "87bf02ab411b99b9448a1bd6829356e7",
".git/objects/0b/685768326d27d7a755447765a257226cd30dce": "c607d9fc184df2d38925096eec8150f9",
".git/objects/0e/04aae3cff29264d76efcde81e4558506a822ad": "96176a3b7067293875941eef7b203440",
".git/objects/5f/734a7bdc95ce389987525f958f59fc892634aa": "ba0e65b05603324630b3222b5c9c00de",
".git/objects/9d/4c917586cefde710011415cfa7604d3eafb83a": "b8736179086d291cbc306114a11ed5be",
".git/objects/02/ce62838cd1ea1d09a74be2a9f0e7934c9408a5": "cb367d24ca0e29a2647b6d6b6d6f2ac1",
".git/objects/b5/7a9cb71622731f8c9c748b0adb67c8ce946edc": "6f65673652e77bd8282b063a1a54e891",
".git/objects/bb/9f1a3eb9de0e45196855efd15079dbcff504de": "e1000efa2effd49632a6f9ec7fa11d89",
".git/objects/da/8a0cc7d2a619d41369836c534a0d5275789e9b": "7a31c0d99cd064649cfa0a18cf7b318b",
".git/objects/d1/1c0e6ebdf07861f74c5f75b86b4fd419872feb": "34637fde235e7c4b06edd809502bf29b",
".git/objects/f4/fab32f2cbf88efdd244dc9079f23f0c6556c40": "a8e4f77851d3b453af7d16c0b8c66d48",
".git/objects/c0/38c1d5b74a57bec7eca1dbc31041cd0333d6b3": "3e5175ccf07f5bcaad1fdd42f819dcb4",
".git/objects/e3/46702b4e756be77b872a4bf8b111c1d2ae6436": "d9fa80772fa8ed2694f17f418cc23101",
".git/objects/fb/10f0d9677181bd89c191234962c9ebcead1bf0": "2576400aeacbbc466b138f54b382006d",
".git/objects/7d/4a03ce6dd1c5a92bd395b775239d67904447dd": "37d367a4ff51a16ea76bea35282b6767",
".git/objects/16/4a218a7ef6309d18f56b6fbc042bf8a8995cdc": "7b78469664b6f3dfdd96cbef0feb2c1d",
".git/objects/42/1918e89dd279799c6f8fc333a53e89261a205a": "4b33940b0f698ae965348cf6f88d944e",
".git/objects/45/315eafe4802d20efc011aa62dd4f76fc7fa5d3": "f194fd06dcac0c57a20fa251f3339a7e",
".git/objects/74/39ce777d1fb6337642d1c8a70a23c385ab46de": "3f5c7c46b7c0decfb1854df968c4abae",
".git/objects/8a/b06e39c96a5502e0e4808ef7459ee86d488be6": "da4b85bb0df0e8a6311fde9d599367fd",
".git/objects/10/19069ebcc7ed76c9151cfbaff75c57b60524c0": "a24a95aae8a16410a8432092ebe25e59",
".git/objects/4c/41d512da32478ba67d493b47e9bcca5204b75f": "7eea493ec8075f18581489cac1bd85a8",
".git/objects/75/6620a9d7127fe309d1afeb01bbb16c3adeeb41": "1d4359fc2fd211ad91bf7f84a2134d57",
".git/objects/43/b50d2f159126316c627438440f0a8739b8fc12": "260c881b5656665b276c9f0aa3a95d58",
".git/objects/88/00cc2bdfedceef0d4a2de842b3e6d7ea56a950": "ed15711e412e3264af4c6f2416ffb58b",
".git/objects/5c/10db30b83cef17493035130bc25eab8e995d7f": "8d33406104580a47a9d2c82009d6b600",
".git/objects/3a/9e0ad263f62963f4c3ab2040b06cac81389704": "e7722e900d610f82a797c69be120d3b9",
".git/objects/5e/0a8bb7edf183daf684d52d7381e10fa6140d82": "22cfedfbd94489b4026bd3b978f18dd7",
".git/objects/01/4a41db1d173b7dd236100450bac7cc397227c9": "2ed6f33baac711d9dfe03fee9bb9cb7a",
".git/objects/06/c8a79bfd111477f1f42220ec78fd83aea88036": "be598612b345a5cd147d407495359639",
".git/objects/52/fc07aa51f1bf495429ee8dc31e9233a4c04b65": "fe924029a22f1c09851980223c2dfd97",
".git/objects/63/07c856cd8636414b7159c9ba132d38ec973d83": "5db4b267301373439d81c6d9dd210025",
".git/objects/0a/d5e9a5046457b04319f1b1bda4375160700df1": "49c4e96df2df023002d445cd855d4d79",
".git/objects/bf/2c2d3db3736584752c2c65636882edb48a4be7": "1327713fcbf9ff0fa9da5dd8fcc2c34f",
".git/objects/ba/a593cc7a0b8166084908e957f87b0eb5cfaf5c": "95d90e5a31e4140c40353ae80ed876f4",
".git/objects/a0/61b66d47e4d90aba779df749dbd947decb32d3": "7c653d35acb376c5ff3687399830659f",
".git/objects/db/7860b9f0cada9a352d169c9118943c1b8af9ee": "f3838fb586e422f79bf3716dc0a0e06a",
".git/objects/db/7e4d73ef65092eeecd7bb1dea6be70c67b1ba9": "4c8406de18f05d50aac6a5cf488ceebf",
".git/objects/a8/61128dd71c9bb75ba7c2070f775ff609722864": "7f5b731b20c4cd0daabfe6c9bb0c9814",
".git/objects/ef/3020b0fea7419c9ef4cb29499dcb5a1c90ab5c": "ea6480b354ab26f14f1c46afa38aa472",
".git/objects/c3/d5fcb30e18b4a97be951505eca8acc5c3c2f7b": "31d3abfdad1ab8776aac0d270d5131eb",
".git/objects/ea/fa0c32306e4aec2f37028b5b8f79e60a952316": "a904f60aeb31879fb48d7f492ae009af",
".git/objects/ff/ad18cb82d269742a588021805cf577934e61f3": "0bb4fcd63380dae3864d2ca384b80c5d",
".git/objects/f8/cea9b5dfbe082eb4d6dd97ae20fedb1803a853": "92f4558260a52ad3c9bb58c30929db05",
".git/objects/ce/9d9550862bbb0adf6f60f50cc1febe08f62c60": "8b1387c53db22ef7b6df95ebbeb0ae19",
".git/objects/77/9f2408e31cb9295e2771ce0900adcdefdd0d47": "eb40bd2c49e3e06f297be5d054062cf6",
".git/objects/24/d97ab42b6a61353b69174ed06c68fd8329e1c0": "4d5d2b2cf95edaf003c8f7373eee787b",
".git/objects/8d/55f32a2744438b8011379c2f4dfcf77a775900": "68ecbdf73c59940702a88c1a980ef804",
".git/objects/15/41d111542349206861c619ef4980cb97c88624": "67eee2382f035585f92c9d1cb78b243e",
".git/objects/1d/e3e0ce0d27aa17b0e60a61c9c66eae1b74788f": "415eb3dfb15a8cecb0691a3b337744c9",
".git/objects/40/ddea80c3189bbdbee1f21dd3e5ba721268b70e": "75dc30d3102b65a8af48cfb285276026",
".git/objects/40/b1694205d7f1e3745b29369c6a2b6d7a8a67ec": "d32315e67c43ea9a2ae520c03509b1ca",
".git/objects/8b/482ea5b2b070d6d6f0250b9633d49520aa58ee": "6f8a8d6e56f856b2241db3dd9d8720e3",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "09c3869691f08da94c732a631a596e69",
".git/logs/refs/heads/main": "09c3869691f08da94c732a631a596e69",
".git/logs/refs/remotes/origin/main": "3e774cdb96a784513ee6d7b2b9527153",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "f7952c6d6c4e53798bd9bf4e99574fa8",
".git/refs/remotes/origin/main": "f7952c6d6c4e53798bd9bf4e99574fa8",
".git/index": "a6bfe6d4ab9244beb49d22bf539601d3",
".git/COMMIT_EDITMSG": "01d8dbbeb2e678cdbca8ff34dec3601f",
".git/FETCH_HEAD": "2f86d6e5cd5b6ff6bdb7ed87f2e965fc",
"assets/AssetManifest.json": "3f10c96c0cd2246ea0e37a057c03da96",
"assets/loading.gif": "602efadf1bcfb2d6b7ac7bf3c91430a2",
"assets/NOTICES": "edf1191c49d374c52d389489083569f2",
"assets/FontManifest.json": "627ac7ed1cb4c5ad68600fb51e364682",
"assets/AssetManifest.bin.json": "182a5065d0141b2e2e596ccceb8daad2",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "a184a024a6982633e3b514d4f0d5aacc",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"assets/AssetManifest.bin": "376818a46ebe1ff3ccfafd5682c47880",
"assets/fonts/agustina/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/fonts/MaterialIcons-Regular.otf": "b52808737bf41665af131fbe91fc716a",
"assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/assets/images/inikart/03.webp": "12c6befab8f888009d63218000ee96db",
"assets/assets/images/inikart/02.webp": "ef8450d8f782723c3e1f91afaff948a4",
"assets/assets/images/inikart/04.webp": "30714f43f5def5ba8d641556c691db12",
"assets/assets/images/inikart/01.webp": "e713016f521ce9ffb06be2a37dac011c",
"assets/assets/images/kp_logo.png": "b05ef6081d75249a286536738af0ad90",
"assets/assets/images/kp_logo.jpg": "cc88c2e50a7a5457b6ee1fc770d45c90",
"assets/assets/images/android.svg": "0a04451ad3b5886234ef80268c803e46",
"assets/assets/images/dev_img.png": "b6b5ea00e11fb2b73aeb72f0293cc63f",
"assets/assets/images/portfolio_icon.png": "7cb8fcd768c7538bd9c9efd457a0df18",
"assets/assets/images/fightermeme/03.webp": "d2ff8228981243a65e27fad71665eda7",
"assets/assets/images/fightermeme/02.webp": "2893788b9cd165b9b81ae44d15a52b17",
"assets/assets/images/fightermeme/04.webp": "a7c346688018cb27b500d3f8142edf3c",
"assets/assets/images/fightermeme/bd1e80b6-8606-47fa-9982-4a0cfc00d310_3.jpeg": "1c445a20f8891b6cff5ed02fbfe42fc1",
"assets/assets/images/fightermeme/01.webp": "64b06daf46e5670583eeb4bf21dc927d",
"assets/assets/images/ruler.svg": "4791ae452335f1ba68a2787f872f3e5f",
"assets/assets/images/onlinekaka/03.webp": "d93efb1335d1f913450eddf90034726a",
"assets/assets/images/onlinekaka/02.webp": "72597e6f998637ae69ee8c5b55586130",
"assets/assets/images/onlinekaka/01.jpg": "efc681cb4dbe19ef9324e2377a12a8fb",
"assets/assets/images/onlinekaka/logo.webp": "33a7bec3c1bc70d75240b9d27404f048",
"assets/assets/images/onlinekaka/04webp.webp": "d3816134d8879890e17b5b23ca7992d8",
"assets/assets/images/slider.svg": "a4fc3ee8b34de4bfab375880f4297c49",
"assets/assets/images/myupchar/03.webp": "9e4263d636ddc42f548d1f3288489d45",
"assets/assets/images/myupchar/02.webp": "4e31b227d0f497ade8f72f11af6356db",
"assets/assets/images/myupchar/04.webp": "7ee509fa8c73b0c488f42f8ce253eb68",
"assets/assets/images/myupchar/01.webp": "5304a249503497325b9e716e16e05708",
"assets/assets/images/upwork.png": "747ca0fe09496d662e862c69f84aa41d",
"assets/assets/images/nutrady/03.webp": "021105e58cdf18a0a2eb6582ec25d424",
"assets/assets/images/nutrady/02.webp": "22a3f6145cf7c8cf7f8c832be9c21f7c",
"assets/assets/images/nutrady/05.webp": "8d88ea472d05ded3894f7a63f98ac9e8",
"assets/assets/images/nutrady/04.webp": "0ce4d5ae21d748e1d2ed1cf2f399cf0e",
"assets/assets/images/nutrady/01.webp": "c03838b2dcbceccea12c22a4f1c4cea0",
"assets/assets/images/goodapp/03.webp": "4f8c44537d88da66b4fe99f54ad2a2b3",
"assets/assets/images/goodapp/02.webp": "172bb7d84ac80e13b7230c9b583d94e6",
"assets/assets/images/goodapp/05.webp": "ed7aa7e2b4bfcb9a61e7304d47cdd2d1",
"assets/assets/images/goodapp/04.webp": "cf412f0d70dc163add6dabb1ea7cce38",
"assets/assets/images/goodapp/01.webp": "a34a771f417f8103abd1ffd2ba4071e0",
"assets/assets/resume.pdf": "67cab585c2c933367cbf83acc4ea8939",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/services/app.png": "9d2da88edb7f550ef24874b306b4ae12",
"assets/assets/services/open_b.png": "b65517dd1a07922b014409bb8dcb1e81",
"assets/assets/services/rapid.png": "8d3ff9fbdddae77403af46662f011ee8",
"assets/assets/services/fiverr.png": "9d4018924e1f0e983a86e7eaf8a0958b",
"assets/assets/services/blog.png": "5e1cbb2c67e2b8ea9ae4bcce0705d2a4",
"assets/assets/services/open.png": "4a5996597d32b06d91183f0860c29aab",
"assets/assets/services/ui.png": "3cf727247752b730a05f51fe0177036f",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
