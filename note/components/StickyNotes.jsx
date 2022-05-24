import React from "react";
import Note from "./Note";

function StickyNotes() {
  const notesData=[
    {title:'title #1',content:'content #1'},
    {title:'title #2',content:'content #2'},
    {title:'title #3',content:'content #3'},
    {title:'title #4',content:'content #4'},
    {title:'title #5',content:'content #5'},
    {title:'title #6',content:'content #6'},
    {title:'title #7',content:'content #7'},
    {title:'title #8',content:'content #8'},
  ]
  const notes=notesData.map(note=><Note title={note.title} content={note.content}/>)

  console.log(notes);
  return (
    <ul>
     
      {notes}
    </ul>
  );
}

export default StickyNotes;
