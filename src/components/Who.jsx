import { useEffect } from "react";
import VueSalle from "../assets/VueSalle.png";


import AOS from 'aos';
import "aos/dist/aos.css";
const Who = () => {

  useEffect (() =>{
    AOS.init({duration:1200})
  }) 
  
  return (
    <section className="grid gap-8 sm:grid-cols-2 sm:text-left sm:mx-8 mb-4 sm:pt-4 sm:ml-16 text-rose" id="Who" data-aos="fade-up">
      <div className="flex justify-center items-center">
        <img className="h-48 rounded-lg sm:h-[100%] sm:ml-5" src={VueSalle} />
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
          Manger mieux et bouger plus sont aujourd'hui deux facteurs reconnus de
          bien-être et de bonne santé.<br></br> Forte de mes deux compétences, la
          Diététique reconnue par un BTS Diététique et le Sport par une licence
          STAPS option activités physiques adaptées, ma double qualification
          vous apportera une expertise complète et qualitative.<br></br> Depuis plusieurs
          années, j'ai obtenu une expérience significative dans le domaine de la
          diététique (diététicienne au Centre hospitalier du forez) et dans le
          domaine sportif (développement et employée sport santé dans un club
          d'athlétisme, professeure d'activités physiques adaptées à
          l'association cœur et santé, professeure de gym douce/aquagym dans des
          associations et entraineur d'athlétisme et de marche nordique)<br></br> Je vous
          propose des consultations diététiques et/ou des séances pratiques de
          sport adapté au sein même de mon cabinet.<br></br> L'accompagnement s'adresse à
          toutes personnes atteintes de pathologies chroniques, digestives ou
          métaboliques ou à tous ceux désireux de retrouver une alimentation
          équilibrée et le plaisir de bouger quotidiennement.<br></br> Spécialisée dans
          le sport pour tous j'accompagne les personnes en situation de handicap
          (mental ou physique) désireuses de commencer une activité physique ou
          de se perfectionner dans un domaine sportif.<br></br> La nutrition s'associe
          parfaitement avec le sport vous apportant confiance en soi et une
          motivation supplémentaire pour mener à bien votre parcours de remise
          en forme.<br></br> La Sécurité sociale ne prend pas en charge les consultations
          diététiques, mais de nombreuses mutuelles proposent un remboursement.
          N'hésitez donc pas à prendre contact auprès de votre mutuelle. Les
          séances d'activités physiques adaptées peuvent être prises en charge
          sous certaines conditions par des mutuelles (ALD…)<br></br> N'hésitez pas à me
          contacter je vous donnerai plus d'informations sur les différentes
          prises en charge et les tarifs (possibilité d'abonnement avantageux).<br></br>
          Au plaisir de vous rencontrer
        </p>
      </div>
    </section>
  );
};

export default Who;
