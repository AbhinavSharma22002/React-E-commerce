import React, { useContext } from "react";
import NoteContext from "../context/notes/noteContext";
import NoteItem from "./noteItem";

const Notes = () => {
  const context = useContext(NoteContext);
  let { note } = context;

  
  return (
    <div className="row my-3">
      <h2>Your Notes</h2>
      {note.map((notes) => {
        return <NoteItem notes={notes}/>;
      })}
    </div>
  );
};

export default Notes;
