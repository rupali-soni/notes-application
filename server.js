const chalk = require( "chalk" );
const yargs = require( "yargs" );
const notes = require("./notes.js");

yargs.command({
    command: 'add',
    desc: 'To add a new note',
    builder: {
        title: {
            describe: 'Title for the note',
            demandOption: true,
            type: 'string'
        },
        detail: {
            describe: 'Details for the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.addNote(argv.title, argv.detail);
    }
});

yargs.command({
    command: 'remove',
    desc: 'To remove a note',
    builder: {
        title: {
            describe: 'Title for the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.removeNote(argv.title);
    }
});

yargs.command({
    command: 'edit',
    desc: 'To edit a note',
    builder: {
        title: {
            describe: 'Title for the note',
            demandOption: true,
            type: 'string'
        },
        detail: {
            describe: 'Details for the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.editNote(argv.title, argv.detail);
    }
});

yargs.command({
    command: 'get',
    desc: 'To get the details of a note',
    builder: {
        title: {
            describe: 'Title for the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        notes.getNote(argv.title);
    }
});
yargs.parse();