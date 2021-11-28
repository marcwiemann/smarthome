var express = require('express');
var router = express.Router();

router.get("/", function(req, res, next) {
    res.send({
        header: "RaspHome",
        user: "Marc",
        rooms: [
            {
                room: "Wohnzimmer",
                id: 1,
                devices: [
                    {
                        device: "Ledstrip",
                        id: 1,
                        protocoll: "mqtt",
                        subscribe: "/home/led-strip1"
                    },
                    {
                        device: "Ledstrip",
                        id: 2,
                        protocoll: "mqtt",
                        subscribe: "/home/led-strip2"
                    },
                    {
                        device: "Licht",
                        id: 3,
                        protocoll: "mqtt",
                        subscribe: "/home/licht1"
                    }
                ]
            },
            {
                room: "Schlafzimmer",
                id: 2,
                devices: [
                    {
                        device: "Licht",
                        id: 4,
                        protocoll: "mqtt",
                        subscribe: "/home/licht2"
                    },
                    {
                        device: "Ledstrip",
                        id: 5,
                        protocoll: "mqtt",
                        subscribe: "/home/led-strip3"
                    }
                ]
            }
            
        ],
 });
});

module.exports = router;