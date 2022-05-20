// require express, db.json and a way to add and delete a note

const router = require('express').Router();
const data = require('../../data/db.json');

// requiring the data.js to be able to add and delete notes from the db.json
const { addNote, deleteNote } = require('../../lib/data.js');

router.get('/notes', (req, res) => {
    res.send(data);
});

router.get('/', (req, res) => {
    res.send('api is here');
});

// where we add a note
router.post('/notes', (req, res) => {
    addNote(req.body);
    res.json();
});

// where we delete a note based on the id it has
router.delete('/notes/:id', (req, res) => {
    deleteNote(req.params);
    res.json();
});

module.exports = router;