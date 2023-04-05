// const yargs = require("yargs/yargs");
// const { hideBin } = require("yargs/helpers");
// const argv = yargs(hideBin(process.argv)).argv;

// console.log("argv: ", argv);
// console.log("argv.$0: ", argv.$0);
// console.log("argv.title", argv.title);
// console.log("argv._", argv._);
// javascript@java:~/Documents/JavaScriptXL/NOTE-NODE$ node app3-yargs.js --title=lopol
// argv:  { _: [], title: 'lopol', '$0': 'app3-yargs.js' }
// argv.$0:  app3-yargs.js
// argv.title lopol
// argv.__ []

const notes2 = require("./notes2");
const yar = require("yargs");
const argv2 = yar.argv;
let command = process.argv[2];
console.log("Komenda: ", command);
console.log("Process: ", process.argv);
console.log("Yargs: ", argv2);
// javascript@java:~/Documents/JavaScriptXL/NOTE-NODE$ node app3-yargs.js list --title=lopol
// Komenda:  list
// Process:  [
//   '/home/javascript/.nvm/versions/node/v18.12.1/bin/node',
//   '/home/javascript/Documents/JavaScriptXL/NOTE-NODE/app3-yargs.js',
//   'list',
//   '--title=lopol'
// ]
// Yargs:  { _: [ 'list' ], title: 'lopol', '$0': 'app3-yargs.js' }

if (command === "add") {
  console.log("Dodawanie nowej notatki");
  notes2.addNoteWithBodyAndTitle(argv2.title, argv2.body);
}
