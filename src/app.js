
const notes = require('./notes.js')
const chalk = require('chalk')
const yargs = require('yargs')
// create add command
yargs.command({
    command: "add",
    describe: "add a note",
    builder :{
        title:{
            describe:" note title ",
            demandOption: true,
            type: 'string'
        },
        body:{
            describe:" note body ",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNotes(argv.title, argv.body)   
    }
})
// create remove command
yargs.command({
    command: "remove",
    describe: "remove a note",
    builder:{
        title:{
            describe:" Title of the note you want remove ",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})
// create list command
yargs.command({
    command: "list",
    describe: "list notes",
    handler(){
        notes.listNote()
    }
})
// create read command
yargs.command({
    command: "read",
    describe: "read a note",
    builder :{
        title:{
            describe:" Title of the note you want to read ",
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title)
    }
})
// two lines are the same
yargs.parse()
//console.log(yargs.argv)


