import React, { useState } from 'react';
import Modal from './Modal';
import HomePhoto from "../assets/HomePhoto.jpg";

const BoldText = ({ children }) => (
  <span className="font-bold">{children}</span>
);

const TextXL = ({ children }) => (
  <span className='text-xl font-extrabold'>{children}</span>
);

const ColoredText = ({ color, children }) => (
  <span className={`text-${color}`}>{children}</span>
);

const Services = () => {
  const [modalInfo, setModalInfo] = useState({ showModal: false, title: '', content: null });

  const handleOpenModal = (title, content) => {
    setModalInfo({ showModal: true, title, content });
  };

  const handleCloseModal = () => {
    setModalInfo({ showModal: false, title: '', content: null });
  };

  return (
    <div>
      <div className="mx-9">
        <h1 className="text-5xl mb-8 flex justify-center font-semibold sm:justify-start sm:text-7xl sm:ml-8 text-rose">
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
            onClick={() =>
              handleOpenModal(
                'Consultation diététique',
                <>
                  <TextXL>· Consultations diététiques</TextXL>
                  <p>
                    Les consultations peuvent concerner tout le monde : <ColoredText color="red">Perte de poids</ColoredText>, prise de masse musculaire, prévention du diabète, du cholestérol, alimentation adaptée à une maladie digestive, rénale ou métabolique accompagnement de l'alimentation pendant la grossesse ou l'allaitement, transition vers un mode d'alimentation végétarien ou végétalien…
                  </p>
                  <p>
                    L'alimentation est au centre de nos vies et le champ d'action du diététicien est très vaste. Mon rôle est de vous accompagner et de vous aider de façon pratique dans votre quotidien.
                  </p>
                  <BoldText>· Consultation Solo</BoldText>
                  <p>
                    1ère consultation : <BoldText>50 euros</BoldText>
                  </p>
                  <p>
                    La première consultation nous permet de faire connaissance et est le point de départ d'une relation de confiance. Cette première prise de contact permet d'évaluer votre alimentation, vos habitudes, vos attentes, vos besoins nutritionnels et de mettre en place une stratégie pour atteindre vos objectifs.
                  </p>
                  <BoldText>· Consultation de suivi</BoldText> : 35 euros
                  <p>
                    La consultation de suivi est le moment de faire le point sur la réalisation des objectifs fixés lors de notre premier échange et d'assurer une continuité pour atteindre vos objectifs en affinant les méthodes au regard de vos résultats et de votre ressenti. Elles sont espacées d’environ 2 semaines (ou plus selon vos besoins et disponibilités) pour vous permettre d’assimiler les différents thèmes abordés, de mettre en place les exercices/outils proposés.
                  </p>
                  <BoldText>· Consultation DUO</BoldText>
                  <p>
                    La prise en charge nutritionnelle en couple permet d’avancer à deux pour atteindre vos objectifs sans frustration
                  </p>
                  <p>
                  <BoldText>· 1ère consultation DUO</BoldText> : 90 euros
                  </p>
                  <p>
                  <BoldText>· Consultation de suivi DUO</BoldText> : 60 euros
                  </p>
                  <p>
                    Vous êtes loin, vous n'avez pas le temps de vous déplacer au cabinet, vous voulez éviter les trajets ou les embouteillages, vous préférez rester confortablement chez vous... les consultations sont disponibles en Visio
                  </p>
                  <TextXL>· Abonnement</TextXL>
                  <p>
                  <BoldText>· Abonnement sur 6 mois</BoldText> : 50 euros la 1ère consultation + <BoldText>30 euros/mois</BoldText> pour une consultation par mois
                  </p>
                  <p>
                    Abonnement sur 1 an : <BoldText>50 euros</BoldText> la première consultation + <BoldText>25 euros/mois</BoldText> pour une consultation par mois
                  </p>
                  <p>
                    Abonnement sur 6 mois DUO : <BoldText>90 euros</BoldText> la 1ère consultation + <BoldText>55 euros/mois</BoldText> pour une consultation par mois
                  </p>
                  <p>
                    Abonnement sur 1 an DUO : <BoldText>90 euros</BoldText> la première consultation + <BoldText>50 euros/mois</BoldText> à raison d’une consultation par mois
                  </p>
                  <p>
                    Remboursement des consultations : certaines mutuelles remboursent les prestations diététiques, vous pouvez vous renseigner auprès de la vôtre, une note d’honoraire vous sera fournie.
                  </p>
                  <p>
                    Moyen de règlement : espèce, chèque ou virement bancaire
                  </p>
                  <p>
                    <a href="https://www.doctolib.fr/" className="text-blue underline">Pour prendre rendez-vous cliquez ici</a>
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
      >
        {modalInfo.content}
      </Modal>
    </div>
  );
};

export default Services;