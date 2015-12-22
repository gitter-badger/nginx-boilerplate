#!/bin/node
var request = require('supertest'),
    express = require('express');

requestNormal = request('http://nginx.boilerplate/');
requestWww = request('http://www.nginx.boilerplate/');

function handle(err) {
    if (err) {
        console.log(err);
    }
}

requestWww.get('').expect(301, handle);
requestNormal.get('.git').expect(403, handle);
requestNormal.get('').expect(200, handle);
requestNormal.get('some/random/url/').expect(200, handle);
requestNormal.get('script.php').expect(200, 'ok');
