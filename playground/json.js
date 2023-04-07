// let obj = {
//   name: "Andrew",
// };

// let personString = '{"name":"Andrew", "age":25}';
// let person = JSON.parse(personString);
// console.log(typeof person);
// console.log(person);

// let stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

const fs = require("fs");

let originalNote = {
  title: "Some title",
  body: "Some body",
};



fs.writeFileSync("notes-data.json", JSON.stringify(originalNote));

let noteString = fs.readFileSync("notes-data.json");
console.log(noteString); //<Buffer 7b 22 74 69 74 6c 65 22 3a 22 53 6f 6d 65 20 74 69 74 6c 65 22 2c 22 62 6f 64 79 22 3a 22 53 6f 6d 65 20 62 6f 64 79 22 7d>
let note = JSON.parse(noteString);
console.log(note.title, note.body);

let originalNote2 = {
    title: "Some title2",
    body: "Some body2",
  };

fs.writeFileSync("notes-data.json", JSON.stringify(originalNote2));
