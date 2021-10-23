import './App.css';
import {useState} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from "./components/navbar";
import Home from './components/home';
import Sign from './components/Sign';
import About from './components/about';
import NoteState from './context/notes/noteState';
import Login from './components/Login';
import Alert from './components/alert';
function App() {
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type)=>{
    setAlert([message,type])
    setTimeout(()=>{
      setAlert(null);
    },1500);
  };


  return (
    <>
    <NoteState>
    <Router>
    <Navbar/>
    {alert===null?"": <Alert m={alert}/>}
    <div className="container">
    <Switch>
      <Route exact path="/">
        <Home showAlert={showAlert}/>
      </Route>
      <Route exact path="/About">
    <About/>
      </Route>
      <Route exact path="/login">
    <Login showAlert={showAlert}/>
      </Route>
      <Route exact path="/signup">
    <Sign showAlert={showAlert}/>
      </Route>
    </Switch>
    </div>
    </Router>
    </NoteState>

    </>
  );
}

export default App;
