import React from "react";
import { useNavigate } from "react-router-dom";
import "./Services.css";

const Services = () => {
  const navigate = useNavigate();

  return (
<section className="services-section">
  <h1>Usluge</h1>

  <div className="services-layout">
    {/* Leva slika */}
   

    {/* Glavni sadržaj – usluge */}
    <div className="services-content">
      <div className="service-card" id="individualni">
        <h2>Individualni treninzi</h2>
        <p>
          1-na-1 treninzi u teretani, potpuno prilagođeni tvojoj formi i ciljevima. Maksimalna pažnja, profesionalna korekcija forme i motivacija na svakom koraku.
        </p>
        <button onClick={() => navigate("/kontakt")}>Zakaži trening</button>
      </div>

      <div className="service-card" id="online">
        <h2>Online treninzi</h2>
        <p>
          Trening iz udobnosti tvog doma – putem video poziva i personalizovanog plana. Idealno za one koji žele fleksibilnost, ali bez kompromisa u kvalitetu.
        </p>
        <button onClick={() => navigate("/kontakt")}>Zatraži plan</button>
      </div>

      <div className="service-card" id="ishrana">
        <h2>Plan ishrane i podrška</h2>
        <p>
          Bez pravilne ishrane nema napretka. Dobijaš smernice, plan ishrane i redovne savete koji prate tvoje ciljeve i potrebe. Prava kombinacija discipline i balansa.
        </p>
        <button onClick={() => navigate("/kontakt")}>Zatraži savete</button>
      </div>
    </div>

    {/* Desna slika */}
   
  </div>
</section>

  );
};

export default Services;
