//added this function to give a unique id to each note in the json file containing all notes.
module.exports = () =>
  Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1);
