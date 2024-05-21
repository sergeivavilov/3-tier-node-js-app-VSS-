var express = require('express');
var router = express.Router();
var request = require('request');

var ipAddress = process.env.IP_ADDRESS || '10.7.110.213';  // Default IP address if not set in environment
var api_url = 'http://' + ipAddress + '/api/status';
// var api_url = process.env.VARIABLE + '/api/status';

/* GET home page. */
router.get('/', function (req, res, next) {
    request({
        method: 'GET',
        url: api_url,
        json: true
    },
        function (error, response, body) {
            if (error || response.statusCode !== 200) {
                return res.status(500).send('error running request to ' + api_url);
            } else {
                res.render('index', {
                    title: 'Frontend - Hi upcoming DevOps Engineers, how is hands-on?',
                    request_uuid: body.request_uuid,
                    time: body.time
                });
            }
        }
    );
});

module.exports = router;