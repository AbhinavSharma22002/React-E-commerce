import './App.css';
import {useState,useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from "./components/navbar";
import Home from './components/home';
// import Sign from './components/Sign';
import About from './components/about';
import NoteState from './context/notes/noteState';
import Login from './components/Login';
import Alert from './components/alert';
import Data from './components/Data';
import Shirt from './components/Shirt';
import Watch from './components/Watch';
import Jeans from './components/Jeans';
import Footer from './components/Footer';
import Shoes from './components/Shoes';
import Product from './components/Product';
import Payment from './components/Payment';
import Order from './components/Order';


function App() { 
  const [data, setdata] = useState(null);
  const [alert,setAlert] = useState(null);

  const showAlert = (message,type)=>{
    setAlert([message,type])
    setTimeout(()=>{
      setAlert(null);
    },1500);
  };


  useEffect(() => {
    async function value() {
      const response = await fetch("http://localhost:5000/api/notes/Data", {
        method: "Get",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const json = await response.json();
      if (response.status === 200) {
        setdata(json);
      } else {
        showAlert("Error", "danger");
      }
    }
    value();
  }, []);



  return (
    <>
    <NoteState>
    <Router>
    <Navbar/>
    <div style={{height:'40px'}}>
    {alert===null?"": <Alert m={alert}/>}
    </div>

    <div className="body" style={{padding:'4vmax'}}>
    <Switch>
      <Route exact path="/">
        <Product/>
      </Route>      
      <Route exact path="/Cart">
      <Home showAlert={showAlert}/>
      </Route>
      <Route exact path="/product">
        {data===null?"":<Data showAlert={showAlert} data={data}/>}
      </Route>
      <Route exact path="/payment">
        <Payment showAlert={showAlert}/>
        </Route>
      <Route exact path="/shoes">
      {data===null?"":<Shoes showAlert={showAlert} data={data} />}
      </Route>      
      <Route exact path="/Order">
        <Order showAlert={showAlert}/>
      </Route>     
      <Route exact path="/shirt">
      {data===null?"":<Shirt showAlert={showAlert} data={data} />}
      </Route>      
      <Route exact path="/watch">
      {data===null?"":<Watch showAlert={showAlert} data={data} />}
      </Route>      
      <Route exact path="/jeans">
      {data===null?"":<Jeans showAlert={showAlert} data={data} />}
      </Route>

      <Route exact path="/About">
    <About/>
      </Route>
      <Route exact path="/login">
    <Login showAlert={showAlert}/>
      </Route>
    </Switch>
    </div>
    <Footer/>
    </Router>
    </NoteState>

    </>
  );
}

export default App;
