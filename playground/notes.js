const fs = require("fs");

let fetchNotes = () => {
  try {
    let notesString = fs.readFileSync("notes-data.json");
    return JSON.parse(notesString);
  } catch (e) {
    return new Array();
  }
};

let addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body,
  };
  var duplicateNotes = notes.filter((note) => note.title === title);
  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

let saveNotes = (notes) => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

let getAll = () => {
  console.log("Pobieranie listy notatek");
  let notes = fetchNotes();
  notes.forEach((n) => console.log(n));
  return fetchNotes();
};

let removeNote = (title) => {
  let notes = fetchNotes();
  let filteredNotes = notes.filter((n) => n.title !== title);
  saveNotes(filteredNotes);
  // drugi sposob:
  // for (let i in notes){
  //     if (notes[i].title === title){
  //         notes.splice(i,1)
  //     }
  // }
  //   saveNotes(notes);
  return notes.length !== filteredNotes.length;
};

module.exports = {
  addNote,
  saveNotes,
  getAll,
  removeNote,
};
