console.log("Starting app2.js");
const fs = require("fs");
const os = require("os");
const notes = require("./notes");
let user = os.userInfo();
// const _ = require("lodash");

console.log(process.argv)
let command = process.argv[2];
console.log("Komenda: ", command);

if (command === "add") {
  console.log("Dodawanie nowej notatki");
} else if (command === "list") {
  console.log("Listowanie notatek");
} else if (command === "remove") {
  console.log("Usuwanie notatki");
} else if (command === "read") {
  console.log("Czytanie notatek");
} else {
  console.log("Nierozpoznana komenda");
}

// console.log(process.argv);
// [
//     '/home/javascript/.nvm/versions/node/v18.12.1/bin/node',
//     '/home/javascript/Documents/JavaScriptXL/NOTE-NODE/app2.js'
//   ]

// console.log(user);
// {
//     uid: 1000,
//     gid: 1000,
//     username: 'javascript',
//     homedir: '/home/javascript',
//     shell: '/bin/bash'
//   }

// fs.appendFileSync(
//   "powitanie2.txt",
//   `Witaj ${user.username} !  Masz ${notes.age} lat.\n`
// );

// let res = notes.addNote();
// console.log(res);

// let res2 = notes.add(3, 4);
// console.log(res2);
