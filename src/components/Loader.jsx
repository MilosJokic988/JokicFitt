import React from "react";
import "./Loader.css";

const Loader = () => {
  return (
    <div className="loader-container">
      <img src="/tegic.svg" alt="Učitavanje..." className="loader-icon" />
    </div>
  );
};

export default Loader;
