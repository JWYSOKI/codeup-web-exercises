"use strict";

let newUsers = users.filter( user => user.languages.length > 2);

console.log(newUsers);

let emails = users.map( user => user.email);

console.log(emails);
