import React, { useEffect } from 'react';
import './VibrationBlurred.css';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '../components/Navbar/Navbar';
import vibrationSound from '../assets/Cue-Vibration.wav'

// Ab hier mit KI generiert
function VibrationBlurred() {
  const navigate = useNavigate();

  useEffect(() => {
    // 2. Audio-Objekt erstellen
    const audio = new Audio(vibrationSound);
    
    // Optional: Lautstärke anpassen (0.0 bis 1.0)
    audio.volume = 1.0; 

    // 3. Sound abspielen
    // Wir nutzen ein catch(), falls der Browser Autoplay blockiert (passiert manchmal)
    audio.play().catch(error => console.log("Audio Autoplay blockiert:", error));

    // Navigiere nach 1,5 Sekunden zur Curious-Seite
    const timer = setTimeout(() => {
      navigate('/curious');
    }, 1300);

    // 4. CLEANUP (Wichtig!)
    // Das passiert, wenn die Komponente verlassen wird (also nach 1,5s)
    return () => {
      clearTimeout(timer);
      audio.pause();       // Sound stoppen
      audio.currentTime = 0; // Sound zurückspulen
    }; 
  }, [navigate]);

  return (
    <>
      <Navbar />
    </>
  );
}

export default VibrationBlurred;