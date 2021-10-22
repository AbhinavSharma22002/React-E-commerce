import React, { useContext , useEffect, useState} from "react";
import Notes from "./notes";
import NoteContext from "../context/notes/noteContext";
const Home = (props) => {
  const context = useContext(NoteContext);
  const [note, setnote] = useState([]);
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const {FetchNotes, AddNotes,updateNote, deleteNote} = context;
  
  useEffect(() => {
    FetchNotes(setnote);
    // eslint-disable-next-line
  }, [note]);

  const handleSubmit = (e)=>{
    AddNotes(title,desc,setnote);
    settitle("");
    setdesc("");
    e.preventDefault();
  };

  const handleChange1 = (e)=>{
    settitle(e.target.value);
  }
  const handleChange2 = (e)=>{
    setdesc(e.target.value);
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
            {/* <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div> */}
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
          <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
            Submit 
          </button>
        </form>
      </div>

      <div className="container">
        <Notes note={note} deleteNote={deleteNote} updateNote={updateNote} setnote={setnote}/>
      </div>
    </div>
  );
};

export default Home;
