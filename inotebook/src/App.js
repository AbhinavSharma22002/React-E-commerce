import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Navbar from "./components/navbar";
import Home from './components/home';
import About from './components/about';
import NoteState from './context/notes/noteState';
function App() {
  return (
    <>
    <NoteState>
    <Router>
    <Navbar/>
    <Switch>
      <Route path="/Home">
        <Home/>
      </Route>
      <Route path="/About">
    <About/>
      </Route>
    </Switch>
    </Router>
    </NoteState>

    </>
  );
}

export default App;
