import React,{useState} from 'react';
import { useHistory } from 'react-router';
import  '../style.css';
const Sign = (props) => {
    const history = useHistory();
    const [name, setname] = useState("");
    const [password, setpassword] = useState("");
    const [email, setemail] = useState("");

    const handleChange1 = (e)=>{
        setname(e.target.value);
    }
    const handleChange2 = (e)=>{
        setpassword(e.target.value);
    }
    const handleChange3 = (e)=>{
        setemail(e.target.value);
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const response = await fetch ("http://localhost:5000/api/auth/createUser",{
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({name:name, password: password,email:email})
        });
        if(response.status===200){
            history.push("/login");
            props.showAlert("Account Created Successfully!!","success");
        }
        else{
            props.showAlert("Invalid credentials","danger");
        }
    }
    return (
        <>
            
  <div className="d-md-flex half">
    <div className="bg hello"></div>
    <div className="contents">

      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-md-12">
            <div className="form-block mx-auto">
              <div className="text-center mb-5">
              <h3>Login to <strong>Colorlib</strong></h3>
              </div>
              <form>
                <div className="form-group first">
                  <label htmlFor="username">Username</label>
                  <input type="text" className="form-control" value={name} onChange={handleChange1}  placeholder="Your Name" id="username"/>
                </div>
                <div className="form-group last mb-3">
                  <label htmlFor="password">Password</label>
                  <input type="password" className="form-control" value={password} onChange={handleChange2} placeholder="Your Password" id="password"/>
                </div>
                <div className="form-group last mb-3">
                  <label htmlFor="email">Email</label>
                  <input type="email" className="form-control" value={email} onChange={handleChange3}  placeholder="your-email@gmail.com" id="email"/>
                </div>
               
                {/*                 
                <div className="d-sm-flex mb-5 align-items-center">
                  <label className="control control--checkbox mb-3 mb-sm-0"><span className="caption">Remember me</span>
                    <input type="checkbox" checked="checked"/>
                    <div className="control__indicator"></div>
                  </label>
                  <span className="ml-auto"><a href="#" className="forgot-pass">Forgot Password</a></span> 
                </div> */}
                <input type="submit" value="Log In" className="btn btn-block btn-primary" onClick={handleSubmit}/>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>

    
  </div>
    
    

        </>
    )
}

export default Sign
