
// added express from npm
const express = require('express');
const app = express();

// port for server and for 3001 localhost server
const PORT = process.env.PORT || 3001;

const apiRoute = require('./routes/api');
const htmlRoute = require('./routes/html');

// helps parse incoming data from from body
app.use(express.urlencoded({ extended: true}));

app.use(express.json());

// makes it so the public folder is connected to the rest of the files
app.use(express.static('public'));

// connects to routes
app.use('/api', apiRoute);

//connects to routes
app.use('/', htmlRoute);

app.listen(PORT, () => {
    console.log(`${PORT} is the current server`)
});