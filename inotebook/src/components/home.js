import React, { useContext, useState,useEffect} from "react";
import Notes from "./notes";
import { useHistory } from "react-router";
import NoteContext from "../context/notes/noteContext";
const Home = (props) => {
  const context = useContext(NoteContext);
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [tag, settag] = useState("");
  const {FetchNotes, AddNotes,deleteNote} = context;
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


  const handleSubmit = (e)=>{
    if(note!==null){
      AddNotes(title,desc,tag,setnote,props.showAlert,localStorage.getItem('token'));
      settitle("");
      setdesc("");
      settag("");
    }
    else{
      props.showAlert("Please Log In!!","danger")
      history.push('/login');
    }
    e.preventDefault();
  };

  const handleChange1 = (e)=>{
    settitle(e.target.value);
  }
  const handleChange2 = (e)=>{
    setdesc(e.target.value);
  }
  
  const handleChange3 = (e)=>{
    settag(e.target.value);
  }

  return (
    <div>
      <div className="container">
        <Notes note={note} setnote={setnote} showAlert={showAlert} deleteNote={deleteNote} FetchNotes={FetchNotes}/>
      </div>
    </div>
  );
};

export default Home;
