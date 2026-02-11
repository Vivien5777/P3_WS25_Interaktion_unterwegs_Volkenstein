import React, {useState} from 'react';
import './Curious.css'
import { Link } from 'react-router-dom';
import { Navbar } from '../components/Navbar/Navbar';
import CuriousBackground from '/Users/vivienvolkenstein/Documents/P3_WS25_Interaktion_unterwegs_Volkenstein/P3_WS25_Interaktion_unterwegs_Volkenstein/Curious.PNG';// Passe den Pfad an!
import CircleBackground from '/Users/vivienvolkenstein/Documents/P3_WS25_Interaktion_unterwegs_Volkenstein/P3_WS25_Interaktion_unterwegs_Volkenstein/Circle.PNG';  // Passe den Pfad an!

function Curious() {
  // Zustand: Hovert der User über der Person?
  const [isHovering, setIsHovering] = useState(false);

  return (
    <>
      <Navbar />
      
      <div className="scene-wrapper">
        
        {/* Ebene 1: Das normale Bild (Immer sichtbar) */}
        <img 
          src={CuriousBackground} 
          alt="Szene Scharf" 
          className="bg-image sharp" 
        />

        {/* Ebene 2: Das Effekt-Bild (Nur sichtbar, wenn isHovering true ist) */}
        <img 
          src={CircleBackground} 
          alt="Szene Fokus" 
          className={`bg-image blur-layer ${isHovering ? 'visible' : ''}`} 
        />

        {/* Ebene 3: Der unsichtbare Trigger-Button über der Person */}
        <Link 
          to="/transition" 
          className="person-trigger"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Leer, da unsichtbare Klickfläche */}
        </Link>

      </div>
    </>
  );
}

export default Curious;