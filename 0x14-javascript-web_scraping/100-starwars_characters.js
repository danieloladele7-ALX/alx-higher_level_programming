#!/usr/bin/node

// Write a script that prints all characters of a Star Wars movie:
// - The first argument is the Movie ID - example: 3 = “Return of the Jedi”
// - Display one character name by line
// - You must use the Star wars API
const request = require('request');
const episodeNum = process.argv[2];
const API_URL = 'https://swapi-api.alx-tools.com/api/films/';
request(API_URL + episodeNum, function (error, response, body) {
	if (error) {
		console.log(error);
	} else {
		const characters = JSON.parse(body).characters;
		characters.forEach((character) => {
		request(character, function (error, response, body) {
			if (error) {
				console.log(error);
			} else {
				console.log(JSON.parse(body).name);
			}
		});
		});
	}
});
