import NoteItem from "./noteItem";
import { useRef , useState} from "react";
const Notes = (props) => {
  const ref = useRef(null);
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [tag, settag] = useState("");
  const [id,setid] = useState("");

  const UPdateNote = (note)=>{
    settitle(note.title);
    setdesc(note.description);
    settag(note.tag);
    setid(note._id);
    ref.current.click();
  }

  
  const handleClick = (e) => {
    if(localStorage.getItem('token')){
     props.updateNote(title,desc,tag,localStorage.getItem('token'),props.showAlert,id);
     
     let arr = props.note.filter(function(item) {
      if(item._id === id){
        item.title = title;
        item.description = desc;
        item.tag = tag;
      }
      return item;
  })
    props.setnote(arr);
    }
    else{
      props.showAlert("Error","danger");
    }
    e.preventDefault();
  };
  

  const handleChange1 = (e) => {
    settitle(e.target.value);
  };
  const handleChange2 = (e) => {
    setdesc(e.target.value);
  };

  const handleChange3 = (e) => {
    settag(e.target.value);
  };
  return (
    <>     
    <div
      className="modal fade"
      id="exampleModal"
      tabIndex="-1"
      ref={ref}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">
              Update Note
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
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
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              className="btn btn-primary"
              onClick={handleClick}
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>

      <h2>Your Notes</h2>
      {props.note.length===0 && 'No notes to display'}
      <div className="container row my-3">
        {props.note.map((notes) => {
          return (
            <NoteItem
              key={notes._id}
              notes={notes}
              y = {props.note}
              Del={props.deleteNote}
              Up={UPdateNote}
              id={notes._id}
              showAlert={props.showAlert}
              setnote={props.setnote}
            />
          );
        })}
      </div>
    </>
  );
};

export default Notes;
