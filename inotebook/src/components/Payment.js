import React, { useState } from 'react'
import { useHistory } from 'react-router';

const Payment = () => {
  const history = useHistory();
  const [card, setcard] = useState(false);
  const [add, setadd] = useState("");
  const [pin, setpin] = useState("");
  const [number, setnumber] = useState("");

  const handleChange1 = (e) => {
    setadd(e.target.value);
  };

  const handleChange2 = (e) => {
    setpin(e.target.value);
  };

  const handleChange3 = (e) => {
    setnumber(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(localStorage.getItem('token')){
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "auth-token": localStorage.getItem('token'),
        },
        body: JSON.stringify({
          address: add,
          pin: pin,
          number: number
        })
      };
      await fetch(
        'http://localhost:5000/api/auth/updateuser',
        requestOptions
      );
    }
    else{
      // props.showAlert("Please Log In!!","danger");
      history.push('/login');
    }
    setcard(true);
    setadd("");
    setpin("");
    setnumber("");
  };



    return (
        <div className="d-flex justify-content-center half">
        <div>
          <div>            
            <div className="row align-items-center justify-content-center">
              <div className="col-md-12">
                <div className="form-block mx-auto">
                  {card?<>
                    <div className="text-center mb-5">
                    <h3 style={{color:'red'}}>
                    <strong>Payment Details</strong>
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
                        className="form-control"
                        placeholder="Enter correct number"
                        id="tel"
                      />
                    </div>
                    <div className="form-group" style={{display:'flex',flexDirection:'row'}}>
                    <input
                      type="submit"
                      value="Log In"
                      onClick={handleSubmit}
                      className="btn btn-block btn-danger"
                    />
                    </div>
                  </form>
                  </>:<>
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
                        className="form-control"
                        placeholder="Enter correct number"
                        id="tel"
                      />
                    </div>
                    <div className="form-group" style={{display:'flex',flexDirection:'row'}}>
                    <input
                      type="submit"
                      value="Log In"
                      onClick={handleSubmit}
                      className="btn btn-block btn-danger"
                    />
                    </div>
                  </form>
                  </>}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    )
}

export default Payment
