// console.log('starting app.');

/////require is a method in js, just going to pass one string//////////////
const fs = require('fs'); //go get everything in fs module and store it in the fs variable
const _ = require('lodash'); // _ is the common name for lodash
const yargs = require('yargs'); //Command Line argument parser
////third-party node module above
///my own modules below
const notes = require('./notes');

const titleOptions = {
  describe: 'Title of Note',
  demand: true, //now if someone tries to add without title it will fail
  alias:'t'
}

const argv = yargs
  .command('add', 'Add a new note', {
    title: {
      describe: 'Title of Note',
      demand: true, //now if someone tries to add without title it will fail
      alias:'t' // can just run -t instead of --title
    },
    body: {
      describe:'body of teh note',
      demand: true,
      alias:'b'
    }
  })
  .command('list', 'list all notes')
  .command('read', 'read a note', {
    title: {
      describe: 'Title of Note',
      demand: true, //now if someone tries to add without title it will fail
      alias:'t' // can just run -t instead of --title
    }
  })
  .command('remove', 'remove a note', {
    title: titleOptions
  })
  .help()
  .argv;


//var command = process.argv[2]; //not going to be using this one anymore because we will use the next Line
var command = argv._[0];
// console.log('process', process.argv);
// console.log('yargs:', argv);

if (command === 'add') {
  // console.log('Adding new note');
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log('note created');
    notes.logNote(note);
  }else{
    console.log("note failed");
  }
} else if (command === 'list') {
  var allNotes = notes.getAll(); //getAll is a user function in notes
  console.log(`Printing ${allNotes.length} note(s).`);
  allNotes.forEach((note) => notes.logNote(note)) //for each note it will logNote
} else if (command === 'read') {
  var note = notes.getNote(argv.title)
  if (note) {
    console.log('note found');
    notes.logNote(note);
  } else {
    console.log('note NOT found');
  }
} else if ( command === 'remove') {
  // console.log('deleting note');
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'note was removed' : 'Note not found';
  console.log(message);
} else {
  console.log('command not recognized');
}







// console.log('Command: ', command);
// var command = process.argv[2]; // argv[0] was node.exe, argv[1] was app.js and argv[2] was the
 // argument we passed on 'list'

// const os = require('os');
// console.log(_.isString(true));      //boolean is not a string and returns false
// // console.log(_.isString('andrew'));  //;andrew is a string and returns true
// var filteredArray = _.uniq(['gerson',1,  'mike', 2,1,456 ,3,4,5])
// console.log(filteredArray);
// var res = notes.addNote();
// console.log(res);
//
// var result = notes.addFunction(1, 4);
// console.log(result);

// var user = os.userInfo();
// console.log(user);
// fs.appendFile('greetings.txt', `hello ${user.username}! You are ${notes.age}`, function (err) {
//   if (err) {
//     console.log('unable to write file');
//   }
// });

//or fs.appendFileSync('greeting.txt', 'hello world!'); changed for v8
