import React from "react";
const noteItem = (props) => {
  return (
    <>
      <div className="card my-4">
        <div className="card-body">
          <div className="d-flex align-items-center">
            <h5 className="card-title">{props.notes.title}</h5>
            <i
              className="fas fa-trash mx-3"
              style={{cursor: 'pointer'}}
              onClick={() => {
                props.Del(props.setnote,props.id);
              }}
            ></i>
            <i
              className="fas fa-edit"
              style={{cursor: 'pointer'}}
              onClick={() => {
                props.Up("","",props.setnote,props.id);
              }}
            ></i>
          </div>
          <p className="card-text">{props.notes.description}</p>
        </div>
      </div>
    </>
  );
};

export default noteItem;
