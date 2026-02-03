import React from 'react';
import './App.css'
import { Link } from 'react-router-dom';
import {Navbar} from './components/Navbar/Navbar.jsx'


function App() {
  return (
    <>
    <Navbar></Navbar>
      <h1>Projekt Test</h1>
      <Link to="/vibrationblurred">Try Cue</Link> 
    </>
  );
}


export default App;
