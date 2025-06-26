import React, { useState, useRef } from "react";
import "./Contact.css";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zrosp3e",     // npr. service_xyz123
        "template_hm198gk",    // npr. template_abc789
        formRef.current,
        "HqvQfS12lC5JvYl-3"      // npr. P2nXAbCdEfG12345
      )
      .then(
        () => {
          alert("Poruka je uspešno poslata!");
          setForm({ user_name: "", user_email: "", message: "" });
        },
        (error) => {
          console.error("Greška prilikom slanja:", error);
          alert("Došlo je do greške. Pokušajte ponovo.");
        }
      );
  };

  return (
    <section className="contact-section">
      <h1>Kontakt</h1>
      <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
        <input
          type="text"
          name="user_name"
          placeholder="Vaše ime"
          value={form.user_name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Vaš email"
          value={form.user_email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Vaša poruka"
          rows="5"
          value={form.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Pošalji poruku</button>
      </form>

      <div className="contact-info">
        <p>Email: <a href="mailto:jokicmilutin65@gmail.com">jokicmilutin65@gmail.com</a></p>
        <p>Instagram: <a href="https://instagram.com/milutin.fit" target="_blank" rel="noopener noreferrer">@jokic.fit</a></p>
      </div>
    </section>
  );
};

export default Contact;
