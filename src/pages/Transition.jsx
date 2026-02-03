import './Transition.css';
import { Navbar } from '../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';

export default function Transition() {
  const navigate = useNavigate();
  
  return (
    <>
      <Navbar />
      <div
      className="transition-wrapper"
      onClick={() => navigate("/cue")}
      >
      <main className="home">
        <h1>Wir haben verlernt, hinzusehen.</h1>
      </main>
      </div>
    </>
  );
}
