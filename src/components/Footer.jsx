import React from "react";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 600 });
  });

  return (
    <div className="bg-blue text-white p-4" id="Contact" data-aos="fade-up">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Contact Section */}
        <div className="flex flex-col items-center text-center gap-4">
          <h1 className="text-green font-bold text-xl sm:text-2xl">Contact</h1>
          <div className="text-lg">cf.apadiet@gmail.com</div>
          <div className="text-lg">06.68.47.55.97</div>
        </div>

        {/* Horaires Section */}
        <div className="flex flex-col items-center text-center gap-4">
          <h1 className="text-green font-bold text-xl sm:text-2xl">
            Horaires:
          </h1>
          <div className="text-lg">
            Lundi 9h30-19h
            <br />
            Mardi 9h30-16h30
            <br />
            Mercredi 9h30-20h
            <br />
            Jeudi 9h30-16h30
            <br />
            Vendredi 9h30-18h
            <br />
            Samedi 9h-12h
          </div>
        </div>

        {/* Adresse Section */}
        <div className="flex flex-col items-center text-center gap-4">
          <h1 className="text-green font-bold text-xl sm:text-2xl">Adresse</h1>
          <div className="text-lg">
            Espace Ambroise Paré, 10 Av. de Saint-Etienne, 42160
            Andrézieux-Bouthéon
            <br />
            (au premier étage avec ascenseur)
          </div>
        </div>

        {/* Informations Légales */}
        <div className="flex items-center justify-center lg:justify-end text-lg">
          Informations Légales
        </div>
      </div>
    </div>
  );
};

export default Footer;
