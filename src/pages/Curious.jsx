import React from 'react';
import './Curious.css'
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar/Navbar';


function Curious() {
  return (
    <>
    <Navbar></Navbar>
      <h1>Curious</h1>
      <Link to="/transition">Look around</Link> 
    </>
  );
}


export default Curious;