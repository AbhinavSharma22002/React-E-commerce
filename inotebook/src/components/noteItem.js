import React from "react";
import { useRef, useState, useEffect } from "react";
const NoteItem = (props) => {
  const ref = useRef(null);
  // const refclose = useRef(null);
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");
  const [tag, settag] = useState("");

 

  const handleClick = (e) => {
    props.handleres(title,desc,tag,props.id);
    settitle("");
    setdesc("");
    settag("");
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

  const hand = ()=>{
    ref.current.click();
  }


  return (
    <>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
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

      <div className="card my-4">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{props.notes.title}</h5>
            <i
              className="fas fa-trash mx-3"
              style={{ cursor: "pointer" }}
              onClick={() => {
                props.Del(props.setnote, props.id);
              }}
            ></i>
            <i
              className="fas fa-edit"
              style={{ cursor: "pointer" }}
              ref={ref}
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              onClick={()=>{hand()}}
            ></i>
          </div>
          <p className="card-text">{props.notes.description}</p>
        </div>
      </div>
    </>
  );
};

export default NoteItem;
