const chalk = require('chalk');
const fs = require('fs');

//To add a new note in the file
const add = ( title, details ) => {
    var notes = loadNotes();
    notes.push({
        'title':    title,
        'details':  details
    });
    saveNotes( notes );
};

//To remove a note from the file based on title
const remove = (title) => {

};

//To edit a note in the file based on title
const edit = (title) => {

};

//retrieve a note based on title
const get = (title) => {

};

const saveNotes = ( notes ) => {
    var notesString = JSON.stringify( notes );
    fs.writeFileSync( 'notes.json', notesString );
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};


//Export all the functions
module.exports = {
    addNote: add,
    removeNote: remove,
    editNote: edit,
    getNote: get
};