import NoteItem from "./noteItem";
const Notes = (props) => {
  return (
    <>     
    <div className="container my-5 bg-white">
      <h1 className="text-center" style={{color:'#dc3545'}}>Your Items</h1>
      <hr/>
      <p style={{color:'#dc3545'}}>{props.note.length===0 && 'Cart is Empty!! Please Add!!'}</p>
      <div className="container row" style={{overflowX:'hidden',overflowY:'visible',scrollbarWidth:'none'}}>
        {props.note.map((notes) => {
          return (
            <NoteItem
              key={notes._id}
              notes={notes}
              y = {props.note}
              Del={props.deleteNote}
              Up={props.UpdateNote}
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
