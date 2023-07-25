#!/usr/bin/node

// The first argument is the URL to request (GET)
// The status code must be printed like this: code: <status code>
// You must use the module request
const request = require('request');
const URL = process.argv[2];

request(URL, function (err, response) {
  if (err) {
    console.log(err);
  } else {
    console.log('code: ' + response.statusCode);
  }
});
