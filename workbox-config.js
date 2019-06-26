const WorkboxPlugin = require('workbox-webpack-plugin');
module.exports = {
    globDirectory: "public/",
    globPatterns: [
        "**/*.{js,css,eot,svg,ttf,woff,woff2,less,ico,png,php}"
    ],
    swDest: "public\\sw.js",
    swSrc: "public\\src-sw.js",
    templatedURLs: { //you should add the path to your blade files here so they can be cached
            //and have full support for offline first (example below)
        '/': ['resources/views/welcome.blade.php'],
        '/home': ['resources/views/home.blade.php']
    },
    globIgnores: ['**/.map', 'mix-manifest.json', 'manifest.json', 'sw.js'],
};
