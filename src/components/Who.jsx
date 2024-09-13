import React, { useEffect } from "react";
import VueSalle from "../assets/VueSalle.png";
import Celine from "../assets/PhotoCeline.webp";
import AOS from 'aos';
import "aos/dist/aos.css";

const Who = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section className="container mx-auto px-4 py-8 md:py-16" id="Who" data-aos="fade-up">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="flex justify-center md:justify-start">
          <img className="h-48 md:h-auto md:max-h-[80vh] object-contain" src={Celine} alt="Celine" />
        </div>
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-rose text-center md:text-left">Qui suis-je?</h1>
          <p className="text-grey text-base md:text-lg lg:text-xl leading-relaxed text-justify">
            Forte de mes deux compétences, la Diététique reconnue par un BTS Diététique et le Sport par une licence STAPS option activités physiques adaptées, ma double qualification vous apportera une expertise complète et qualitative.
            <br /><br />
            Depuis plusieurs années, j'ai obtenu une expérience significative dans le domaine de la diététique (<span className="text-rose font-bold">diététicienne</span> au Centre hospitalier du forez) et dans le domaine sportif (employée <span className="text-rose font-bold">sport santé</span> dans un club d'athlétisme, professeure d'activités physiques adaptées à l'association cœur et santé, professeure de gym douce/aquagym dans des associations et entraineur d'athlétisme et de marche nordique).
            <br /><br />
            Je vous propose des <span className="text-rose font-bold">consultations diététiques</span> et/ou des séances pratiques de <span className="text-rose font-bold">sport adapté</span> au sein même de mon cabinet à <span className="font-semibold">Andrézieux-Bouthéon</span> en plein cœur du <span className="font-semibold">Forez</span> (<span className="font-semibold">Loire 42</span>).
            <br /><br />
            Spécialisée dans le sport pour tous j'accompagne les personnes en situation de <span className="text-rose font-bold">handicap</span> (mental ou physique) désireuses de commencer une activité physique ou de se perfectionner dans un domaine <span className="text-rose font-bold">sportif</span>.
            <br /><br />
            Au plaisir de vous rencontrer
          </p>
        </div>
      </div>
    </section>
  );
};

export default Who;