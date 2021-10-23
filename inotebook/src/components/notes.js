import NoteItem from "./noteItem";
const Notes = (props) => {
  const handleres = async (a,b,c,t) => {
    console.log(a,b,c,t);
    //  await updateNote(a,b,c,t);
    alert("Updated");
  };
  return (
    <>     
      <h2>Your Notes</h2>
      <div className="container row my-3">
        {props.note.map((notes) => {
          return (
            <NoteItem
              key={notes._id}
              notes={notes}
              Del={props.deleteNote}
              Up={props.updateNote}
              id={notes._id}
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
