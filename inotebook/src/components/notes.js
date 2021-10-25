import NoteItem from "./noteItem";
const Notes = (props) => {
  return (
    <>     
    <div className="container my-5 bg-dark">
      <h1 className="text-center" style={{color:'white'}}>Your Cart</h1>
      <hr/>
      {props.note.length===0 && 'No notes to display'}
      <div className="container row bg-dark">
        {props.note.map((notes) => {
          return (
            <NoteItem
              key={notes._id}
              notes={notes}
              y = {props.note}
              Del={props.deleteNote}
              id={notes._id}
              showAlert={props.showAlert}
              setnote={props.setnote}
            />
          );
        })}
      </div>
      </div>
    </>
  );
};

export default Notes;
