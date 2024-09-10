import { useEffect } from "react";
import VueSalle from "../assets/VueSalle.png";
import Celine from "../assets/PhotoCeline.webp";

import AOS from 'aos';
import "aos/dist/aos.css";
const Who = () => {

  useEffect (() =>{
    AOS.init({duration:1200})
  }) 
  
  return (
    <section className="grid gap-8 sm:grid-cols-2 sm:text-left sm:mx-8 mb-4 sm:pt-4 sm:ml-16 text-rose" id="Who" data-aos="fade-up">
      <div className="flex justify-center items-center">
        <img className="h-48 sm:h-[100%] sm:ml-5 object-contain " src={Celine} />
      </div>
      <div className="mx-9 sm:ml-11">
        <h1 className="text-5xl mb-8 flex justify-center font-semibold sm:justify-start sm:text-7xl">Qui suis-je?</h1>
        <p className="text-justify leading-loose text-grey sm:w-[75%] sm:text-2xl sm:leading-10">
          {/* Forte de mes deux compétences, la Diététique reconnue par un BTS
          Diététique et le Sport par une licence STAPS option Activités physiques adaptées, ma double qualification vous apportera une
          expertise complète et qualitative. Je vous propose des consultations diététiques et/ou des séances pratiques de sport adapté. Les prises en
          charge s'adressent à toutes personnes atteintes de pathologies chroniques, digestives ou métaboliques ou à tous ceux désireux de
          retrouver une alimentation équilibrée et le plaisir de bouger
          quotidiennement. */}
          Forte de mes deux compétences, la
          Diététique reconnue par un BTS Diététique et le Sport par une licence
          STAPS option activités physiques adaptées, ma double qualification
          vous apportera une expertise complète et qualitative.<br></br> Depuis plusieurs
          années, j'ai obtenu une expérience significative dans le domaine de la
          diététique (<span className="text-rose font-bold">diététicienne</span> au Centre hospitalier du forez) et dans le
          domaine sportif (employée <span className="text-rose font-bold">sport santé</span> dans un club
          d'athlétisme, professeure d'activités physiques adaptées à
          l'association cœur et santé, professeure de gym douce/aquagym dans des
          associations et entraineur d'athlétisme et de marche nordique)<br></br> Je vous
          propose des <span className="text-rose font-bold">consultations diététiques</span> et/ou des séances pratiques de 
           <span className="text-rose font-bold"> sport adapté</span> au sein même de mon cabinet à <span className="text-grey font-bold">Andrézieux-Bouthéon</span> en plein cœur du <span className="text-grey font-bold">Forez</span> (<span className="text-grey font-bold">Loire 42</span>).<br></br> Spécialisée dans
          le sport pour tous j'accompagne les personnes en situation de <span className="text-rose font-bold">handicap </span>
          (mental ou physique) désireuses de commencer une activité physique ou
          de se perfectionner dans un domaine <span className="text-rose font-bold">sportif</span>.<br></br>
          Au plaisir de vous rencontrer
        </p>
      </div>
    </section>
  );
};

export default Who;
