const notes = require("./notes");
const yar = require("yargs");
const argv = yar.argv;
let command = process.argv[2];
console.log("Komenda: ", command);
console.log("Process: ", process.argv);
console.log("Yargs: ", argv);

if (command === "add") {
  console.log("Dodawanie nowej notatki");
  notes.addNote(argv.title, argv.body);
} else if (command === "list") {
  console.log("Listowanie notatek");
  notes.getAll();
} else if (command === "remove") {
  console.log("Usuwanie notatki");
  let noteRemoved = notes.removeNote(argv.title);
  let message = noteRemoved ? "Notatka usunieta" : "Notatka nie istnieje";
  console.log(message);
} else if (command === "read") {
  console.log("Czytanie notatek");
  notes.getNote(argv.title);
} else {
  console.log("Nierozpoznana komenda");
}
