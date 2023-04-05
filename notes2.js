let addNoteWithBodyAndTitle = (title, body) => {
  console.log(`addNote z parametrami: ${title}, ${body}`);
  let note = {
    title,
    body,
  };
};

module.exports = {
  addNoteWithBodyAndTitle: addNoteWithBodyAndTitle,
};
