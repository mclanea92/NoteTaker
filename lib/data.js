const fs = require('fs');
const notes = require('../data/db.json');
const uuid = require('../helpers/uuid.js');


// this creates a new note for the user and creates the location to save in while keeping data that is already in the file
const addNote = (note) => {
    note.id = uuid();
    newArr = (notes) ? newArr = notes : newArr = [];
    newArr.push(note);
    fs.writeFile('./data/db.json', JSON.stringify(newArr), err => {
        if (err) throw err;
        console.log('New Note Added');
    });
    return;
};


//this is how to delete a note from the note taker application
const deleteNote = (note) => {
    for (let i = 0; i < notes.length; i++) {
        if (notes[i].id === note.id) {
            notes.splice(i, 1);
            console.log('Note was deleted')
        }
    };
    return;
};

module.exports = { addNote, deleteNote }