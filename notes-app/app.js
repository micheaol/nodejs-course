import chalk from "chalk";
import yargs from "yargs";
import getNotes from "./notes.js";

//Customization of yargs versioning:
yargs.version('1.1.0');

//Setting up commands:
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title: {
            describe: "Note title",
            demandOption: true,
            type: 'string'
        }
    },
    handler:  (argv) => {
        console.log("Adding a new note", argv)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    handler: () => {
        console.log("Removing a note")
    }
})

yargs.command({
    command: 'read',
    describe: "Read a note",
    handler: () => {
        console.log("Reading a note")
    }
})

yargs.command({
    command: "list",
    describe: 'Listing notes',
    handler: () => {
        console.log("Listing all the notes")
    }
})
console.log(yargs.argv)
