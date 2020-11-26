importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

if (workbox) {
    console.log(`Workbox berhasil dimuat`);
    workbox.precaching.precacheAndRoute([{
            url: "/",
            revision: '1'
        },
        {
            url: "/index.html",
            revision: '1'
        },
        {
            url: "/detail.html",
            revision: '1'
        },
        {
            url: "/favorit.html",
            revision: '1'
        },

        {
            url: "manifest.json",
            revision: '1'
        },

        {
            url: "/src/css/materialize.min.css",
            revision: '1'
        },
        {
            url: "/src/css/styles.css",
            revision: '1'
        },
        {
            url: "/src/css/cdn/font-awesome.min.css",
            revision: '1'
        },
        {
            url: "/src/css/cdn/material-font.css",
            revision: '1'
        },

        {
            url: "/src/js/materialize.min.js",
            revision: '1'
        },
        {
            url: "/src/js/ui.js",
            revision: '1'
        },
        {
            url: "/src/js/app.js",
            revision: '1'
        },
        {
            url: "/src/js/api.js",
            revision: '1'
        },
        {
            url: "/src/js/idb.js",
            revision: '1'
        },
        {
            url: "/src/js/database.js",
            revision: '1'
        },
        {
            url: "/src/js/jquery.min.js",
            revision: '1'
        },
        {
            url: "src/js/materialize-tabs-work.js",
            revision: '1'
        },
        {
            url: "/push.js",
            revision: '1'
        },

        {
            url: "/src/img/logo/logo.png",
            revision: '1'
        },
        {
            url: "/src/img/logo/logo192.png",
            revision: '1'
        },
        {
            url: "/src/img/logo/logo144.png",
            revision: '1'
        },
        {
            url: "/src/img/logo/logo512.png",
            revision: '1'
        },
    ], {
        ignoreUrlParametersMatching: [/.*/]
    });

    workbox.routing.registerRoute(
        new RegExp('https://api.football-data.org/v2/'),
        workbox.strategies.staleWhileRevalidate()
    );

} else {
    console.log(`Workbox gagal dimuat`);
}


self.addEventListener('push', event => {
    var body;
    if (event.data) {
        body = event.data.text();
    } else {
        body = 'Push message no payload';
    }
    var options = {
        body: body,
        icon: 'icon.png',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        }
    };
    event.waitUntil(
        self.registration.showNotification('Push Notification', options)
    );
});