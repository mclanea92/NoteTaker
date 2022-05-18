const fs = require('fs');
const notes = require('../data/db.json');
const uuid = require('./helpers/uuid.js');

const addNote = (note) => {
    note.id = uuid();
    newArr = (notes) ? newArr = notes : newArr = [];
    newArr.push(note);
    fs.writeFile('./data.db.json', JSON.stringify(newArr), err => {
        if (err) throw err;
        console.log('New Note Added');
    });
    return;
};

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