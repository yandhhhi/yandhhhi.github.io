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
    "endpoint": "https://fcm.googleapis.com/fcm/send/d0-9LfhyfbI:APA91bGOSEAStAB0WjUtTSQnpJyw__FbKdLynwFmIZ_D-H3AvK2bkGdSo8IxAHUqNPs7MCUvbk-0ob5RMu1hQMoAJL7NyPdzA1v5-6GKcj5pdbuew_JcpaHrSEnpN9fyL33IpUQxZwlH",
    "keys": {
        "p256dh": "BFpAWiDmEEPl9EFxUe+xZ/xkOmjRcq4GU1WdQH8X1T+Eut6247wbxOf7Wy1ZMv3dwdcy0IiHYlV8UZeuy4Olu0Y=",
        "auth": "QuTrcnZRmOQM4ygd3GWp1g=="
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