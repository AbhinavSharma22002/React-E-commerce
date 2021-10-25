import React, { useContext, useState,useEffect} from "react";
import Notes from "./notes";
import { useHistory } from "react-router";
import NoteContext from "../context/notes/noteContext";

const Home = (props) => {
  const context = useContext(NoteContext);
  const {FetchNotes,deleteNote} = context;
  const {showAlert} = props;
  const [note, setnote] = useState([]);


  let history = useHistory();
  useEffect(() => {
    if(localStorage.getItem('token')){
      FetchNotes(setnote,localStorage.getItem('token'));
    }
    else{
      props.showAlert("Please Log In!!","danger")
      history.push('/login');
    }
    //eslint-disable-next-line
  }, []);


  return (
    <div>
      <div className="container">
        <Notes note={note} setnote={setnote} showAlert={showAlert} deleteNote={deleteNote} FetchNotes={FetchNotes}/>
      </div>
    </div>
  );
};

export default Home;
