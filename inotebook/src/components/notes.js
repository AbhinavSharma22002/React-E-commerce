import NoteItem from "./noteItem";
const Notes = (props) => {

  return (
    <>
    
    <h2>Your Notes</h2>
    <div className="container row my-3">
      {props.note.map((notes) => {
        return <NoteItem key={notes._id} notes={notes} Del = {props.deleteNote} id={notes._id} setnote={props.setnote}/>;
      })}
    </div>
    </>
  );
};

export default Notes;
