var webPush = require('web-push');
const vapidKeys = {
    "publicKey": "BFmYYSTA708k-n8fOjvxq7qMqW_4aVNH_01tY88Mwp3wSoD50uk77kNCqe66hpBzJSLys_itW5H5wuUO-hxk-T8",
    "privateKey": "CZwwwN__Imu-o5gFgBbQf23zI0ph384H6Obw2I9Q6uw"
};

webPush.setVapidDetails(
    'mailto:mengujidancoba@gmail.com',
    vapidKeys.publicKey,
    vapidKeys.privateKey
);

var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/cRypR9sert8:APA91bEMb5emT0WEWMnQQh7KtvcYWqpo4MTlzq0lJzb3EeWjbX8VQnzBqLjKj6--5dDGgSknjLn8KtAYwZouy4mt7geDYwl9UF8TTPBbyo_BsWk4bs9d-pEXrZswfbG_XLxry_Xy0fQ5",
    "keys": {
        "p256dh": "BK07F6ob9WlkwkqgfRPqO2NMItW6/MriSZTcexk7p5GBwWwh2Q0dBpLZpRM4M0WfRgmi4l750My8wluTAusbAlk=",
        "auth": "4YrGJ+ZNOijcFE4PrW8raQ=="
    }
};

var payload = 'Here is a payload!';
var options = {
    gcmAPIKey: '384625262244',
    TTL: 60
};

webPush.sendNotification(
    pushSubscription,
    payload,
    options
);