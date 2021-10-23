import NoteItem from "./noteItem";
const Notes = (props) => {
  const handleres = async (a,b,c,t) => {
    console.log(a,b,c,t);
    //  await updateNote(a,b,c,t);
    props.showAlert("Updated","success");
  };
  return (
    <>     
      <h2>Your Notes</h2>
      {props.note.length===0 && 'No notes to display'}
      <div className="container row my-3">
        {props.note.map((notes) => {
          return (
            <NoteItem
              key={notes._id}
              notes={notes}
              Del={props.deleteNote}
              Up={props.updateNote}
              id={notes._id}
              showAlert={props.showAlert}
              handleres={handleres}
              setnote={props.setnote}
            />
          );
        })}
      </div>
    </>
  );
};

export default Notes;
