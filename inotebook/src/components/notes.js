import { Link } from "react-router-dom";
import NoteItem from "./noteItem";
import { useHistory } from "react-router";
const Notes = (props) => {
  let history = useHistory();
  let price =0;

  const Left = (a)=>{
    price +=a;
  };

  const handleClick = async (a)=>{
    if(localStorage.getItem('token')){
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token'),
        }
      };
      const response = await fetch(
        'http://localhost:5000/api/auth/getUser',
        requestOptions
      );
      const data = await response.json();
      console.log(data);
    }
    else{
      props.showAlert("Please Log In!!","danger");
      history.push('/login');
    }


   
  };
  return (
    <>     
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
        <p style={{color:'#dc3545'}}>{props.note.length===0 && 'Cart is Empty!! Please Add!!'}</p>
        </>:<> <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignContent:'center'}}>
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
              <td>Payable Amount</td>
              <td>{price+(price*(95/100))}</td>
            </tr>
            <tr aria-colspan="2">
              <td>
              {/*eslint-disable-next-line*/}
                <Link to="/payment" className="btn btn-danger" onClick={()=>{handleClick(price+(price*(95/100)))}}>Place Order!!</Link>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
        </>}
       
      </div>
    </>
  );
};

export default Notes;
