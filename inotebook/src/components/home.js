import React, { useContext, useState,useEffect} from "react";
import Notes from "./notes";
import { useHistory } from "react-router";
import NoteContext from "../context/notes/noteContext";

const Home = (props) => {
  const context = useContext(NoteContext);
  const {FetchNotes,deleteNote, UpdateNote} = context;
  const {showAlert} = props;
  const [note, setnote1] = useState([]);


  let history = useHistory();
  // eslint-disable-next-line
  useEffect(async() => {
    if(localStorage.getItem('token')){
      setnote1(await FetchNotes(localStorage.getItem('token')));
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
        <Notes note={note} setnote={setnote1} showAlert={showAlert} UpdateNote={UpdateNote} deleteNote={deleteNote} FetchNotes={FetchNotes}/>
      </div>
    </div>
  );
};

export default Home;
