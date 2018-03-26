// console.log('starting notes.js');

// console.log(module); //module like this is available in all our files

const fs = require('fs');

var logNote = (note) => {
  debugger;
  console.log('---');
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
}

var fetchNotes = () => {
  //below is what loads the file
  try { //need to try because if there is no notes-data file it will show an error
    var notesString = fs.readFileSync('notes-data.json');
    // notes = JSON.parse(notesString); //now new notes won't overwrite old ones
    return JSON.parse(notesString);//now new notes won't overwrite old ones
  } catch (e) {
    return [];
    //don't need to put anycode in catch block but you do need to define it
  }
};

var saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}


var addNote =(title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body:body
  };
  var duplicateNotes = notes.filter((note) => {
    return note.title === title;
  }); // takes a callback with an argument
  if (duplicateNotes.length === 0) { //this saves the file
    notes.push(note);// push method allows for adding items into an array
    saveNotes(notes);// fs.writeFileSync('notes-data.json', JSON.stringify(notes));
    return note;
  }
};


var getAll = () => {
    console.log("getting all notes");
    return fetchNotes();

}

var getNote = (title) => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title === title);
  return filteredNotes[0];
}

var removeNote = (title) => {
  // console.log('deleting note', title);
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title !== title); //everytime it finds a note that doesn't match the title, its going to keep it. and it will return false if it finds a match
  saveNotes(filteredNotes);// save the new array without the matching title
  return notes.length !== filteredNotes.length;
}

module.exports = {
  addNote,
  getAll:getAll,
  getNote,
  removeNote,
  logNote
}




// module.exports.addNote = () => {
//   console.log('addNote');
//   return 'new note';
// };
///below was added for demo purposes
// module.exports.addFunction = (a,b) => {
//   return a + b;
// };
