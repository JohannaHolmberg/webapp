/**
 * Index.js
 */

import Router from './router/router';

var fs = require('fs');
var crypto = require('crypto');

var router = new Router();

router.get('/view', (req, res) => {
    fs.readdir('./view', (err, files) => {
        if (!err && files && files.length > 0) {
            // return only json files.
            files = files.filter((f) => f.includes('.json') || f.includes('.html'));
            res.json(files);
        } else if (err) {
            res.json({ err: err.message }, 500);
        } else {
            res.json({ err: 'No files found'}, 404);
        }
    });
});

router.get('/random', (req, res) => {


    function randomValueBase64(len) {
        return crypto.randomBytes(Math.ceil(len * 3 / 4))
            .toString('base64')
            .slice(0, len)
            .replace(/\+/g, '0')  // replace '+' with '0'
            .replace(/\//g, '0'); // replace '/' with '0'
    }

    var data = [];
    for (var i = 0; i < 10; i++) {
        data.push({
            names: randomValueBase64(12),
            numbers: Math.floor(Math.random() * (10000 - 10) + 10),
        });
    }

    res.json({
        title: 'Dynamic data',
        desc: 'Dynamic data in form of numbers and base64 randomBytes',
        data: data
    });
});


router.get('/view/:name', (req, res) => {
    var path = './view/' + req.params.name;

    fs.readFile(path, (err, content) => {

        if (!err && content) {

            // if (req.params.type && req.params.type === 'mustache') {
            //     res.json({
            //         data: {

            //         }
            //         template: content.toString(),
            //     })
            // }

            // Send the content and converts it to string from buffer.
            if (req.params.name.includes('.json')) {
                res.json(content.toString());
            } else {
                res.html(content.toString())
            }
        } else if (err) {
            res.json({ err: err.message}, 500);
        } else {
            res.json({ err: 'file not found'}, 404);
        }
    });
});

require('http').createServer((req, res) => {
    router.route(req, res);
}).listen(1337);



