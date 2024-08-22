import React, { useState } from 'react';
import { useEffect } from "react";
import Modal from './Modal';
import HomePhoto from "../assets/HomePhoto.jpg";

import AOS from 'aos';
import "aos/dist/aos.css";

const BoldText = ({ children }) => (
  <span className="font-bold">{children}</span>
);

const TextXL = ({ children }) => (
  <span className='text-xl font-extrabold'>{children}</span>
);

const ColoredText = ({ color, children }) => (
  <span className={`font-bold text-xl text-${color}`}>{children}</span>
);


const Services = () => {

  useEffect (() =>{
    AOS.init({duration:1200})
  }) 
  
  const [modalInfo, setModalInfo] = useState({ showModal: false, title: '', content: null });

  const handleOpenModal = (title, content) => {
    setModalInfo({ showModal: true, title, content });
  };

  const handleCloseModal = () => {
    setModalInfo({ showModal: false, title: '', content: null });
    
  };

  const Underline = ({ children }) => (
    <span className={'underline'}>{children}</span>

    
  )
  

  return (
    
    <div id='Services'>
      <div className="mx-9">
        <h1 className="text-5xl mb-8 flex justify-center font-semibold sm:justify-start sm:text-7xl sm:ml-8 text-rose" data-aos="fade-up">
          Mes services
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-9" data-aos="fade-up">
        <div className="flex flex-col items-center text-center">
          <img
            src={HomePhoto}
            className="w-[70%] mb-5"
            alt="Consultation diététique"
          />
          <button
            className="mb-8 bg-green hover:bg-rose text-white py-2 px-4 rounded font-bold transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
            onClick={() =>
              handleOpenModal(
                "Consultation diététique",
                <>
                  <p>
                    Les consultations peuvent concerner tout le monde : perte de
                    poids, prise de masse musculaire, prévention du diabète, du
                    cholestérol, alimentation adaptée à une maladie digestive,
                    rénale ou métabolique accompagnement de l'alimentation
                    pendant la grossesse ou l'allaitement, transition vers un
                    mode d'alimentation végétarien ou végétalien…
                  </p>
                  <p>
                    L'alimentation est au centre de nos vies et le champ
                    d'action du diététicien est très vaste. Mon rôle est de vous
                    accompagner et de vous aider de façon pratique dans votre
                    quotidien.
                  </p>
                  <br></br>
                  <ColoredText color="rose">· Consultation Solo</ColoredText>
                  <p>
                    <br></br>
                    <BoldText>· 1ère consultation</BoldText> : 50 euros
                  </p>
                  <p>
                    La première consultation nous permet de faire connaissance
                    et est le point de départ d'une relation de confiance. Cette
                    première prise de contact permet d'évaluer votre
                    alimentation, vos habitudes, vos attentes, vos besoins
                    nutritionnels et de mettre en place une stratégie pour
                    atteindre vos objectifs.
                  </p>
                  <br></br>
                  <BoldText>· Consultation de suivi</BoldText> : 35 euros
                  <p>
                    La consultation de suivi est le moment de faire le point sur
                    la réalisation des objectifs fixés lors de notre premier
                    échange et d'assurer une continuité pour atteindre vos
                    objectifs en affinant les méthodes au regard de vos
                    résultats et de votre ressenti. Elles sont espacées
                    d'environ 2 semaines (ou plus selon vos besoins et
                    disponibilités) pour vous permettre d'assimiler les
                    différents thèmes abordés, de mettre en place les
                    exercices/outils proposés.
                  </p>
                  <br></br>
                  <ColoredText color="rose">· Consultation Duo</ColoredText>
                  <p>
                    <br></br>
                    La prise en charge nutritionnelle en couple permet d'avancer
                    à deux pour atteindre vos objectifs sans frustration
                  </p>
                  <p>
                    <BoldText>· 1ère consultation Duo</BoldText> : 90 euros
                  </p>
                  <p>
                    <BoldText>· Consultation de suivi Duo</BoldText> : 60 euros
                  </p>
                  <p>
                    <br></br>
                    Vous êtes loin, vous n'avez pas le temps de vous déplacer au
                    cabinet, vous voulez éviter les trajets ou les
                    embouteillages, vous préférez rester confortablement chez
                    vous... les consultations sont disponibles en Visio
                  </p>
                  <p>
                    Remboursement des consultations : certaines mutuelles
                    remboursent les prestations diététiques, vous pouvez vous
                    renseigner auprès de la vôtre, une note d'honoraire vous
                    sera fournie.
                  </p>
                  <p>
                    <Underline>Moyen de règlement</Underline> : espèce, chèque
                    ou virement bancaire
                  </p>
                  <p>
                    Pour prendre rendez-vous cliquez{" "}
                    <a
                      href="https://www.doctolib.fr/"
                      className="text-rose underline"
                    >
                      ici
                    </a>
                    .
                  </p>
                </>
              )
            }
          >
            Consultation diététique
          </button>
        </div>
        <div className="flex flex-col items-center text-center">
          <img
            src={HomePhoto}
            className="w-[70%] mb-5"
            alt="Activités physiques adaptées"
          />
          <button
            className="mb-8 bg-green hover:bg-rose text-white py-2 px-4 rounded font-bold transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
            onClick={() =>
              handleOpenModal(
                "Activités physiques adaptées",
                <>
                  Avant chaque programme d'activité physique, je vous propose un
                  bilan intial afin d'évaluer vos capacités physiques et vos
                  besoin. L'objectif est de vous redonner l'envie de bouger en
                  vous accompagnant sur une ou plusieurs séances. Les séances
                  sont adaptées à vos besoins, vos capacités et vos pathologies.
                  Les différents objectifs sur lesquels je peux vous accompagner
                  sont les suivants :
                  <ul className="list-disc mt-5 ml-4">
                    <li>Reprise d'une activité physique sans blessure</li>
                    <li>Débuter une activité physique</li>
                    <li>Prise de masse musculaire</li>
                    <li> Perte de poids</li>
                    <li>Renforcement musculaire</li>
                    <li>
                      Reprise de la course à pied ou amélioration de vos
                      performances.
                    </li>
                  </ul>
                  <br></br>
                  <br></br>
                  <ColoredText color="rose">Tarif</ColoredText>
                  <br></br>
                  <div className="grid sm:grid-cols-3 mt-5">
                    <div className="flex flex-col items-center text-center mb-2">
                      <p>
                        <BoldText>1 séance (1h)</BoldText>
                      </p>
                      <p>50 euros</p>
                    </div>
                    <div className="flex flex-col items-center text-center mb-2">
                      <p>
                        <BoldText>Séance DUO</BoldText>
                      </p>
                      <p>35 euros/personne</p>
                    </div>
                    <div className="flex flex-col items-center text-center mb-2">
                      <p>
                        <BoldText>1 Séance collective</BoldText>
                      </p>
                      <p>15 euros/personne</p>
                    </div>
                  </div>
                  <br></br>
                  <ColoredText color="rose">
                    Possibilité d'abonnement avec plusieurs séances
                  </ColoredText>
                  <div className="grid grid-cols-2 mt-5">
                    <div className="flex flex-col items-center text-center">
                      <p>
                        <BoldText>Séance marche Nordique</BoldText>
                      </p>
                      <p>40 euros</p>
                    </div>
                    <div className="flex flex-col items-center text-center mb-4">
                      <p>
                        <BoldText>10 séance marche nordique</BoldText>
                      </p>
                      <p>25 euros/séance</p>
                    </div>

                    <p className="mb-2">
                      Moyen de reglement : espèce, chèque ou virement bancaire
                    </p>
                    <br></br>
                    <br></br>
                    <p>
                      Pour prendre rendez-vous cliquez{" "}
                      <a
                        href="https://www.doctolib.fr/"
                        className="text-rose underline"
                      >
                        ici
                      </a>
                      .
                    </p>
                  </div>
                </>
              )
            }
          >
            Activités physiques adaptées
          </button>
        </div>
        <div className="flex flex-col items-center text-center">
          <img
            src={HomePhoto}
            className="w-[70%] mb-5"
            alt="Prises en charge globales"
          />
          <button
            className="mb-8 bg-green hover:bg-rose text-white py-2 px-4 rounded font-bold transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
            onClick={() =>
              handleOpenModal(
                "Prises en charge globales",
                <>
                  <p className="">
                    Manger mieux et bouger plus sont aujourd'hui deux facteurs
                    reconnus de bien-être et de bonne santé.
                  </p>
                  <p className="">
                    Car la nutrition s'associe parfaitement avec le sport vous
                    apportant confiance en soi et une motivation supplémentaire
                    pour mener à bien votre parcours de remise en forme.
                  </p>
                  <p className="mb-4">
                    C'est pourquoi je vous propose des formules permettant une
                    prise en charge globale.
                  </p>
                  <p className="mb-4">
                    {" "}
                    Abonnement 6 mois Comprenant 2 séances d'activités physiques
                    adaptées/semaine + 1 consultation diététique/mois 50 euros
                    le bilan + 150 euros/mois
                  </p>
                  <p className="mb-4">
                    Abonnement 6 mois Comprenant 1 séance d'activités physiques
                    adaptées/ semaine + 1 consultation diététique/mois 50 euros
                    le bilan + 100 euros/mois
                  </p>
                </>
              )
            }
          >
            Prises en charge globales
          </button>
        </div>
        <div className="flex flex-col items-center text-center">
          <img src={HomePhoto} className="w-[70%] mb-5" alt="Impédancemètre" />
          <button
            className="mb-8 bg-green hover:bg-rose text-white py-2 px-4 rounded font-bold transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
            onClick={() =>
              handleOpenModal(
                "Impédancemètre",
                <>
                  <ColoredText color="rose">
                    Qu'est ce que l'impédancemétrie ?
                  </ColoredText>
                  <p className="mt-4 mb-4">
                    Cet appareil permet de mesurer de façon précise et
                    scientifique votre taux de masse grasse, de masse
                    musculaire, l'eau totale présente dans votre corps.<br></br>
                    Au contraire des balances grand public du commerce, le
                    BiodyExpert est un impédancemètre professionnel bénéficiant
                    d'un marquage CE médical, garantissant une réelle précision
                    des résultats.<br></br>
                    L'appareil émet un courant de faible intensité et totalement
                    indolore, qui traverse les différents tissus de votre corps.
                    Ces tissus ne présentant pas la même conductivité,
                    l'appareil en déduit alors votre composition corporelle.
                  </p>
                  <ul className='mb-4'>
                    <ColoredText color="rose">
                      {" "}
                      Multiples applications{" "}
                    </ColoredText>
                  </ul>
                  <li>
                    La mesure de composition corporelle est un bon outil de
                    suivi et de motivation dans le cadre d'un projet de perte de
                    poids. Il nous permet notamment de nous assurer que la perte
                    de poids s'effectue en puisant dans la masse graisseuse tout
                    en préservant votre masse musculaire.
                  </li>
                  <li>
                    Un réel intérêt dans le dépistage et la prise en charge de
                    la dénutrition ou de la sarcopénie grâce à l'analyse de
                    l'index de masse musculaire (suite aux dernières
                    recommandations de la HAS). Il est donc un outil précis et
                    validé pour améliorer sa santé au cours du vieillissement ou
                    en cas de maladies chroniques telles que des cancers, des
                    maladies digestives, etc…
                  </li>
                  <li>
                    Dans le suivi nutritionnel des sportifs l'impédancemétrie
                    permet d'optimiser l'entrainement et la stratégie
                    nutritionnelle et d'hydratation pour améliorer la
                    répartition corporelle et les performances. En période de
                    préparation, elle vous permet d'optimiser l'affutage afin
                    que celui-ci ne se fasse pas au détriment de votre masse
                    musculaire. Elle permet également de détecter la fatigue
                    musculaire, le surentrainement afin de limiter le risque de
                    blessures.
                  </li>
                  <p className="mt-6 mb-4">
                    Les mesures d’impédancemétrie sont inclus dans les suivis
                    nutritionnels.<br></br>
                    Vous pouvez également me solliciter pour réaliser une mesure
                    hors suivi sans consultation diététique
                  </p>
                  <p>
                    <span className='font-bold'>Tarif 20 euros sans consultation diététique</span><br></br>
                    <span className='italic'>Attention contre-indiqué pour les femmes enceintes et les
                    personnes ayant des dispositifs médicaux tels que des
                    pacemakers</span>
                  </p>
                </>
              )
            }
          >
            Impédancemètre
          </button>
        </div>
      </div>
      <Modal
        showModal={modalInfo.showModal}
        onClose={handleCloseModal}
        title={modalInfo.title}
      >
        {modalInfo.content}
      </Modal>
    </div>
  );
};

export default Services;