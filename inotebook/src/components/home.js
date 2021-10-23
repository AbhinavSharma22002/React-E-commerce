import React, { useContext, useState,useEffect} from "react";
import Notes from "./notes";
import { useHistory } from "react-router";
import NoteContext from "../context/notes/noteContext";
const Home = (props) => {
  const context = useContext(NoteContext);
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [tag, settag] = useState("");
  const {FetchNotes, AddNotes,updateNote, deleteNote} = context;
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
      <div className="container my-3">
        <h1>Add a Note</h1>
        <form className="my-3 mx-3">
          <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Title
            </label>
            <input
              type="text"
              name="title"
              value={title}
              onChange={handleChange1}
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Description
            </label>
            <input
              type="text"
              name="desc"
              value={desc}
              onChange={handleChange2}
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="tag" className="form-label">
              Tag
            </label>
            <input
              type="text"
              name="tag"
              value={tag}
              onChange={handleChange3}
              className="form-control"
              id="tag"
            />
          </div>
          <button disabled={title.length<5 || desc.length<5} type="submit" className="btn btn-primary" onClick={handleSubmit}>
            Add Note
          </button>
        </form>
      </div>

      <div className="container">
        <Notes note={note} setnote={setnote} showAlert={showAlert} deleteNote={deleteNote} updateNote={updateNote} FetchNotes={FetchNotes}/>
      </div>
    </div>
  );
};

export default Home;
