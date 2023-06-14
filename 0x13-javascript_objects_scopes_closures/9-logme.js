#!/usr/bin/node
let countMe = 0;
exports.logMe = function (item) {
  console.log(`${countMe++}: ${item}`);
};
