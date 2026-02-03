import { Navbar } from "../components/Navbar/Navbar";
import "./CuePage.css";
import { useNavigate } from "react-router-dom";

export default function CuePage() {
  const navigate = useNavigate();

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
          <button className="cue-primary-button">
            So funktioniert’s
          </button>
          <div className="cue-arrow">⌄</div>
        </div>
      </section>

      <section className="cue-section">
        <div className="cue-grid">
          <div className="cue-visual-placeholder">
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
          </div>
        </div>
      </section>

      <section className="cue-more">
        <h2>Erfahren Sie mehr</h2>
        <button className="cue-secondary-button">
          Zu den häufig gestellten Fragen →
        </button>

        <div className="cue-cards">
          <div className="cue-card">
            <h3>FAQ</h3>
            <p>
              Sie haben Fragen? Schauen Sie nach, ob die
              Antworten bereits dabei sind.
            </p>
          </div>

          <div className="cue-card">
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
    </div>
  );
}