const router = require('express').Router();
const path = require('path');

// routes to the public folder for the get started page
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'))
});

// routes to the notes page of the html
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'))
});

// exporting it so it can be read by the other files
module.exports = router;