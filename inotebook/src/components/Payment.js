import React, { useState } from 'react'
import { useHistory } from 'react-router';

const Payment = (props) => {
  const history = useHistory();
  const [card, setcard] = useState(false);
  const [add, setadd] = useState("");
  const [pin, setpin] = useState("");
  const [number, setnumber] = useState("");
  const [CN, setCN] = useState("");
  const [NC, setNC] = useState("");
  const [expire, setexpire] = useState("");
  const [hell, sethell] = useState("");
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
    let val = validateCardNo(CN);
    if(val==="American Express"){
      sethell("./am7.png");
    }
    else if(val==="Visa"){
      sethell("./vs2.jfif");
    }
    else if(val==="Master"){
      sethell("./ms1.jfif");
    }
    else{
      sethell("");
    }
  };
  const handleChange5 = (e) => {
    setNC(e.target.value);
  };
  const handleChange6 = (e) => {
    setexpire(e.target.value);
  };
  const checkLuhn = (cardNo)=> {
    var s = 0;
    var doubleDigit = false;
    for (var i = cardNo.length - 1; i >= 0; i--) {
        var digit = +cardNo[i];
        if (doubleDigit) {
            digit *= 2;
            if (digit > 9)
                digit -= 9;
        }
        s += digit;
        doubleDigit = !doubleDigit;
    }
    return s % 10 === 0;
};

const validateCardNo = (no)=> {
  if(no && checkLuhn(no) && no.length===16){
    if((no.length === 15) && (no.indexOf("34") === 0 || no.indexOf("37") === 0)){  //american express
      return "American Express";
    }
    else if(no.length === 13 && no[0] === 4){ //visa
      return "Visa";
    }
    else if(no.indexOf("51")===0 || no.indexOf("52")===0 ||no.indexOf("53")===0 ||no.indexOf("54")===0 ||no.indexOf("55")===0){
      return "Master";
    }
    else{
      return false;
    }
  }
  return false;
};

  const handleSubmit2 = async (e) => {
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
          number: number,
          Card_number: CN,
          Name_card: NC,
          Expire: expire
        })
      };
      await fetch(
        'http://localhost:5000/api/auth/updateuser',
        requestOptions
      );
    }
    else{
      props.showAlert("Please Log In!!","danger");
      history.push('/login');
    }
    setcard(false);
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    setcard(true);
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
                      <img src={hell} alt="/"/>
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
                      onClick={handleSubmit2}
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
