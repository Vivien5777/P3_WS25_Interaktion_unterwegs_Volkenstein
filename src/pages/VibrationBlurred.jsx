import React, { useEffect } from 'react';
import './VibrationBlurred.css';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar/Navbar';

function VibrationBlurred() {
  const navigate = useNavigate();

  useEffect(() => {
    // Navigiere nach 3 Sekunden zur Curious-Seite
    const timer = setTimeout(() => {
      navigate('/curious');
    }, 1500);

    return () => clearTimeout(timer); // Timer aufräumen, wenn die Komponente entladen wird
  }, [navigate]);

  return (
    <>
      <Navbar />
      <h1>Vibration Blurred</h1>
    </>
  );
}

export default VibrationBlurred;