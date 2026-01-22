import React from 'react';
import { BrowserRouter, Routes , Route, useLocation } from 'react-router-dom';
import App from './App';
import { Transition } from './pages/transition';  
import { useEffect } from 'react';
/*import { Navbar } from './components/Navbar/Navbar';*/

function BodyClassManager() {
    const location = useLocation();
  
    useEffect(() => {
      if (location.pathname === '/') {
        document.body.className = 'ausgangslage';
      } else if (location.pathname === '/transition') {
        document.body.className = 'transition-page';
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
         </Routes>
        </BrowserRouter>
    )
}