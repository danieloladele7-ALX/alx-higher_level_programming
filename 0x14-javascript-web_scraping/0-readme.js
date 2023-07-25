#!/usr/bin/node

// fs for file system API,
// The first argument is the file path
// The content of the file must be read in utf-8
const fs = require('fs');
const file = process.argv[2];

fs.readFile(file, 'utf-8', function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
