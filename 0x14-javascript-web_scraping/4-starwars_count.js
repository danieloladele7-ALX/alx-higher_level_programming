#!/usr/bin/node

// A script that prints the number of movies where,
// the character “Wedge Antilles” is present.
// - The first argument is the API URL of the Star wars API:-
// https://swapi-api.alx-tools.com/api/films/:id
// - Wedge Antilles is character ID 18 - your script must
// use this ID for filtering the result of the API.
const request = require('request');
const url = process.argv[2];
const characterId = '18';

request(url, function (error, response, body) {
  if (error) {
    console.log(error);
  } else if (response.statusCode === 200) {
    const films = JSON.parse(body).results;
    let count = 0;
    for (const filmIdx in films) {
      const filmChars = films[filmIdx].characters;
      for (const charIdx in filmChars) {
        if (filmChars[charIdx].includes(characterId)) {
          count++;
        }
      }
    }
    console.log(count);
  } else {
    console.log('An error occured. Status code: ' + response.statusCode);
  }
});
