import React from 'react'
const noteItem = (props) => {
    return (
        <>
            <div className="card my-4">
  <div className="card-body">
    <div className="d-flex align-items-center">
    <h5 className="card-title">{props.notes.name}</h5>
    <i className="fas fa-trash mx-3" onClick={()=>{console.log("delete")}}></i>
    <i className="fas fa-edit" onClick={()=>{console.log("Edit")}}></i>
    </div>
    <p className="card-text">{props.notes.class}</p>
  </div>
</div>
        </>
    )
}

export default noteItem
