import NoteItem from "./noteItem";
import { useHistory } from "react-router";
import { useState } from "react";
const Notes = (props) => {
  let history = useHistory();
  const [step, setstep] = useState(1);
  const [add, setadd] = useState("");
  const [pin, setpin] = useState("");
  const [number, setnumber] = useState("");
  const [CN, setCN] = useState("");
  const [NC, setNC] = useState("");
  const [expire, setexpire] = useState("");
  const [p, setp] = useState(0);
  

  let price =0;
  const Left = (a)=>{
    price +=a;
  };

  const handleChange1 = (e) => {
    setadd(e.target.value);
  };

  const handleChange2 = (e) => {
    setpin(e.target.value);
  };

  const handleChange3 = (e) => {
    setnumber(e.target.value);
  };
  const handleChange4 = (e) => {
    setCN(e.target.value);
  };
  const handleChange5 = (e) => {
    setNC(e.target.value);
  };
  const handleChange6 = (e) => {
    setexpire(e.target.value);
  };

  const handleSubmit3 = async (e)=>{
    e.preventDefault();
   
    //Create a new order
    if(localStorage.getItem('token')){
      let notes_id = [];

      props.note.map((item)=>{
        let ob = {};
        ob.id = item.note_id;
        ob.number = item.number;
        notes_id.push(ob);
        props.deleteNote(props.setnote,'c', item._id,props.showAlert,localStorage.getItem('token'));
          props.setnote([]); 
      return item;
    });
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token'),
        },
        body: JSON.stringify({
          payment: 10000+(p+(p*(95/100))),
          notes_id: notes_id,
          add: add,
          pin: pin,
          number: number,
          CN: CN,
          NC: NC,
          expire: expire

        })
      };
      await fetch(
        'http://localhost:5000/api/notes/addorder',
        requestOptions
      );
      

      history.push('/');
    }
    else{
      props.showAlert("Please Log In!!","danger");
      history.push('/login');
    }
  };

  const handleSubmit2 = (e)=>{
    e.preventDefault();
    setstep(3);
  };
  const handleSubmit1 = (e)=>{
    e.preventDefault();
    setp(price);
    setstep(2);
  };

    
  return (
    <>     
    {step===1?<>
      <div className="my-5 bg-white" style={{width:'70%'}}>
      <h1 className="text-center" style={{color:'#dc3545'}}>Your Items</h1>
      <hr/>
      <p style={{color:'#dc3545'}}>{props.note.length===0 && 'Cart is Empty!! Please Add!!'}</p>
      <div className="container row" style={{overflowX:'hidden',overflowY:'visible',scrollbarWidth:'none'}}>
        {props.note.map((notes) => {
          Left(notes.payment);
          return (
            <NoteItem
              key={notes._id}
              notes={notes}
              y = {props.note}
              Del={props.deleteNote}
              Up={props.UpdateNote}
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
        {props.note.length===0?<>
        <p style={{color:'#dc3545'}}>{props.note.length===0 && ''}</p>
        </>:<> 
        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignContent:'center'}}>
          <table cellPadding="20px">
            <tbody>
            <tr>
              <td>Total Amount</td>
              <td>{price}</td>
            </tr>
            <tr>
              <td>Tax</td>
              <td>95%</td>
            </tr>
            <tr>
              <td>Delivery Charge</td>
              <td>10000</td>
            </tr>
            <tr>
              <td>Payable Amount</td>
              <td>{10000+price+(price*(95/100))}</td>
            </tr>
            <tr aria-colspan="2">
              <td>
                
                <button className="btn btn-danger" onClick={handleSubmit1}>Place Order!!</button>

              </td>
            </tr>
            </tbody>
          </table>
        </div>
        
        
        </>}
      </div>
    </>:step===2?<>
    <div className="d-flex justify-content-center half">
        <div>
          <div>            
            <div className="row align-items-center justify-content-center">
              <div className="col-md-12">
                <div className="form-block mx-auto">
                  <div className="text-center mb-5">
                    <h3 style={{color:'red'}}>
                    <strong>Checkout</strong>
                    </h3>
                  </div>
                  <form>
                    <div className="form-group first">
                      <label htmlFor="address">Address</label>
                      <input
                        type="text"
                        size="40"
                        value={add}
                        onChange={handleChange1}
                        style={{height:'50px'}}
                        className="form-control"
                        placeholder="Address"
                        id="address"
                      />
                    </div>
                    <div className="form-group first my-3">
                      <label htmlFor="pin">Pin Code</label>
                      <input
                        type="text"
                        size="40"
                        value={pin}
                        onChange={handleChange2}
                        maxLength="6"
                        className="form-control"
                        placeholder="Pin"
                        id="pin"
                      />
                    </div>
                    <div className="form-group last mb-3 my-3">
                      <label htmlFor="pin">Phone Number</label>
                      <input
                        type="tel"
                        size="40"
                        value={number}
                        onChange={handleChange3}
                        maxLength="10"
                        className="form-control"
                        placeholder="Enter correct number"
                        id="tel"
                      />
                    </div>
                    <div className="form-group" style={{display:'flex',flexDirection:'row'}}>
                    <input
                      type="submit"
                      value="Proceed"
                      onClick={handleSubmit2}
                      className="btn btn-block btn-danger"
                    />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>:<>
    <div className="d-flex justify-content-center half">
        <div>
          <div>            
            <div className="row align-items-center justify-content-center">
              <div className="col-md-12">
                <div className="form-block mx-auto">
                    <div className="text-center mb-5">
                    <h3 style={{color:'red'}}>
                    <strong>Payment Details</strong>
                    </h3>
                  </div>
                  <form>
                    <div className="form-group first">
                      <label htmlFor="cardnum">Card Number</label>
                      <input
                        type="text"
                        size="40"
                        maxLength="16"
                        value={CN}
                        onChange={handleChange4}
                        className="form-control"
                        id="cardnum"
                      />
                    </div>
                    <div className="form-group first my-3">
                      <label htmlFor="nameC">Name on Card</label>
                      <input
                        type="text"
                        size="40"
                        value={NC}
                        onChange={handleChange5}
                        maxLength="16"
                        className="form-control"
                        id="nameC"
                      />
                    </div>
                    <div className="form-group last mb-3 my-3">
                      <label htmlFor="expire">Expiration date</label>
                      <input
                        type="date"
                        size="40"
                        value={expire}
                        onChange={handleChange6}
                        className="form-control"
                        id="expire"
                      />
                    </div>
                    <div className="form-group" style={{display:'flex',flexDirection:'row'}}>
                    <input
                      type="submit"
                      value="Place Order!!"
                      onClick={handleSubmit3}
                      className="btn btn-block btn-danger"
                    />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>}
    
    </>
  );
};

export default Notes;
