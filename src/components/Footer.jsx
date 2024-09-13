import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Footer = () => {
  useEffect(() => {
    AOS.init({ duration: 600 });
  }, []);

  // Fonction pour copier l'adresse email
  const handleCopyEmail = () => {
    const email = "cf.apadiet@gmail.com";
    navigator.clipboard.writeText(email)
      .then(() => {
        alert("Adresse email copiée dans le presse-papiers !");
      })
      .catch((err) => {
        console.error("Erreur lors de la copie :", err);
      });
  };

  return (
    <div className="bg-blue text-white p-4" id="Contact" data-aos="fade-up">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Section Contact */}
        <div className="flex flex-col items-center text-center gap-4">
          <h1 className="text-green font-bold text-xl sm:text-2xl">Contact</h1>
          <div
            className="text-lg cursor-pointer underline hover:text-green"
            onClick={handleCopyEmail}
          >
            cf.apadiet@gmail.com
          </div>
          <div className="text-lg">06.68.47.55.97</div>
        </div>

        {/* Section Horaires */}
        <div className="flex flex-col items-center text-center gap-4">
          <h1 className="text-green font-bold text-xl sm:text-2xl">Horaires:</h1>
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

        {/* Section Adresse */}
        <div className="flex flex-col items-center text-center gap-4">
          <h1 className="text-green font-bold text-xl sm:text-2xl">Adresse</h1>
          <div className="text-lg underline hover:text-green">
            <a
              href="https://www.google.com/maps/place/10+Av.+de+Saint-Etienne,+42160+Andr%C3%A9zieux-Bouth%C3%A9on/@45.5257939,4.2643697,17.75z/data=!4m6!3m5!1s0x47f44ccbe1414c25:0xc93cb4d004e1b07d!8m2!3d45.5257723!4d4.2647847!16s%2Fg%2F11bw43rnql?entry=ttu&g_ep=EgoyMDI0MDkxMC4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              Espace Ambroise Paré, 10 Av. de Saint-Etienne, 42160
              Andrézieux-Bouthéon
            </a>
            <br />
            (au premier étage avec ascenseur)
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
