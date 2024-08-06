import React, { useState } from 'react';
import HomePhoto from "../assets/HomePhoto.jpg";
import Modal from './Modal';

const Services = () => {
  const [modalInfo, setModalInfo] = useState({ showModal: false, title: '', description: '' });

  const handleOpenModal = (title, description) => {
    setModalInfo({ showModal: true, title, description });
  };

  const handleCloseModal = () => {
    setModalInfo({ showModal: false, title: '', description: '' });
  };

  const dietConsultationDescription = `
Consultations diététiques 

Les consultations peuvent concerner tout le monde : Perte de poids, prise de masse musculaire, prévention du diabète, du cholestérol, alimentation adaptée à une maladie digestive, rénale ou métabolique accompagnement de l'alimentation pendant la grossesse ou l'allaitement, transition vers un mode d'alimentation végétarien ou végétalien…
L'alimentation est au centre de nos vies et le champ d'action du diététicien est très vaste.
Mon rôle est de vous accompagner et de vous aider de façon pratique dans votre quotidien. 

Consultation Solo
1ère consultation : 50 euros 
La première consultation nous permet de faire connaissance et est le point de départ d'une relation de confiance.  Cette première prise de contact permet d'évaluer votre alimentation, vos habitudes, vos attentes, vos besoins nutritionnels et de mettre en place une stratégie pour atteindre vos objectifs.             
         
Consultation de suivi 35 euros
La consultation de suivi est le moment de faire le point sur la réalisation des objectifs fixés lors de notre premier échange et d'assurer une continuité pour atteindre vos objectifs en affinant les méthodes au regard de vos résultats et de votre ressenti. Elles sont espacées d’environ 2 semaines (ou plus selon vos besoins et disponibilités) pour vous permettre d’assimiler les différents thèmes abordés, de mettre en place les exercices/outils proposés.

Consultation DUO
La prise en charge nutritionnelle en couple permet d’avancer à deux pour atteindre vos objectifs sans frustration 

1ère consultation DUO                                                                   Consultation de suivi DUO
90 euros                                                                                                60 euros
 
Vous êtes loin, vous n'avez pas le temps de vous déplacer au cabinet, vous voulez éviter les trajets ou les embouteillages, vous préférez rester confortablement chez vous... les consultations sont disponibles en Visio

Abonnement 
 
Abonnement sur 6 mois                                                         Abonnement sur 1 an
50 euros la 1ère consultation                                           50 euros la première consultation
+ 30 euros/mois pour une consultation par mois          + 25 euros/mois pour une consultation par mois
 
Abonnement sur 6 mois DUO                                            Abonnement sur 1 an DUO
90 euros la 1ère consultation                                           90 euros la première consultation
+ 55 euros/mois pour une consultation par mois                + 50 euros/mois à raison d’une consultation par mois

Remboursement des consultations : certaines mutuelles remboursent les prestations diététiques, vous pouvez vous renseigner auprès de la votre, une note d’honoraire vous sera fournie

Moyen de réglèment : espèce, chèque ou virement bancaire
Pour prendre rendez-vous cliquez ici
`;

  return (
    <div>
      <div className="mx-9">
        <h1 className="text-5xl mb-8 flex justify-center font-semibold sm:justify-start sm:text-7xl sm:ml-8">
          Mes services
        </h1>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-9">
        <div className="flex flex-col items-center text-center">
          <img
            src={HomePhoto}
            className="w-[70%] mb-5"
            alt="Consultation diététique"
          />
          <button
            className="mb-8 bg-green hover:bg-rose text-white py-2 px-4 rounded font-bold transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
            onClick={() => handleOpenModal('Consultation diététique', dietConsultationDescription)}
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
            onClick={() => handleOpenModal('Activités physiques adaptées', 'Description pour Activités physiques adaptées')}
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
            onClick={() => handleOpenModal('Prises en charge globales', 'Description pour Prises en charge globales')}
          >
            Prises en charge globales
          </button>
        </div>
        <div className="flex flex-col items-center text-center">
          <img
            src={HomePhoto}
            className="w-[70%] mb-5"
            alt="Impédancemètre"
          />
          <button
            className="mb-8 bg-green hover:bg-rose text-white py-2 px-4 rounded font-bold transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
            onClick={() => handleOpenModal('Impédancemètre', 'Description pour Impédancemètre')}
          >
            Impédancemètre
          </button>
        </div>
      </div>
      <Modal
        showModal={modalInfo.showModal}
        onClose={handleCloseModal}
        title={modalInfo.title}
        description={modalInfo.description}
      />
    </div>
  );
}

export default Services;