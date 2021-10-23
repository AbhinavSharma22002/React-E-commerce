import { useEffect,useState } from "react";
import { useHistory } from "react-router";
import NoteItem from "./noteItem";
const Notes = (props) => {
  const [hi, sethi] = useState(props.note);
  const handleres = async (a,b,c,t) => {
    console.log(a,b,c,t);
    //  await updateNote(a,b,c,t);
    props.showAlert("Updated","success");
  };

  let history = useHistory();
  useEffect(() => {
    if(localStorage.getItem('token')){
      console.log(localStorage.getItem('token'))
      props.FetchNotes(sethi,localStorage.getItem('token'));
    }
    else{
      props.showAlert("Please Log In!!","danger")
      history.push('/login');
    }
  }, []);
  
  return (
    <>     
      <h2>Your Notes</h2>
      {hi.length===0 && 'No notes to display'}
      <div className="container row my-3">
        {hi.map((notes) => {
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
