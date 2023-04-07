const { get } = require("http");

let addNoteWithBodyAndTitle = (title, body) => {
  console.log(`addNote z parametrami: ${title}, ${body}`);
  let note = {
    title,
    body,
  };
};

let getAll = () => {
  console.log("Pobranie listy notatek...");
};

let getNote = (title) => {
  console.log("Pobieram notatke: ", title);
};

let removeNote = (title) => {
  console.log("Kasowanie notatki: ", title);
};

module.exports = {
  //   addNoteWithBodyAndTitle: addNoteWithBodyAndTitle,
  //   getAll:getAll
  addNoteWithBodyAndTitle,
  getAll,
  getNote,
  removeNote,
};
