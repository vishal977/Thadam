import React from 'react';
import './App.css';
import Nav from './Components/Navbar/Nav.js'
import Login from './Components/Login'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Components/Home'
import PoliceHome from './Components/PoliceHome';
import NewFIR from './Components/NewFIR';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Route exact path = "/" component = {Home}/>
        <Route path = "/police" component = {PoliceHome}/>
        <Route path = "/newfir" component = {NewFIR}/>
      </Router>
    </div>
  );
}

export default App;
