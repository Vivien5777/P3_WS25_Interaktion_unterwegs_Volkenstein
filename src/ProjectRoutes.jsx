import React from 'react';
import { BrowserRouter, Routes , Route, useLocation } from 'react-router-dom';
import App from './App';
import Transition from './pages/transition';
import CuePage from './pages/CuePage';  
import VibrationBlurred from './pages/VibrationBlurred';
import Curious from './pages/Curious';
import { useEffect } from 'react';

function BodyClassManager() {
    const location = useLocation();
  
    useEffect(() => {
  if (location.pathname === '/') {
    document.body.className = 'ausgangslage';
  } else if (location.pathname === '/cue') {
    document.body.className = 'cue-page';
  } else if (location.pathname === '/transition') {
    document.body.className = 'transition-page';
  } else if (location.pathname === '/vibrationblurred') {
    document.body.className = 'vibrationblurred';
  } else if (location.pathname === '/curious') {
    document.body.className = 'curious';
  }

}, [location]);
  
    return null;
  }

export function ProjectRoutes() {
    return (
        <BrowserRouter>
        <BodyClassManager />
         <Routes>
            <Route path="/" element={<App />} />
            <Route path="/transition" element={<Transition />} />
            <Route path="/cue" element={<CuePage />} />
            <Route path="/vibrationblurred" element={<VibrationBlurred />} />
            <Route path="/curious" element={<Curious />} />
         </Routes>
        </BrowserRouter>
    )
}