const chalk = require('chalk')
const fs = require('fs')
//adding a note 
const addNotes = (title, body)=>{
    const notes = loadNotes()
    // testing if this note is exist already and stop when we find one
    const duplicateNote = notes.find((note)=>note.title === title)
    if(!duplicateNote ){
        notes.push({
            "title": title,
            "body": body
        })
        console.log(chalk.green.inverse("New note added!"))
        saveNotes(notes)
    }
    else{
        console.log(chalk.red.inverse("Note title taken!"))
    }
  
}
const saveNotes = (notes)=>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync("notes.json",dataJSON)
}
const loadNotes = ()=>{
    try{
        const databuffer = fs.readFileSync("notes.json")
        const dataJSON = databuffer.toString() 
        return JSON.parse(dataJSON)
    }catch (e){
        return []
    }
} 
//removing a note
const removeNote = (title)=>{
    const notes = loadNotes()
    // find if note is exist to remove it 
    const notesToKeep = notes.filter((note)=>note.title !== title)
    if(notes.length > notesToKeep.length ){
        console.log(chalk.green.inverse("Note removed!"))
        saveNotes(notesToKeep)
    }
    else{
        console.log(chalk.red.inverse("No Note found!"))
    }    
}
// listing notes
const listNote = ()=>{
    const notes = loadNotes()
    console.log(chalk.blue.inverse('Your Notes :'))
    notes.forEach((note) => {
        console.log(note.title)
    });

}
// reading a note
const readNote = (title)=>{
    const notes = loadNotes()
    const note = notes.find((note)=>note.title === title)
    if(note){
        console.log(chalk.inverse(note.title))
        console.log(note.body)
    }
    else{
        console.log(chalk.red('No note found'))
    }

}
module.exports = {
    addNotes: addNotes,
    removeNote : removeNote,
    listNote:listNote,
    readNote : readNote
   }