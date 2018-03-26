// var obj = {
//   name: 'andrew'
// };
//
// var stringObj = JSON.stringify(obj); //makes the object into strings. double quotes are wrapping name and andrew
// console.log(typeof stringObj);
// console.log(stringObj);
// console.log(obj);

// var personString = '{"name":"andrew", "age": 25}'; //so rightnow personString.name doesn't exist. only as an object
// console.log(personString);
// var person = JSON.parse(personString);
// console.log(person);
// console.log(typeof person);
// console.log(person.age);//this is no longer a JSON string

const fs = require('fs');

var originalNote = {
  title: 'some title',
  body: 'some body'
};

//how to write/create a note
var originalNoteString = JSON.stringify(originalNote); //converts objects to string
fs.writeFileSync('notes.json', originalNoteString);

//how to read a note
var noteString = fs.readFileSync('notes.json')
var note = JSON.parse(noteString);//converts JSON string to something you can access


console.log(typeof note);
console.log(note.title);

//writeFileSync will create a file if there is not one made already
//writeFileSync will take two arguments
