import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <h1>O meni</h1>

        {/* Sertifikat */}
        <div className="certificate">
          <p><strong>Sertifikat DIF-a</strong> — zvanična potvrda znanja i stručnosti:</p>
          <img src="/sertifikat-dif.jpg" alt="Sertifikat DIF" className="certificate-img" />
        </div>

        {/* Tekst o njemu */}
        <p>
          Zovem se <strong>Milutin Jokić</strong> i posvećen sam jednom cilju — da ti pomognem da postaneš najjača, najzdravija verzija sebe.  
        </p>
        <p>
          Završio sam obuku za <strong>licenciranog fitnes trenera</strong> na Fakultetu sporta i fizičkog vaspitanja — <strong>DIF</strong>, jednom od najprestižnijih mesta za obrazovanje sportskih profesionalaca u Srbiji.
        </p>
        <p>
          Moj pristup je jednostavan: disciplina, konkretan rad, i podrška bez izgovora. Moji treninzi nisu samo fizički izazov — oni su put ka mentalnoj snazi i samopouzdanju. Bez magičnih rešenja. Samo posvećenost, znanje i rezultati.
        </p>
        <p>
          Bilo da tek počinješ ili si već iskusan u treningu, pravi plan i pravi trener čine razliku. Tu sam da te vodim kroz ceo proces.
        </p>

        {/* Dugme za CV */}
        <a href="/Milutin.pdf" download className="cv-btn">
  📄 Preuzmi CV
</a>
      </div>
    </section>
  );
};

export default About;
