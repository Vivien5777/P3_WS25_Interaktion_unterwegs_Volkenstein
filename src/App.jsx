import React from 'react';
import './App.css'
import { Link } from 'react-router-dom';
import {Navbar} from './components/Navbar/Navbar.jsx'


function App() {
  return (
    <>
    <Navbar></Navbar>
      <Link to="/vibrationblurred" className="cue-link">
      <div className="wearable-trigger">
        Try Cue
      </div>
      </Link> 
    </>
  );
}


export default App;
