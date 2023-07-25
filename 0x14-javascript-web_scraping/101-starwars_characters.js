#!/usr/bin/node

// Write a script that prints all characters of a Star Wars movie:
// - The first argument is the Movie ID - example: 3 = “Return of the Jedi”
// - Display one character name by line in the same order of the
// list “characters” in the /films/ response
// - You must use the Star wars API
const request = require('request');
const episodeNum = process.argv[2];
const API_URL = 'https://swapi-api.alx-tools.com/api/films/';
request(API_URL + episodeNum, function (error, response, body) {
	if (error) {
		console.log(error);
	} else {
		let characters = JSON.parse(body).characters;
		printCharacters(characters, 0);
	}
});

function printCharacters (characters, index) {
  request(characters[index], function (error, response, body) {
    if (error) {
		console.log(error);
	} else {
		console.log(JSON.parse(body).name);
		if (index + 1 < characters.length) {
			printCharacters(characters, index + 1);
		}
    }
  });
}
