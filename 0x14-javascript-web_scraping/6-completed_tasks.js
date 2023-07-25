#!/usr/bin/node

// A script that computes the number of tasks completed by user id.
// - The first argument is the API URL:-
// https://jsonplaceholder.typicode.com/todos
// - Only print users with completed task
// - You must use the module request
const request = require('request');
request(process.argv[2], function (error, response, body) {
  if (!error) {
    const todos = JSON.parse(body);
    const completed = {};
    todos.forEach((todo) => {
      if (todo.completed && completed[todo.userId] === undefined) {
        completed[todo.userId] = 1;
      } else if (todo.completed) {
        completed[todo.userId] += 1;
      }
    });
    console.log(completed);
  }
});
