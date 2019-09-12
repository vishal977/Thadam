import React from 'react';
import './App.css';
import Login from './Components/Login'
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './Components/Home'
import PoliceHome from './Components/PoliceHome';
import NewFIR from './Components/NewFIR';
import ViewCase from './Components/ViewCase';
import Forensics from './Components/CrimeDetails/Forensics'

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path = "/" component = {Home}/>
        <Route path = "/police" component = {PoliceHome}/>
        <Route path = "/newfir" component = {NewFIR}/>
        <Route path = "/viewcase/:caseId" component = {ViewCase}/>
        <Route path = "/crimedata/forensics/:caseId/" component = {Forensics}/>
      </Router>
    </div>
  );
}

export default App;
