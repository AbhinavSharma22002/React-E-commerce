import { useState } from "react";
import NoteItem from "./noteItem";
const Notes = (props) => {
  const [price, setprice] = useState([]);
  return (
    <>     
    <div className="my-5 bg-white" style={{width:'70%'}}>
      <h1 className="text-center" style={{color:'#dc3545'}}>Your Items</h1>
      <hr/>
      <p style={{color:'#dc3545'}}>{props.note.length===0 && 'Cart is Empty!! Please Add!!'}</p>
      <div className="container row" style={{overflowX:'hidden',overflowY:'visible',scrollbarWidth:'none'}}>
        {props.note.map((notes) => {
          return (
            <NoteItem
              key={notes._id}
              notes={notes}
              setprice={setprice}
              y = {props.note}
              Del={props.deleteNote}
              Up={props.UpdateNote}
              id={notes._id}
              showAlert={props.showAlert}
              setnote={props.setnote}
            />
          );
        })}
      </div>
      </div>
      <div style={{width:'10%'}}></div>
      <div className="my-5 bg-white" style={{width:'20%'}}>
        <h1 className="text-center">Place Order</h1>
        <hr/>
        <p style={{color:'#dc3545'}}>{props.note.length===0 && 'Cart is Empty!! Please Add!!'}</p>
        <div>
          {console.log(price)}
        </div>
      </div>
    </>
  );
};

export default Notes;
