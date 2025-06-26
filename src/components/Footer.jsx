import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>
  &copy; {new Date().getFullYear()} Milutin Jokić | Sva prava zadržana.
  <a href="https://www.instagram.com/milutin.fit" target="_blank" rel="noopener noreferrer">
    Instagram
  </a>
</p>

    </footer>
  );
};

export default Footer;
