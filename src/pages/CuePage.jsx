import { Navbar } from "../components/Navbar/Navbar";
import "./CuePage.css";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import { Funktionsweise } from "../components/component 1/Funktionsweise";
import { Schema } from "../components/component 1/Schema";


export default function CuePage() {
  const navigate = useNavigate();
  const firstSectionRef = useRef(null);
  const scrollToSection = () => {
         firstSectionRef.current?.scrollIntoView({ behavior: "smooth" });
       }

  const handleEnter = () => {
    navigate("/cue");
  };

  return (
    <div className="cue-page">
        <Navbar />
      <section className="cue-hero" onClick={handleEnter}>
        <div className="cue-hero-content">
          <h1>
            Das Leben passiert,
            <br />
            während du wegschaut.
          </h1>
          <p className="cue-subline">Cue holt dich zurück.</p>

            <img src="WearableCue.png" alt="Beschreibung des Bildes"></img>
        </div>

        <div className="cue-scroll-hint">
          <button 
             className="cue-primary-button" 
             onClick={(e) => {
               e.stopPropagation(); 
              scrollToSection();
            }}
           >
            So funktioniert’s
          </button>
          <div className="cue-arrow">⌄</div>
        </div>
      </section>

      {/* GEÄNDERT: Hier wird der Anker (ref) gesetzt */}
       <section className="cue-section" ref={firstSectionRef}>
          <div className="cue-grid">
            <div className="cue-visual-placeholder">
             
             <div className="svg-dummy-radar"><Schema/></div>
            </div>
          <div className="cue-text">
            <h2>Was ist Cue?</h2>
            <p>
              Cue ist mehr als ein Wearable – es ist Ihr sanfter
              Begleiter zurück ins Hier und Jetzt. In einer Welt
              voller Ablenkungen hilft Ihnen Cue, die wichtigen
              Momente nicht zu verpassen.
            </p>
            <p>
              Mit subtilen, unauffälligen Hinweisen bringt Sie
              Cue zurück zu dem, was wirklich zählt.
            </p>
          </div>
        </div>
      </section>

      <section className="cue-section">
        <div className="cue-grid reverse">
          <div className="cue-text">
            <h2>So funktioniert’s</h2>
            <p>
              Cue unterstützt Sie beim Knüpfen neuer Kontakte oder
              beim Erkennen sozialer Möglichkeiten.
            </p>
            <p>
              Durch sanfte haptische Signale werden Sie aufmerksam
              gemacht – respektvoll, leise und intuitiv.
            </p>
          </div>
          <div className="cue-visual-placeholder">
          <div className="svg-dummy-path"><Funktionsweise/></div>
          </div>
        </div>
      </section>

      {/* ... oberer Teil bleibt gleich ... */}

      <section className="cue-more">
        <h2>Erfahren Sie mehr</h2>
        <button className="cue-secondary-button" 
             onClick={(e) => {
               e.stopPropagation(); 
              scrollToSection();
            }}>
          Zu den häufig gestellten Fragen →
        </button>

        <div className="cue-cards">
          <div className="cue-card">
            <div className="card-icon">?</div>
            <h3>FAQ</h3>
            <p>
              Sie haben Fragen? Schauen Sie nach, ob die
              Antworten bereits dabei sind.
            </p>
          </div>

          <div className="cue-card">
            <div className="card-icon">✉️</div>
            <h3>Kontakt</h3>
            <p>
              Spezifische Fragen? Ich helfe gerne weiter.
            </p>
          </div>
        </div>

        <p className="cue-footer-line">
          Jetzt Kopf hoch, es gibt was zu entdecken!
        </p>
      </section>

      {/* FOOTER START */}
      <footer className="cue-footer-wrapper">
        
        {/* OBERER GRAUER BEREICH */}
        <div className="cue-footer-main">
          <div className="cue-footer-inner">
            <div className="cue-footer-content">
              <div className="cue-footer-column">
                <h4>Aktuelles</h4>
                <ul>
                  <li>Neuigkeiten</li>
                  <li>Cue von A bis Z</li>
                  <li>Aktuelle Pressemitteilungen</li>
                </ul>
              </div>

              <div className="cue-footer-column">
                <h4>Nützliche Links</h4>
                <ul>
                  <li>Produktinformationen</li>
                  <li>Benutzerhandbuch</li>
                  <li>Support</li>
                </ul>
              </div>

              <div className="cue-footer-column">
                <h4>Kontakt</h4>
                <ul>
                  <li>Cue Serviceportal</li>
                  <li>Kundenservice</li>
                  <li>Cue Community</li>
                  <li>Cue_official</li>
                  <li>Cue Network</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* UNTERER DUNKLER BEREICH */}
        <div className="cue-footer-bottom-bar">
          <div className="cue-footer-inner">
            <div className="cue-footer-bottom-content">
              <span>© 2026 Cue. Alle Rechte vorbehalten.</span>
              <div className="cue-footer-legal">
                <span>Impressum</span>
                <span>AGB</span>
                <span>Datenschutzerklärung</span>
                <span>Barrierefreiheit</span>
                <span>Cookie-Richtlinien</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}