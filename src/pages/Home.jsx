import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

const FadeInOnScroll = ({ children }) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`fade-in-section ${visible ? "is-visible" : ""}`}
    >
      {children}
    </div>
  );
};

const Home = () => {
  const navigate = useNavigate();
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <section className="home-section">
      <div className="home-content">
        <div className="home-text">
          <h1>Milutin Jokić</h1>
          <h2>Licencirani Fitnes Trener</h2>
          <p>Strogo. Fokusirano. Efikasno.</p>
          <button className="home-btn" onClick={() => navigate("/usluge")}>
            Pogledaj usluge
          </button>
        </div>

        <div className="home-image">
          <img
            src="/milutin.jpeg"
            alt="Milutin Jokić"
            onClick={() => setShowOverlay(true)}
            className="clickable-image"
          />
        </div>
      </div>

    

      {showOverlay && (
        <div className="image-overlay" onClick={() => setShowOverlay(false)}>
          <img src="/milutin.jpeg" alt="Milutin Jokić fullscreen" />
        </div>
      )}
    </section>
  );
};

export default Home;
