importScripts('https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js');

console.log('This is my custom service worker');

workbox.precaching.precacheAndRoute([
  {
    "url": "app.js",
    "revision": "699b36b672e915a856d8a24819bae608"
  },
  {
    "url": "bootstrap/dist/css/bootstrap-theme.css",
    "revision": "b9b46bcc4dad6cc90fc4f95073c50735"
  },
  {
    "url": "bootstrap/dist/css/bootstrap-theme.min.css",
    "revision": "ab6b02efeaf178e0247b9504051472fb"
  },
  {
    "url": "bootstrap/dist/css/bootstrap.css",
    "revision": "2a31dca112f26923b51676cb764c58d5"
  },
  {
    "url": "bootstrap/dist/css/bootstrap.min.css",
    "revision": "ec3bb52a00e176a7181d454dffaea219"
  },
  {
    "url": "bootstrap/dist/fonts/glyphicons-halflings-regular.eot",
    "revision": "f4769f9bdb7466be65088239c12046d1"
  },
  {
    "url": "bootstrap/dist/fonts/glyphicons-halflings-regular.svg",
    "revision": "89889688147bd7575d6327160d64e760"
  },
  {
    "url": "bootstrap/dist/fonts/glyphicons-halflings-regular.ttf",
    "revision": "e18bbf611f2a2e43afc071aa2f4e1512"
  },
  {
    "url": "bootstrap/dist/fonts/glyphicons-halflings-regular.woff",
    "revision": "fa2772327f55d8198301fdb8bcfc8158"
  },
  {
    "url": "bootstrap/dist/fonts/glyphicons-halflings-regular.woff2",
    "revision": "448c34a56d699c29117adc64c43affeb"
  },
  {
    "url": "bootstrap/dist/js/bootstrap.js",
    "revision": "fb81549ee2896513a1ed5714b1b1a0f0"
  },
  {
    "url": "bootstrap/dist/js/bootstrap.min.js",
    "revision": "5869c96cc8f19086aee625d670d741f9"
  },
  {
    "url": "bootstrap/dist/js/npm.js",
    "revision": "ccb7f3909e30b1eb8f65a24393c6e12b"
  },
  {
    "url": "bootstrap/fonts/glyphicons-halflings-regular.eot",
    "revision": "f4769f9bdb7466be65088239c12046d1"
  },
  {
    "url": "bootstrap/fonts/glyphicons-halflings-regular.svg",
    "revision": "89889688147bd7575d6327160d64e760"
  },
  {
    "url": "bootstrap/fonts/glyphicons-halflings-regular.ttf",
    "revision": "e18bbf611f2a2e43afc071aa2f4e1512"
  },
  {
    "url": "bootstrap/fonts/glyphicons-halflings-regular.woff",
    "revision": "fa2772327f55d8198301fdb8bcfc8158"
  },
  {
    "url": "bootstrap/fonts/glyphicons-halflings-regular.woff2",
    "revision": "448c34a56d699c29117adc64c43affeb"
  },
  {
    "url": "bootstrap/grunt/bs-commonjs-generator.js",
    "revision": "5fe1dfe91713b6707426ae8409d8dd5d"
  },
  {
    "url": "bootstrap/grunt/bs-glyphicons-data-generator.js",
    "revision": "5dd2716ebfffc9ef3f28fe67e8ae51d1"
  },
  {
    "url": "bootstrap/grunt/bs-lessdoc-parser.js",
    "revision": "c38c42bedfd206a384eff550872c76e3"
  },
  {
    "url": "bootstrap/grunt/bs-raw-files-generator.js",
    "revision": "62dc129ecc688d30023efad29e47c43e"
  },
  {
    "url": "bootstrap/grunt/change-version.js",
    "revision": "6ed38b1232de40ee64c0691d60c6518a"
  },
  {
    "url": "bootstrap/Gruntfile.js",
    "revision": "87045c78d2be8288de1d2efbba487953"
  },
  {
    "url": "bootstrap/js/affix.js",
    "revision": "76d0f746d06d24675053cf712c832ff8"
  },
  {
    "url": "bootstrap/js/alert.js",
    "revision": "facbbd4e8afa141b7341ea417d8af151"
  },
  {
    "url": "bootstrap/js/button.js",
    "revision": "c4c661f012bbd357893f925e18de01a2"
  },
  {
    "url": "bootstrap/js/carousel.js",
    "revision": "fdcec9762e6028f443113b7664fdff4f"
  },
  {
    "url": "bootstrap/js/collapse.js",
    "revision": "d76d9e35b465bc2773ed6306169524bc"
  },
  {
    "url": "bootstrap/js/dropdown.js",
    "revision": "45aa760b64065a1d9025f9f3982f8cfe"
  },
  {
    "url": "bootstrap/js/modal.js",
    "revision": "5cc53746133c2e8e639a6df9a299a14a"
  },
  {
    "url": "bootstrap/js/popover.js",
    "revision": "0d19a9c5c9ccdb8d81583badcebb57f6"
  },
  {
    "url": "bootstrap/js/scrollspy.js",
    "revision": "916e7d014861d391f425951bc6a6b9b1"
  },
  {
    "url": "bootstrap/js/tab.js",
    "revision": "2a1d3172ce3411d32338e466ae507601"
  },
  {
    "url": "bootstrap/js/tooltip.js",
    "revision": "dd4086570011e65a42a27de92e33b418"
  },
  {
    "url": "bootstrap/js/transition.js",
    "revision": "db7d039381f3a80c478fb67652c30155"
  },
  {
    "url": "bootstrap/less/alerts.less",
    "revision": "d6b62e1b2aeb1a17888f53e9af6ae4e9"
  },
  {
    "url": "bootstrap/less/badges.less",
    "revision": "de15d43dedc67cc2e8d9d237be5ef607"
  },
  {
    "url": "bootstrap/less/bootstrap.less",
    "revision": "09197de4524897eda1846f2e817ffc79"
  },
  {
    "url": "bootstrap/less/breadcrumbs.less",
    "revision": "7dce9541e6a59de6301403a7d25036fa"
  },
  {
    "url": "bootstrap/less/button-groups.less",
    "revision": "62882740d5c5116533067df4c1be9738"
  },
  {
    "url": "bootstrap/less/buttons.less",
    "revision": "c8402788b4a34b88f2eb20cf94c81a26"
  },
  {
    "url": "bootstrap/less/carousel.less",
    "revision": "0a84ea62431787a47a83dd7ec2cf95c1"
  },
  {
    "url": "bootstrap/less/close.less",
    "revision": "d1106a9df41e0ef26a376551b5bbfd15"
  },
  {
    "url": "bootstrap/less/code.less",
    "revision": "3c1f555d2382fdced70cfe1662631f71"
  },
  {
    "url": "bootstrap/less/component-animations.less",
    "revision": "f7605695861c6f68a422d5fa9a936845"
  },
  {
    "url": "bootstrap/less/dropdowns.less",
    "revision": "0cdd3248330a2c7016ed24848d663abb"
  },
  {
    "url": "bootstrap/less/forms.less",
    "revision": "bae7df475936652d941c85baba09f03b"
  },
  {
    "url": "bootstrap/less/glyphicons.less",
    "revision": "0eb21c0945a9fa86089de5c87bb34bf4"
  },
  {
    "url": "bootstrap/less/grid.less",
    "revision": "c27679fdc7a793f3ef833ad1136a957f"
  },
  {
    "url": "bootstrap/less/input-groups.less",
    "revision": "d39bd0726ec9fdfa76efd44c84213476"
  },
  {
    "url": "bootstrap/less/jumbotron.less",
    "revision": "5005b8a728613151f464fb62986e352f"
  },
  {
    "url": "bootstrap/less/labels.less",
    "revision": "18e545cfb7385e21c753ba236824210a"
  },
  {
    "url": "bootstrap/less/list-group.less",
    "revision": "6781d24f5d2c3f947fe2b70ed9d53f77"
  },
  {
    "url": "bootstrap/less/media.less",
    "revision": "91aa028d54785b36583c19020bba9f00"
  },
  {
    "url": "bootstrap/less/mixins.less",
    "revision": "c0fdbbc84dd248331b77828eee0c1c40"
  },
  {
    "url": "bootstrap/less/mixins/alerts.less",
    "revision": "78aa25760d223bf51d8d4edf59c2d384"
  },
  {
    "url": "bootstrap/less/mixins/background-variant.less",
    "revision": "fd2eb11bccb993c98976fb5327227435"
  },
  {
    "url": "bootstrap/less/mixins/border-radius.less",
    "revision": "30d64faff1cc98361fb1ec89b4e29418"
  },
  {
    "url": "bootstrap/less/mixins/buttons.less",
    "revision": "8bccb28c6d0f34dcc9467b9996717562"
  },
  {
    "url": "bootstrap/less/mixins/center-block.less",
    "revision": "e2328a0e18978ca3f20412c36b014865"
  },
  {
    "url": "bootstrap/less/mixins/clearfix.less",
    "revision": "8e9c9440f515f1586205aa595ae713ba"
  },
  {
    "url": "bootstrap/less/mixins/forms.less",
    "revision": "92448ff5635fdcbe1322dd36929be43f"
  },
  {
    "url": "bootstrap/less/mixins/gradients.less",
    "revision": "7f6754b3b31e2ad1272360e5a7d72124"
  },
  {
    "url": "bootstrap/less/mixins/grid-framework.less",
    "revision": "efb1d144197b84e10443192aec00a353"
  },
  {
    "url": "bootstrap/less/mixins/grid.less",
    "revision": "310c728bfe4a1c01d8c66f5608aaf1c4"
  },
  {
    "url": "bootstrap/less/mixins/hide-text.less",
    "revision": "2d2fe90f1526369c60d07301b44e9f6d"
  },
  {
    "url": "bootstrap/less/mixins/image.less",
    "revision": "0af48a82a48f4a2e0ae68afdc5295e5f"
  },
  {
    "url": "bootstrap/less/mixins/labels.less",
    "revision": "d3c6a97bacf167db12bb187f1ebc4a15"
  },
  {
    "url": "bootstrap/less/mixins/list-group.less",
    "revision": "93df0c896c6224a0ae06207da241c14f"
  },
  {
    "url": "bootstrap/less/mixins/nav-divider.less",
    "revision": "846f793e8d601915b31d2d7699bc35ab"
  },
  {
    "url": "bootstrap/less/mixins/nav-vertical-align.less",
    "revision": "a9e830f1c39bd7e89679fe6ea200763c"
  },
  {
    "url": "bootstrap/less/mixins/opacity.less",
    "revision": "1be3f12daf02e4f36a4b7896b377c773"
  },
  {
    "url": "bootstrap/less/mixins/pagination.less",
    "revision": "b8d42af1e1ae77a37d1ac23e897d5761"
  },
  {
    "url": "bootstrap/less/mixins/panels.less",
    "revision": "2d317d8386b126f6bd80a946e6c0ebf4"
  },
  {
    "url": "bootstrap/less/mixins/progress-bar.less",
    "revision": "7039dc30596272eaf95604ce46532263"
  },
  {
    "url": "bootstrap/less/mixins/reset-filter.less",
    "revision": "ff42fe79f10deeaea892af691711fa33"
  },
  {
    "url": "bootstrap/less/mixins/reset-text.less",
    "revision": "fc56fc793a8db0ac7742dcd653c10b99"
  },
  {
    "url": "bootstrap/less/mixins/resize.less",
    "revision": "b6ef275960e5f97b064c1aff7d6b3951"
  },
  {
    "url": "bootstrap/less/mixins/responsive-visibility.less",
    "revision": "7061bdbd465d1cb633383dfa0f75fcc7"
  },
  {
    "url": "bootstrap/less/mixins/size.less",
    "revision": "cb591f72667a90bbc04e539332278019"
  },
  {
    "url": "bootstrap/less/mixins/tab-focus.less",
    "revision": "512a921c083c8e41eb9686220e58d82d"
  },
  {
    "url": "bootstrap/less/mixins/table-row.less",
    "revision": "3b3855aeeb76f7dd6868d68303d18a2e"
  },
  {
    "url": "bootstrap/less/mixins/text-emphasis.less",
    "revision": "aa5d8a89db932a62dd90720c90e8e6e8"
  },
  {
    "url": "bootstrap/less/mixins/text-overflow.less",
    "revision": "97f3e435fd0a2d7734213f94483a685e"
  },
  {
    "url": "bootstrap/less/mixins/vendor-prefixes.less",
    "revision": "6798cdee38fc117d8f53f14754dfcf36"
  },
  {
    "url": "bootstrap/less/modals.less",
    "revision": "bbf6f38171d49cf5d993521ec2b0af12"
  },
  {
    "url": "bootstrap/less/navbar.less",
    "revision": "829c59127f7339c17e803cae87017261"
  },
  {
    "url": "bootstrap/less/navs.less",
    "revision": "8a6cb19b0b4bd8e16c6b2aa5b834c184"
  },
  {
    "url": "bootstrap/less/normalize.less",
    "revision": "a81f00910a701c842ede4f497c191c80"
  },
  {
    "url": "bootstrap/less/pager.less",
    "revision": "e4ba7eaa37b76f58f65cef48cbdcea52"
  },
  {
    "url": "bootstrap/less/pagination.less",
    "revision": "b70365e40424a2bffa41eaca9dfc99f8"
  },
  {
    "url": "bootstrap/less/panels.less",
    "revision": "52fc72dfce69a912c87acff7d4982994"
  },
  {
    "url": "bootstrap/less/popovers.less",
    "revision": "8aa5fae6c5138b6b9998d4e613645f4c"
  },
  {
    "url": "bootstrap/less/print.less",
    "revision": "b6fef93d5689af1a0467c8fc8e9959d9"
  },
  {
    "url": "bootstrap/less/progress-bars.less",
    "revision": "620d57934cdd4e984919a7d0e2bd7173"
  },
  {
    "url": "bootstrap/less/responsive-embed.less",
    "revision": "2c7057d9a90998866bf84c1112caf631"
  },
  {
    "url": "bootstrap/less/responsive-utilities.less",
    "revision": "8a64c69dcfc081a7858285f1ab2992f5"
  },
  {
    "url": "bootstrap/less/scaffolding.less",
    "revision": "e2acc4e2bca8a6ca27ce70f4a285d39d"
  },
  {
    "url": "bootstrap/less/tables.less",
    "revision": "6480c1133eeb09ad0154eb33edff35d8"
  },
  {
    "url": "bootstrap/less/theme.less",
    "revision": "786caab8fa903d3b302343cb7148027a"
  },
  {
    "url": "bootstrap/less/thumbnails.less",
    "revision": "2f0e86101267acacdd1466ea36044f3e"
  },
  {
    "url": "bootstrap/less/tooltip.less",
    "revision": "746fc62c68f762055a26ecfa40ab655f"
  },
  {
    "url": "bootstrap/less/type.less",
    "revision": "ddd239090feb6015f4b0478c3d0cc50f"
  },
  {
    "url": "bootstrap/less/utilities.less",
    "revision": "f8baac5bf438a29cc1b58328974049a9"
  },
  {
    "url": "bootstrap/less/variables.less",
    "revision": "3bad216712c2397335528cd6c4f208cb"
  },
  {
    "url": "bootstrap/less/wells.less",
    "revision": "496407c34cd52fab0c1ca1d17f0353a1"
  },
  {
    "url": "bootstrap/package.js",
    "revision": "a21c03dc818cd8fec4eef90f56ac1a17"
  },
  {
    "url": "css/app.css",
    "revision": "9d39e37f2e41e659bd9a157e238adec8"
  },
  {
    "url": "favicon.ico",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "fonts/vendor/font-awesome/fontawesome-webfont.eot",
    "revision": "674f50d287a8c48dc19ba404d20fe713"
  },
  {
    "url": "fonts/vendor/font-awesome/fontawesome-webfont.svg",
    "revision": "912ec66d7572ff821749319396470bde"
  },
  {
    "url": "fonts/vendor/font-awesome/fontawesome-webfont.ttf",
    "revision": "b06871f281fee6b241d60582ae9369b9"
  },
  {
    "url": "fonts/vendor/font-awesome/fontawesome-webfont.woff",
    "revision": "fee66e712a8a08eef5805a46892932ad"
  },
  {
    "url": "fonts/vendor/font-awesome/fontawesome-webfont.woff2",
    "revision": "af7ae505a9eed503f8b8e6982036873e"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "8236edb7d528b4e06708bf83a4f3f598"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "ebfef60e8fba5360c0e68fa74801f7b7"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "8379c5b40904c3423e1786d70f08cb77"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "9312554550496b65da82a7a7665247dc"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "79af1caa934441c67c8cb0d4791bf5f5"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "afd05590a3f99a85edd2b00e95fbdbb0"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "3345a942b46c6361158d7596f319d18d"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "e1509907f6a4c9ce07045845e629329c"
  },
  {
    "url": "index.php",
    "revision": "b9901d13f00ef92e0793e2d9fcd57431"
  },
  {
    "url": "note.png",
    "revision": "343213cfb37c22789613e8a3db80ea0d"
  },
  {
    "url": "src-sw.js",
    "revision": "a5c3158e25d3849d6652c8274e0ba856"
  }
]);
workbox.googleAnalytics.initialize();

workbox.core.skipWaiting();
workbox.core.clientsClaim();

// This will work!
workbox.routing.registerRoute(
    new RegExp('\.png$'),
    new workbox.strategies.CacheFirst()
);

workbox.routing.setDefaultHandler(new workbox.strategies.NetworkFirst());