const notes = require("./notes");
const yar = require("yargs");

const titleOptions = {
  describe: "Tytuł notatki",
  demand: true,
  alias: "t",
};

const bodyOptions = {
  describe: "Treść notatki",
  demand: true,
  alias: "b",
};

const argv = yar
  .command("add", "Dodaj nową notatkę", {
    title: titleOptions,
    body: bodyOptions,
  })
  .command("list", "Wyświetl wszystkie notatki")
  .command("read", "Wyświetl notatkę", {
    title: titleOptions,
  })
  .command("remove", "Usuń notatkę", {
    title: titleOptions,
  })
  .help().argv;

let command = process.argv[2];
console.log("Komenda: ", command);
console.log("Process: ", process.argv);
console.log("Yargs: ", argv);

if (command === "add") {
  console.log("Dodawanie nowej notatki");
  notes.addNote(argv.title, argv.body);
} else if (command === "list") {
  let allNotes = notes.getAll();
  console.log(`Listowanie ${allNotes.length} notatek`);
  allNotes.forEach((n) => notes.logNote(n));
} else if (command === "remove") {
  console.log("Usuwanie notatki");
  let noteRemoved = notes.removeNote(argv.title);
  let message = noteRemoved ? "Notatka usunieta" : "Notatka nie istnieje";
  console.log(message);
} else if (command === "read") {
  console.log("Czytanie notatek");
  let note = notes.getNote(argv.title);
  if (note) {
    console.log("Notatka znaleziona: ");
    // console.log("Tytuł: ", note.title);
    // console.log("Treść: ", note.body);
    notes.logNote(note);
  } else {
    console.log("Notatka nie istnieje");
  }
} else {
  console.log("Nierozpoznana komenda");
}
