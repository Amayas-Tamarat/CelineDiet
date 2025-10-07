import React, { useState } from "react";
import { useEffect } from "react";
import Modal from "./Modal";

import AOS from "aos";
import "aos/dist/aos.css";

const BoldText = ({ children }) => (
  <span className="font-bold">{children}</span>
);


const Services = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  });

  const [modalInfo, setModalInfo] = useState({
    showModal: false,
    title: "",
    content: null,
  });

  const handleOpenModal = (title, content) => {
    setModalInfo({ showModal: true, title, content });
  };

  const handleCloseModal = () => {
    setModalInfo({ showModal: false, title: "", content: null });
  };

  const Underline = ({ children }) => (
    <span className={"underline"}>{children}</span>
  );

  return (
    <div id="Services">
      <div className="mx-9">
        <h1
          className="text-5xl mb-10 flex justify-center font-semibold sm:justify-start sm:text-7xl sm:ml-8 text-rose"
          data-aos="fade-up"
        >
          Mes services
        </h1>
      </div>
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mx-9"
        data-aos="fade-up"
      >
          <div className="flex flex-col items-center text-center">
              {/** ✅ Define your modal content once */}
              {(() => {
                  const consultationContent = (
                      <>
                          <div className="space-y-8 text-gray-700 leading-relaxed">
                              {/* --- Introduction --- */}
                              <section className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
                                  <h3 className="text-rose font-extrabold text-2xl mb-3">Présentation</h3>
                                  <p>
                                      Les consultations peuvent concerner tout le monde : perte de poids, prise de masse musculaire,
                                      prévention du diabète, du cholestérol, alimentation adaptée à une maladie digestive, rénale
                                      ou métabolique, accompagnement de l'alimentation pendant la grossesse ou l'allaitement,
                                      transition vers un mode d'alimentation végétarien ou végétalien…
                                  </p>
                                  <p className="mt-3">
                                      L'alimentation est au centre de nos vies et le champ d'action du diététicien est très vaste.
                                      Mon rôle est de vous accompagner et de vous aider de façon pratique dans votre quotidien.
                                  </p>
                              </section>

                              {/* --- Consultation Solo --- */}
                              <section className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-rose">
                                  <h3 className="text-rose font-extrabold text-2xl mb-3">🥗 Consultation Solo</h3>
                                  <ul className="list-disc ml-6 space-y-3">
                                      <li>
                                          <BoldText>1ère consultation :</BoldText> 50 euros
                                          <p className="text-sm text-gray-600 mt-1">
                                              Permet de faire connaissance, d’évaluer votre alimentation, vos habitudes et vos attentes,
                                              et de définir une stratégie personnalisée.
                                          </p>
                                      </li>
                                      <li>
                                          <BoldText>Consultation de suivi :</BoldText> 35 euros
                                          <p className="text-sm text-gray-600 mt-1">
                                              Moment pour faire le point, ajuster les objectifs et affiner les méthodes selon vos résultats
                                              et votre ressenti. Généralement espacées d’environ 2 semaines.
                                          </p>
                                      </li>
                                  </ul>
                              </section>

                              {/* --- Consultation Duo --- */}
                              <section className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-green">
                                  <h3 className="text-green font-extrabold text-2xl mb-3">👫 Consultation Duo</h3>
                                  <p>
                                      La prise en charge nutritionnelle en couple permet d’avancer à deux pour atteindre vos objectifs sans frustration.
                                  </p>

                                  <ul className="list-disc ml-6 space-y-2 mt-3">
                                      <li>
                                          <BoldText>1ère consultation Duo :</BoldText> 90 euros
                                      </li>
                                      <li>
                                          <BoldText>Consultation de suivi Duo :</BoldText> 60 euros
                                      </li>
                                  </ul>
                              </section>

                              {/* --- Consultations en visio --- */}
                              <section className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
                                  <h3 className="text-blue font-extrabold text-2xl mb-3">💻 Consultations en Visio</h3>
                                  <p>
                                      Vous êtes loin, vous n'avez pas le temps de vous déplacer, ou vous préférez le confort de votre maison…
                                      <BoldText> les consultations sont disponibles en Visio.</BoldText>
                                  </p>
                              </section>

                              {/* --- Infos pratiques --- */}
                              <section className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-rose">
                                  <h3 className="text-rose font-extrabold text-2xl mb-3">ℹ️ Informations pratiques</h3>
                                  <div className="space-y-3">
                                      <p>
                                          <BoldText>Remboursement :</BoldText> certaines mutuelles remboursent les prestations diététiques.
                                          Une note d'honoraire vous sera fournie.
                                      </p>
                                      <p>
                                          <Underline>Moyen de règlement :</Underline> espèce, chèque ou virement bancaire.
                                      </p>
                                  </div>

                                  {/* --- CTA Button --- */}
                                  <div className="flex justify-center mt-8">
                                      <a
                                          href="https://www.doctolib.fr/dieteticien/andrezieux-boutheon/celine-fougerouse"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="bg-green hover:bg-lime text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg
                  hover:shadow-xl transition-all duration-300 hover:scale-105 hover:ring-4 hover:ring-green/30"
                                      >
                                          📅 Prendre rendez-vous sur Doctolib
                                      </a>
                                  </div>
                              </section>
                          </div>
                      </>
                  );

                  return (
                      <>
                          <svg
                              className="cursor-pointer h-44 w-44 mb-4 hover:-translate-y-1 hover:scale-110 duration-300"
                              viewBox="0 0 512 512"
                              onClick={() =>
                                  handleOpenModal("Consultation diététique", consultationContent)
                              }
                          >
                              <defs>
                                  <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                                      <stop offset="0%" style={{ stopColor: "#F2989F", stopOpacity: 1 }} />
                                      <stop offset="100%" style={{ stopColor: "#C2DB9C", stopOpacity: 1 }} />
                                  </linearGradient>
                              </defs>

                              <path
                                  d="M318.5 510.556c-27.604-5.296-46.757-20.075-65.839-50.806l-1.707-2.75h-94.888c-90.319 0-95.18-.091-100.975-1.895-15.24-4.743-26.41-16.717-30.6-32.798C23.247 417.525 23 406.223 23 353.806v-62.774l2.75-3.051c1.76-1.953 4.09-3.263 6.473-3.642 3.304-.525 4.122-.194 7.25 2.934L43 290.8v62.474c0 68.504-.122 66.997 6.03 74.763 1.738 2.195 5.514 5.065 8.762 6.66L63.5 437.5l89.75.28c49.362.155 89.75.083 89.75-.16s-1.091-4.644-2.425-9.78c-4.308-16.586-5.077-23.375-5.028-44.34.04-16.908.398-21.623 2.315-30.5 7.536-34.91 23.906-59.424 47.943-71.794 7.561-3.892 10.544-5.025 18.874-7.17l4.178-1.075-2.904-6.404c-5.816-12.826-8.45-26.89-5.923-31.612 2.16-4.039 6.663-5.267 16.937-4.622 15.651.982 28.143 5.885 37.47 14.706l5.115 4.837 2.77-5.183 2.771-5.183-.297-90.5c-.273-83.383-.431-90.747-2.017-93.644-2.39-4.367-7.25-9.027-12.145-11.645-3.92-2.096-5.514-2.227-30.755-2.52l-26.622-.309-.456 5.5c-.566 6.827-4.136 12.568-9.462 15.212-3.656 1.815-7.373 1.92-77.839 2.185-82.24.31-79.396.52-85.399-6.317-3.098-3.528-5.086-8.901-5.095-13.772L115 40.88l-26.75.31c-23.8.276-27.136.515-30.25 2.172-4.886 2.6-9.789 7.423-12.338 12.138-2.151 3.98-2.164 4.39-2.662 83-.526 83.045-.469 82.075-4.957 84.477-2.46 1.316-7.633 1.313-10.098-.007C22.917 220.28 23 221.672 23 139.6 23 58.64 23.079 57.12 27.789 47 31.136 39.808 41.743 29.223 49 25.836 57.997 21.636 63.393 21 90.05 21c23.093 0 24.95-.13 24.956-1.75.023-7.272 6.5-16.463 12.842-18.225C130.164.382 158.375.01 204.934.005 277.728 0 278.407.019 282.75 2.122c5.38 2.604 9.312 8.252 10 14.36l.51 4.519 25.12.015c27.585.016 33.934.867 42.98 5.762 8.05 4.355 15.162 12.015 19.405 20.901L384.5 55.5l.278 81.25c.153 44.688.436 81.25.629 81.25s2.838-1.498 5.878-3.329C402.02 208.208 419.92 204 436.681 204c16.161 0 18.799 3.091 15.876 18.61-3.576 18.986-11.602 37.26-21.165 48.192l-4.348 4.97 8.228 3.956c19.013 9.141 34.246 26.29 43.3 48.74 23.02 57.093 5.951 133.907-36.918 166.133-8.06 6.058-17.518 10.754-28.366 14.081l-8.788 2.696-39.5.26c-29.829.197-41.214-.068-46.5-1.082zm88.946-20.979c11.261-3.299 21.267-9.333 30.068-18.135 21.645-21.644 34.307-63.133 30.569-100.162-4.128-40.893-22.153-68.303-50.583-76.921-4.564-1.384-9.111-1.8-19-1.736-11.057.07-14.495.503-23 2.896-12.364 3.48-14.524 3.488-27 .097-13.096-3.56-27.249-4.402-37.5-2.232-18.996 4.022-34.291 16.461-43.793 35.616-12.86 25.928-15.73 59.932-7.72 91.5 8.343 32.885 25.943 56.506 49.513 66.452 10.515 4.437 16.848 4.964 56 4.655 31.171-.246 37.368-.543 42.446-2.03zM346.23 266.72c-1.645-2.933-5.074-6.87-7.829-8.99-4.574-3.52-14.138-7.317-16.47-6.54-1.578.527 5.513 13.88 9.34 17.589 2.692 2.61 4.685 3.487 9.78 4.308 3.519.566 6.635 1.27 6.924 1.562.289.292.673-.198.854-1.089.181-.891-.988-3.969-2.599-6.84zm36.423 6.25c3.216-.527 8.14-.96 10.942-.963 4.204-.005 6.133-.677 11.028-3.84 11.181-7.227 19.2-18.741 24.473-35.137 1.508-4.688 2.62-8.646 2.472-8.794-.703-.704-15.332 2-20.854 3.854-12.393 4.161-22.963 12.655-29.383 23.609-2.435 4.155-6.373 14.629-7.757 20.632-.57 2.475-.41 2.752 1.29 2.213 1.068-.339 4.574-1.047 7.79-1.574zM273 32V20H135v11.333c0 6.234.3 11.634.667 12 .366.367 31.416.667 69 .667H273ZM130.5 400.445c-8.786-1.919-21.413-7.898-28.198-13.353C92.42 379.147 83.06 364.046 79.93 351c-1.695-7.063-1.695-21.937 0-29 7.862-32.774 40.026-54.928 72.59-49.999 25.531 3.865 44.601 19.954 53.22 44.903 2.268 6.562 2.624 9.23 2.618 19.596-.006 10.588-.346 12.997-2.89 20.476-8.788 25.835-31.677 43.193-58.727 44.538-6.172.307-11.567-.048-16.242-1.07zm28.092-21.477c14.945-5.141 26.544-18.922 29.418-34.95 5.433-30.3-22.841-57.876-52.914-51.605-29.44 6.138-44.845 37.371-31.646 64.162 5.998 12.174 19.1 22.094 32.265 24.43 6.35 1.126 16.244.246 22.877-2.037zm-32.367-24.077C115.622 345.258 114 343.11 114 338.71c0-5.506 4.296-9.711 9.92-9.711 3.291 0 4.859.709 8.157 3.689l4.084 3.689 11.67-12.206c10.967-11.472 11.9-12.205 15.496-12.189 5.455.024 9.673 4.344 9.673 9.905 0 4.511.245 4.175-16.86 23.112-13.468 14.911-14.776 15.989-19.415 15.995-3.225.004-4.757-.886-10.5-6.104zM28.11 262.604C19.44 257.8 23.068 244 33 244c5.067 0 10 4.885 10 9.903 0 7.508-8.297 12.356-14.89 8.701zm65.198-20.614c-3.198-1.288-5.712-5.707-5.595-9.834.076-2.692.887-4.303 3.21-6.379L94.032 223h79.937c59.846 0 80.596.3 82.559 1.195 1.442.657 3.263 2.434 4.047 3.95 2.322 4.49 1.766 7.714-1.975 11.455l-3.4 3.4-79.85-.063c-43.918-.035-80.836-.461-82.042-.947zm-.095-52.497c-6.43-2.793-7.513-11.38-2.018-16.004L94.153 171h190l2.924 2.923c5.072 5.072 3.743 13-2.625 15.662-5.077 2.12-186.347 2.034-191.24-.092zm-1.974-53.038c-4.548-3.186-4.541-12.174.012-15.68 2.103-1.618 9.868-1.732 119.576-1.753L328.154 119l2.923 2.923c3.831 3.831 3.956 8.696.334 13L328.822 138H211.134c-104.511 0-117.936-.173-119.895-1.545Z"
                                  stroke="url(#gradientStroke)"
                                  strokeWidth="2"
                                  fill="url(#gradientStroke)" // Vous pouvez aussi remplir avec un dégradé
                              />
                          </svg>
                          <button
                              className="mb-8 bg-blue hover:bg-rose text-white py-2 px-4 rounded font-bold transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
                              onClick={() =>
                                  handleOpenModal("Consultation diététique", consultationContent)
                              }
                          >
                              Consultation diététique
                          </button>
                      </>
                  );
              })()}
          </div>
          <div className="flex flex-col items-center text-center">
              {/** ✅ Define modal content once */}
              {(() => {
                  const activityModalContent = (
                      <>
                          <div className="space-y-10 text-gray-700 leading-relaxed">
                              {/* --- Introduction --- */}
                              <section className="bg-gray-50 p-6 rounded-2xl shadow-md border border-gray-100">
                                  <h3 className="text-rose font-extrabold text-2xl mb-4">🏋️‍♀️ Bilan et Objectifs</h3>
                                  <p>
                                      Avant chaque programme d'activité physique, je vous propose un{" "}
                                      <BoldText>bilan initial</BoldText> afin d'évaluer vos capacités physiques et vos besoins.
                                      L'objectif est de vous redonner l'envie de bouger, en vous accompagnant
                                      sur une ou plusieurs séances adaptées à vos besoins, vos capacités et vos pathologies.
                                  </p>
                                  <p className="mt-3">
                                      Les différents objectifs sur lesquels je peux vous accompagner sont les suivants :
                                  </p>
                                  <ul className="list-disc mt-4 ml-6 space-y-2">
                                      <li>Reprise d'une activité physique sans blessure</li>
                                      <li>Débuter une activité physique</li>
                                      <li>Prise de masse musculaire</li>
                                      <li>Perte de poids</li>
                                      <li>Renforcement musculaire</li>
                                      <li>Reprise de la course à pied ou amélioration des performances</li>
                                  </ul>
                              </section>

                              {/* --- Tarifs --- */}
                              <section className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-rose">
                                  <h3 className="text-rose font-extrabold text-2xl mb-4">💰 Tarifs</h3>
                                  <div className="grid sm:grid-cols-3 gap-6 text-center">
                                      <div className="bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition">
                                          <p className="font-bold text-lg">1 séance (1h)</p>
                                          <p className="text-gray-600 text-sm mt-1">50 euros</p>
                                      </div>
                                      <div className="bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition">
                                          <p className="font-bold text-lg">Séance Duo</p>
                                          <p className="text-gray-600 text-sm mt-1">35 euros / personne</p>
                                      </div>
                                      <div className="bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition">
                                          <p className="font-bold text-lg">Séance Collective</p>
                                          <p className="text-gray-600 text-sm mt-1">15 euros / personne</p>
                                      </div>
                                  </div>

                                  <div className="mt-8">
                                      <h4 className="text-rose font-semibold text-xl mb-3">🧾 Possibilité d'abonnement</h4>
                                      <div className="grid sm:grid-cols-2 gap-6 text-center">
                                          <div className="bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition">
                                              <p className="font-bold text-lg">Séance marche nordique</p>
                                              <p className="text-gray-600 text-sm mt-1">40 euros</p>
                                          </div>
                                          <div className="bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition">
                                              <p className="font-bold text-lg">10 séances marche nordique</p>
                                              <p className="text-gray-600 text-sm mt-1">25 euros / séance</p>
                                          </div>
                                      </div>
                                  </div>
                              </section>

                              {/* --- Infos pratiques --- */}
                              <section className="bg-gray-50 p-6 rounded-2xl shadow-md border border-gray-100">
                                  <h3 className="text-blue font-extrabold text-2xl mb-4">ℹ️ Informations pratiques</h3>
                                  <p>
                                      <BoldText>Moyens de règlement :</BoldText> espèces, chèque ou virement bancaire.
                                  </p>
                              </section>

                              {/* --- Call to Action --- */}
                              <section className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-green mt-10">
                                  <div className="text-center flex flex-col items-center space-y-5">
                                      <p className="italic text-rose font-semibold text-lg">
                                          Vous souhaitez réserver une séance ?
                                      </p>
                                      <a
                                          href="https://www.doctolib.fr/dieteticien/andrezieux-boutheon/celine-fougerouse"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                          className="bg-green hover:bg-lime text-white font-bold text-xl px-8 py-4 rounded-full shadow-lg
                   hover:shadow-xl transition-all duration-300 hover:scale-105 hover:ring-4 hover:ring-green/30"
                                      >
                                          📅 Prendre rendez-vous sur Doctolib
                                      </a>
                                  </div>
                              </section>
                          </div>
                      </>
                  );

                  return (
                      <>
                          {/* --- SVG --- */}
                          <svg
                              className="cursor-pointer h-44 w-44 mb-4 hover:-translate-y-1 hover:scale-110 duration-300"
                              viewBox="0 0 512 512"
                              onClick={() =>
                                  handleOpenModal("Activités physiques adaptées", activityModalContent)
                              }
                          >
                              <defs>
                                  <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                                      <stop offset="0%" style={{ stopColor: "#F2989F", stopOpacity: 1 }} />
                                      <stop offset="100%" style={{ stopColor: "#C2DB9C", stopOpacity: 1 }} />
                                  </linearGradient>
                              </defs>

                              {/* --- Path to be filled --- */}
                              <path
                                  d="M119.086 510.317c-5.342-1.928-12.373-8.703-14.16-13.646-1.165-3.22-1.585-3.535-3.866-2.892-1.408.396-12.91.721-25.56.721-26.05 0-27.522-.354-34.762-8.368-6.34-7.018-6.738-9.96-6.738-49.814V401H23.968c-11.132 0-14.939-1.118-19.154-5.627C.43 390.686 0 388.123 0 366.751c0-18.383.18-20.493 2.096-24.45 1.398-2.887 3.51-5.158 6.338-6.815C12.23 333.26 13.789 333 23.283 333H33.89l.305-37.75c.295-36.494.377-37.883 2.467-41.75 2.557-4.73 7.471-9.556 12.338-12.119 2.804-1.476 6.34-1.915 17.787-2.206 12.725-.324 14.235-.545 13.803-2.02-3.142-10.741-4.289-52.13-1.764-63.655 8.85-40.385 29.967-69.21 66.696-91.034 1.638-.973 1.622-1.264-.276-5-5.15-10.135-7.493-20.402-8-35.06-.591-17.065.425-20.3 7.45-23.713l4.383-2.13 8.71 2.168c13.143 3.27 16.946 3.495 28.816 1.704 25.81-3.896 46.877 1.213 59.848 14.512 2.174 2.23 4.238 4.053 4.586 4.053.349 0 2.97-3.938 5.824-8.75 6.313-10.643 15.862-22.378 20.947-25.743 17.152-11.35 40.588 2.492 38.941 23.002-.583 7.268-2.15 10.52-9.309 19.326-2.98 3.666-7.191 10.047-9.36 14.182l-3.94 7.516 13.179.068c62.884.322 112.741 41.757 125.4 104.217 2.911 14.367 2.133 52.345-1.32 64.337-.423 1.474 1.091 1.696 13.812 2.023 15.894.409 19.311 1.482 25.425 7.984 6.995 7.44 6.83 6.333 7.167 48.088l.305 37.75h10.607c9.494 0 11.052.26 14.85 2.486 2.827 1.657 4.94 3.928 6.337 6.816 1.916 3.958 2.096 6.064 2.096 24.546 0 22.036-.477 24.523-5.627 29.338-4.255 3.98-7.453 4.814-18.438 4.814H478v35.319c0 39.854-.398 42.795-6.738 49.813-7.24 8.014-8.712 8.368-34.762 8.368-12.65 0-24.152-.325-25.56-.721-2.28-.643-2.701-.328-3.866 2.892-1.94 5.368-8.855 11.763-14.88 13.765-4.348 1.444-8.507 1.654-27.41 1.383-25.074-.359-27.107-.867-33.754-8.437-6.67-7.597-6.5-6.188-6.827-56.632l-.297-45.75H188.094l-.297 45.75c-.327 50.444-.158 49.035-6.827 56.632-6.71 7.643-8.573 8.092-34.47 8.323-18.903.168-23.786-.079-27.414-1.388zm48.608-17.73 2.806-2.414V243.827l-2.806-2.414C164.932 239.037 164.582 239 145 239s-19.932.037-22.694 2.413l-2.806 2.414-.29 119.836c-.16 65.91-.017 121.35.316 123.199.334 1.849 1.681 4.436 2.995 5.75 2.358 2.358 2.638 2.388 22.378 2.388 19.69 0 20.032-.036 22.795-2.413zm221.785.025c1.314-1.314 2.661-3.901 2.995-5.75.333-1.85.475-57.289.316-123.199l-.29-119.836-2.806-2.414C386.932 239.037 386.582 239 367 239s-19.932.037-22.694 2.413l-2.806 2.414v246.346l2.806 2.414c2.763 2.377 3.106 2.413 22.795 2.413 19.74 0 20.02-.03 22.378-2.388zM100.09 475.139c1.853-2.29 1.91-5.519 1.91-108.295V260.909l-2.455-2.454C97.102 256.01 97 256 76.97 256H56.846l-2.923 2.923L51 261.846v210.308l2.98 2.98 2.98 2.98 20.61-.307c20.28-.302 20.64-.345 22.52-2.668zm357.987-.062 2.923-2.923V261.846l-2.923-2.923-2.923-2.923H435.03c-20.03 0-20.133.011-22.576 2.455L410 260.909V366.52c0 72.816.33 106.23 1.065 107.602.586 1.095 2.049 2.387 3.25 2.871 1.202.484 10.882.909 21.512.944l19.327.063ZM34 367v-17H17v34h17zm290 0v-17H188v34h136zm171 0v-17h-17v34h17zm-171-77.818c0-49.294.208-51.079 6.806-58.399 2.032-2.253 5.944-5.147 8.694-6.43 4.75-2.217 6.076-2.334 26.5-2.338 11.825-.002 23.176.462 25.225 1.03 5.595 1.554 11.936 6.898 15.064 12.694 2.45 4.54 3.057 5.069 5 4.35 1.643-.607 2.512-2.172 3.384-6.089 3.115-14.004 4.19-38.154 2.292-51.5-8.054-56.647-52.487-96.336-108.465-96.883-6.6-.064-14.1.242-16.666.682l-4.667.798-1.68 9.702c-2.493 14.387-3.23 16.708-6.773 21.354-4.782 6.27-11.479 9.356-20.193 9.308-8.01-.045-13.005-2.141-18.16-7.623-6.297-6.7-7.954-13.556-6.363-26.338l.498-4-4.998-1.252c-25.938-6.5-58.135-1.527-81.469 12.582-26.02 15.733-43.228 38.963-51.217 69.14-3.703 13.987-3.457 46.23.487 63.916.897 4.022 1.761 5.593 3.412 6.203 1.943.719 2.55.19 5-4.35 3.128-5.796 9.47-11.14 15.064-12.693 2.049-.57 13.4-1.033 25.225-1.03 20.534.003 21.725.11 26.5 2.371 5.901 2.795 10.7 7.563 13.2 13.113 1.634 3.63 1.827 8.226 2.097 49.75l.297 45.75H324ZM262.979 109.51c3.373-1.744 3.46-1.983 5.516-14.968 3.049-19.27 12.198-40.512 24.265-56.34 7.722-10.129 8.438-11.826 6.718-15.917-1.5-3.57-4.126-5.286-8.084-5.286-3.731 0-9.916 6.617-18.476 19.766-10.802 16.595-17.933 34.91-21.454 55.102-2.013 11.54-1.894 12.856 1.46 16.209 3.267 3.268 5.808 3.63 10.055 1.434zm-89.716-36.976c19.465-4.938 42.564-5.336 59.136-1.02 3.237.844 5.95 1.41 6.03 1.26.08-.152 1.119-3.372 2.31-7.158 2.144-6.812 2.147-6.92.271-10.597-3.187-6.248-12.08-13.536-19.746-16.184-6.012-2.076-8.209-2.299-19.764-2-26.682.69-39.12.64-43.25-.174l-4.25-.838.015 6.838c.018 8.45 2.044 17.307 5.909 25.83 1.623 3.58 3.102 6.508 3.286 6.508.185 0 4.709-1.11 10.053-2.465z"
                                  stroke="url(#gradientStroke)"
                                  strokeWidth="2"
                                  fill="url(#gradientStroke)" // Vous pouvez aussi remplir avec un dégradé
                              />
                          </svg>

                          {/* --- Button --- */}
                          <button
                              className="mb-8 bg-blue hover:bg-rose text-white py-2 px-4 rounded font-bold transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
                              onClick={() =>
                                  handleOpenModal("Activités physiques adaptées", activityModalContent)
                              }
                          >
                              Activités physiques adaptées
                          </button>
                      </>
                  );
              })()}
          </div>

          <div className="flex flex-col items-center text-center">
              {(() => {
                  const globalCareModalContent = (
                      <div className="space-y-6 text-gray-700 leading-relaxed">
                          {/* --- Introduction --- */}
                          <section className="bg-gray-50 p-6 rounded-2xl shadow-md border border-gray-100">
                              <p>
                                  Manger mieux et bouger plus sont aujourd'hui deux facteurs reconnus
                                  de bien-être et de bonne santé.
                              </p>
                              <p>
                                  En effet, la nutrition s'associe parfaitement avec le sport vous
                                  apportant confiance en soi et une motivation supplémentaire pour
                                  mener à bien votre parcours de remise en forme.
                              </p>
                              <p className="mt-3">
                                  C'est pourquoi je vous propose des formules permettant une prise en
                                  charge globale.
                              </p>
                          </section>

                          {/* --- Example Pricing / Plans --- */}
                          {/* Uncomment or replace with actual plans */}
                          {/*
        <section className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-rose">
          <h3 className="text-rose font-extrabold text-2xl mb-4">💰 Abonnements</h3>
          <div className="grid sm:grid-cols-2 gap-6 text-center">
            <div className="bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition">
              <p className="font-bold text-lg">Abonnement OR</p>
              <p className="text-gray-600 text-sm mt-1">
                2h d'activités physiques / semaine + 1 consultation diététique / mois <br /> 50 euros le bilan + 100 euros/mois
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-xl shadow-sm hover:shadow-md transition">
              <p className="font-bold text-lg">Abonnement ARGENT</p>
              <p className="text-gray-600 text-sm mt-1">
                1h d'activités physiques / semaine + 1 consultation diététique / mois <br /> 50 euros le bilan + 80 euros/mois
              </p>
            </div>
          </div>
        </section>
        */}

                          {/* --- Call to Action --- */}
                          <section className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-green mt-10">
                              <div className="text-center flex flex-col items-center space-y-5">
                                  <p className="italic text-rose font-semibold text-lg">
                                      Vous souhaitez prendre rendez-vous ou en savoir plus ?
                                  </p>
                                  <a
                                      href="https://www.doctolib.fr/dieteticien/andrezieux-boutheon/celine-fougerouse"
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="bg-green hover:bg-lime text-white font-bold text-xl px-8 py-4 rounded-full shadow-lg
                hover:shadow-xl transition-all duration-300 hover:scale-105 hover:ring-4 hover:ring-green/30"
                                  >
                                      📅 Prendre rendez-vous sur Doctolib
                                  </a>
                              </div>
                          </section>
                      </div>
                  );

                  return (
                      <>
                          {/* --- SVG --- */}
                          <svg
                              className="cursor-pointer h-44 w-44 mb-4 hover:-translate-y-1 hover:scale-110 duration-300"
                              viewBox="0 0 512 512"
                              onClick={() =>
                                  handleOpenModal("Prises en charge globales", globalCareModalContent)
                              }
                          >
                              <defs>
                                  <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                                      <stop offset="0%" style={{ stopColor: "#F2989F", stopOpacity: 1 }} />
                                      <stop offset="100%" style={{ stopColor: "#C2DB9C", stopOpacity: 1 }} />
                                  </linearGradient>
                              </defs>

                              {/* --- Path to be filled --- */}
                              <path
                                  d="M119.086 510.317c-5.342-1.928-12.373-8.703-14.16-13.646-1.165-3.22-1.585-3.535-3.866-2.892-1.408.396-12.91.721-25.56.721-26.05 0-27.522-.354-34.762-8.368-6.34-7.018-6.738-9.96-6.738-49.814V401H23.968c-11.132 0-14.939-1.118-19.154-5.627C.43 390.686 0 388.123 0 366.751c0-18.383.18-20.493 2.096-24.45 1.398-2.887 3.51-5.158 6.338-6.815C12.23 333.26 13.789 333 23.283 333H33.89l.305-37.75c.295-36.494.377-37.883 2.467-41.75 2.557-4.73 7.471-9.556 12.338-12.119 2.804-1.476 6.34-1.915 17.787-2.206 12.725-.324 14.235-.545 13.803-2.02-3.142-10.741-4.289-52.13-1.764-63.655 8.85-40.385 29.967-69.21 66.696-91.034 1.638-.973 1.622-1.264-.276-5-5.15-10.135-7.493-20.402-8-35.06-.591-17.065.425-20.3 7.45-23.713l4.383-2.13 8.71 2.168c13.143 3.27 16.946 3.495 28.816 1.704 25.81-3.896 46.877 1.213 59.848 14.512 2.174 2.23 4.238 4.053 4.586 4.053.349 0 2.97-3.938 5.824-8.75 6.313-10.643 15.862-22.378 20.947-25.743 17.152-11.35 40.588 2.492 38.941 23.002-.583 7.268-2.15 10.52-9.309 19.326-2.98 3.666-7.191 10.047-9.36 14.182l-3.94 7.516 13.179.068c62.884.322 112.741 41.757 125.4 104.217 2.911 14.367 2.133 52.345-1.32 64.337-.423 1.474 1.091 1.696 13.812 2.023 15.894.409 19.311 1.482 25.425 7.984 6.995 7.44 6.83 6.333 7.167 48.088l.305 37.75h10.607c9.494 0 11.052.26 14.85 2.486 2.827 1.657 4.94 3.928 6.337 6.816 1.916 3.958 2.096 6.064 2.096 24.546 0 22.036-.477 24.523-5.627 29.338-4.255 3.98-7.453 4.814-18.438 4.814H478v35.319c0 39.854-.398 42.795-6.738 49.813-7.24 8.014-8.712 8.368-34.762 8.368-12.65 0-24.152-.325-25.56-.721-2.28-.643-2.701-.328-3.866 2.892-1.94 5.368-8.855 11.763-14.88 13.765-4.348 1.444-8.507 1.654-27.41 1.383-25.074-.359-27.107-.867-33.754-8.437-6.67-7.597-6.5-6.188-6.827-56.632l-.297-45.75H188.094l-.297 45.75c-.327 50.444-.158 49.035-6.827 56.632-6.71 7.643-8.573 8.092-34.47 8.323-18.903.168-23.786-.079-27.414-1.388zm48.608-17.73 2.806-2.414V243.827l-2.806-2.414C164.932 239.037 164.582 239 145 239s-19.932.037-22.694 2.413l-2.806 2.414-.29 119.836c-.16 65.91-.017 121.35.316 123.199.334 1.849 1.681 4.436 2.995 5.75 2.358 2.358 2.638 2.388 22.378 2.388 19.69 0 20.032-.036 22.795-2.413zm221.785.025c1.314-1.314 2.661-3.901 2.995-5.75.333-1.85.475-57.289.316-123.199l-.29-119.836-2.806-2.414C386.932 239.037 386.582 239 367 239s-19.932.037-22.694 2.413l-2.806 2.414v246.346l2.806 2.414c2.763 2.377 3.106 2.413 22.795 2.413 19.74 0 20.02-.03 22.378-2.388zM100.09 475.139c1.853-2.29 1.91-5.519 1.91-108.295V260.909l-2.455-2.454C97.102 256.01 97 256 76.97 256H56.846l-2.923 2.923L51 261.846v210.308l2.98 2.98 2.98 2.98 20.61-.307c20.28-.302 20.64-.345 22.52-2.668zm357.987-.062 2.923-2.923V261.846l-2.923-2.923-2.923-2.923H435.03c-20.03 0-20.133.011-22.576 2.455L410 260.909V366.52c0 72.816.33 106.23 1.065 107.602.586 1.095 2.049 2.387 3.25 2.871 1.202.484 10.882.909 21.512.944l19.327.063ZM34 367v-17H17v34h17zm290 0v-17H188v34h136zm171 0v-17h-17v34h17zm-171-77.818c0-49.294.208-51.079 6.806-58.399 2.032-2.253 5.944-5.147 8.694-6.43 4.75-2.217 6.076-2.334 26.5-2.338 11.825-.002 23.176.462 25.225 1.03 5.595 1.554 11.936 6.898 15.064 12.694 2.45 4.54 3.057 5.069 5 4.35 1.643-.607 2.512-2.172 3.384-6.089 3.115-14.004 4.19-38.154 2.292-51.5-8.054-56.647-52.487-96.336-108.465-96.883-6.6-.064-14.1.242-16.666.682l-4.667.798-1.68 9.702c-2.493 14.387-3.23 16.708-6.773 21.354-4.782 6.27-11.479 9.356-20.193 9.308-8.01-.045-13.005-2.141-18.16-7.623-6.297-6.7-7.954-13.556-6.363-26.338l.498-4-4.998-1.252c-25.938-6.5-58.135-1.527-81.469 12.582-26.02 15.733-43.228 38.963-51.217 69.14-3.703 13.987-3.457 46.23.487 63.916.897 4.022 1.761 5.593 3.412 6.203 1.943.719 2.55.19 5-4.35 3.128-5.796 9.47-11.14 15.064-12.693 2.049-.57 13.4-1.033 25.225-1.03 20.534.003 21.725.11 26.5 2.371 5.901 2.795 10.7 7.563 13.2 13.113 1.634 3.63 1.827 8.226 2.097 49.75l.297 45.75H324ZM262.979 109.51c3.373-1.744 3.46-1.983 5.516-14.968 3.049-19.27 12.198-40.512 24.265-56.34 7.722-10.129 8.438-11.826 6.718-15.917-1.5-3.57-4.126-5.286-8.084-5.286-3.731 0-9.916 6.617-18.476 19.766-10.802 16.595-17.933 34.91-21.454 55.102-2.013 11.54-1.894 12.856 1.46 16.209 3.267 3.268 5.808 3.63 10.055 1.434zm-89.716-36.976c19.465-4.938 42.564-5.336 59.136-1.02 3.237.844 5.95 1.41 6.03 1.26.08-.152 1.119-3.372 2.31-7.158 2.144-6.812 2.147-6.92.271-10.597-3.187-6.248-12.08-13.536-19.746-16.184-6.012-2.076-8.209-2.299-19.764-2-26.682.69-39.12.64-43.25-.174l-4.25-.838.015 6.838c.018 8.45 2.044 17.307 5.909 25.83 1.623 3.58 3.102 6.508 3.286 6.508.185 0 4.709-1.11 10.053-2.465z"
                                  stroke="url(#gradientStroke)"
                                  strokeWidth="2"
                                  fill="url(#gradientStroke)" // Vous pouvez aussi remplir avec un dégradé
                              />
                          </svg>
                          {/* --- Button --- */}
                          <button
                              className="mb-8 bg-blue hover:bg-rose text-white py-2 px-4 rounded font-bold transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
                              onClick={() =>
                                  handleOpenModal("Prises en charge globales", globalCareModalContent)
                              }
                          >
                              Prises en charge globales
                          </button>
                      </>
                  );
              })()}
          </div>




          <div className="flex flex-col items-center text-center">
              {(() => {
                  const impedanceModalContent = (
                      <div className="space-y-8 text-gray-700 leading-relaxed">

                          {/* --- Présentation --- */}
                          <section className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
                              <h3 className="text-rose font-extrabold text-2xl mb-3">Présentation</h3>
                              <p>
                                  L'impédancemétrie est une méthode professionnelle qui permet de mesurer votre composition corporelle :
                                  masse grasse, masse musculaire et taux d’eau total.
                              </p>
                              <p className="mt-3">
                                  Contrairement aux balances grand public, le BiodyExpert bénéficie d'un marquage CE médical,
                                  assurant des mesures précises et fiables. Le courant électrique de faible intensité traverse votre corps,
                                  et l'appareil déduit votre composition corporelle selon la conductivité des tissus.
                              </p>
                          </section>

                          {/* --- Applications --- */}
                          <section className="bg-white p-6 rounded-2xl shadow-md border-l-4 border-rose">
                              <h3 className="text-rose font-extrabold text-2xl mb-3">📊 Multiples applications</h3>
                              <ul className="list-disc ml-6 space-y-3">
                                  <li>
                                      Suivi de perte de poids : permet de s’assurer que la perte de poids provient de la masse grasse
                                      tout en préservant la masse musculaire.
                                  </li>
                                  <li>
                                      Dépistage de la dénutrition ou de la sarcopénie : grâce à l’analyse de l’index de masse musculaire
                                      (HAS), l'impédancemètre est un outil fiable pour suivre la santé des personnes âgées ou malades chroniques.
                                  </li>
                                  <li>
                                      Optimisation sportive : suivi de l’entraînement, de la nutrition et de l’hydratation pour améliorer
                                      la répartition corporelle et les performances, et détecter la fatigue musculaire ou le surentrainement.
                                  </li>
                              </ul>
                          </section>

                          {/* --- Infos pratiques --- */}
                          <section className="bg-gray-50 p-6 rounded-2xl shadow-sm border border-gray-100">
                              <h3 className="text-blue font-extrabold text-2xl mb-3">ℹ️ Informations pratiques</h3>
                              <p>
                                  Les mesures d'impédancemétrie sont incluses dans les suivis nutritionnels.
                                  Vous pouvez également réaliser une mesure hors suivi, sans consultation diététique.
                              </p>
                              <p className="mt-3">
                                  <BoldText>Tarif :</BoldText> 20 euros sans consultation diététique<br />
                                  <span className="italic">
              Contre-indiqué pour les femmes enceintes et les personnes avec des dispositifs médicaux (pacemakers, etc.)
            </span>
                              </p>
                          </section>

                          {/* --- CTA Button --- */}
                          <div className="flex justify-center mt-8">
                              <a
                                  href="https://www.doctolib.fr/dieteticien/andrezieux-boutheon/celine-fougerouse"
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="bg-green hover:bg-lime text-white font-bold text-lg px-8 py-4 rounded-full shadow-lg
          hover:shadow-xl transition-all duration-300 hover:scale-105 hover:ring-4 hover:ring-green/30"
                              >
                                  📅 Prendre rendez-vous sur Doctolib
                              </a>
                          </div>

                      </div>
                  );

                  return (
                      <>
                          <svg
                              className="cursor-pointer h-44 w-44 mb-4 hover:-translate-y-1 hover:scale-110 duration-300"
                              viewBox="0 0 512 512"
                              onClick={() =>
                                  handleOpenModal("Impédancemètre", impedanceModalContent)
                              }
                          >
                              <defs>
                                  <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                                      <stop offset="0%" style={{ stopColor: "#F2989F", stopOpacity: 1 }} />
                                      <stop offset="100%" style={{ stopColor: "#C2DB9C", stopOpacity: 1 }} />
                                  </linearGradient>
                              </defs>

                              <path
                                  d="M87.5 495.037C57.107 491.404 32.004 468.911 24.96 439c-1.614-6.85-4.247-41.687-13.565-179.5C4.41 156.203.068 86.093.427 82.42 2.872 57.396 18.217 35.033 40.5 24.02c13.744-6.794 18.011-7.417 51.219-7.471 28.337-.047 29.282.015 31.312 2.042 2.84 2.835 2.885 7.938.097 10.728-2.122 2.124-3.008 2.196-33.404 2.727-29.275.51-31.576.685-36.87 2.783-18.99 7.527-32.668 23.919-36.453 43.685-1.496 7.808-1.27 11.805 10.022 177.987 6.354 93.5 11.82 171.8 12.149 174 3.115 20.89 17.757 38.978 37.428 46.234l7.5 2.766h345l7.5-2.766c19.67-7.256 34.313-25.344 37.428-46.234.328-2.2 5.795-80.5 12.149-174C496.87 90.318 497.095 86.32 495.599 78.513c-3.782-19.75-17.324-35.995-36.453-43.73L453.5 32.5 299.278 32l-154.223-.5-2.182-2.182c-2.788-2.788-2.744-7.892.093-10.728l2.09-2.09h152.222c170.985 0 157.866-.566 174.222 7.519 22.283 11.014 37.628 33.377 40.073 58.401.36 3.673-3.983 73.783-10.968 177.08-9.318 137.813-11.95 172.65-13.564 179.5-6.163 26.167-25.126 45.872-52.148 54.19l-7.393 2.274-167 .145c-91.85.08-169.7-.177-173-.572zm-1.176-46.675c-9.144-3.24-16.577-13.041-17.885-23.582C67.483 417.073 46 96.667 46 90.116c0-3.511.53-8.15 1.176-10.31 1.635-5.457 8.287-12.647 14.286-15.44L66.5 62.02h379l5 2.37c10.366 4.915 15.5 13.357 15.5 25.486 0 6.937-21.474 327.016-22.51 335.511-1.252 10.274-8.837 19.84-18.285 23.059-3.671 1.25-9.705 1.554-30.929 1.554H367.91l-2.566-2.566c-2.07-2.07-2.448-3.182-1.952-5.75 1.249-6.467 2.176-6.684 28.595-6.684 13.07 0 25.164-.28 26.875-.622 4.073-.815 7.91-4.747 9.036-9.262.497-1.989 5.99-79.073 12.208-171.298 12.46-184.81 12.032-170.922 5.395-174.977-2.88-1.76-10.404-1.834-189-1.836-175.133-.002-186.196.1-189.363 1.747-1.85.961-4.082 2.97-4.962 4.466-1.49 2.531-.825 14.2 9.713 170.5 6.222 92.28 11.718 169.41 12.215 171.398 1.126 4.515 4.963 8.447 9.036 9.262 1.711.342 58.57.622 126.351.622 123.165 0 123.242.001 125.875 2.073 3.444 2.709 3.592 7.679.32 10.753L343.372 450l-126.435-.079c-108.926-.068-127.014-.284-130.612-1.559ZM159 237.463c-5.881-1.826-11.317-6.416-13.87-11.712-1.126-2.338-5.726-19.326-10.221-37.751-9.423-38.624-9.972-43.813-5.642-53.272 4.1-8.956 10.154-14.607 22.472-20.977 28.52-14.749 62.312-21.82 104.261-21.82 41.95 0 75.74 7.071 104.261 21.82 12.318 6.37 18.372 12.021 22.472 20.977 4.327 9.452 3.778 14.667-5.591 53.031-4.468 18.293-8.824 34.937-9.68 36.987-3.036 7.265-10.513 12.694-18.962 13.768-4.095.521-7.015 0-16.138-2.878-24.572-7.753-47.14-11.006-76.362-11.006-29.103 0-51.645 3.234-76.193 10.93-12.04 3.775-14.155 3.969-20.807 1.903zm19.143-16.928c6.246-1.905 13.27-3.948 15.607-4.538 4.956-1.252 4.908-.994 2.75-14.997-.805-5.225-1.472-10.512-1.482-11.75-.027-3.346 3.416-6.25 7.41-6.25 5.404 0 6.945 2.905 9.035 17.03l1.805 12.192 4.693-.622c3.73-.495 27.052-2.48 30.289-2.577.412-.013.75-8.053.75-17.868 0-16.613.139-17.97 2.013-19.667 1.107-1.002 3.351-1.821 4.987-1.821 1.636 0 3.88.82 4.987 1.821 1.874 1.696 2.013 3.054 2.013 19.667 0 9.815.338 17.855.75 17.868 3.237.098 26.56 2.082 30.289 2.577l4.693.622 1.805-12.193c2.09-14.124 3.631-17.029 9.036-17.029 3.993 0 7.436 2.904 7.41 6.25-.01 1.238-.678 6.525-1.483 11.75-2.158 14.003-2.206 13.745 2.75 14.997 2.337.59 9.36 2.633 15.607 4.538 6.246 1.906 12.184 3.465 13.194 3.465 1.01 0 2.99-1.012 4.399-2.25 2.245-1.973 3.553-6.38 10.611-35.75 4.428-18.425 8.08-35.525 8.116-38 .124-8.631-3.786-13.988-14.544-19.927-14.948-8.25-37.46-15.313-58.913-18.481-17.811-2.63-15.06-4.975-23.666 20.161C264.59 154.471 263.007 157 256 157c-7.007 0-8.59-2.53-17.054-27.247-8.607-25.136-5.855-22.791-23.666-20.161-21.454 3.168-43.965 10.23-58.913 18.481-10.76 5.94-14.67 11.299-14.541 19.927.077 5.128 14.352 65.786 16.657 70.782 1.377 2.982 4.163 4.988 7.16 5.155.629.035 6.254-1.496 12.5-3.402zM260.755 119l4.172-12h-17.854l4.172 12c2.295 6.6 4.434 12 4.755 12 .32 0 2.46-5.4 4.755-12z"
                                  stroke="url(#gradientStroke)"
                                  strokeWidth="2"
                                  fill="url(#gradientStroke)" // Vous pouvez aussi remplir avec un dégradé
                              />
                          </svg>

                          <button
                              className="mb-8 bg-blue hover:bg-rose text-white py-2 px-4 rounded font-bold transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300"
                              onClick={() =>
                                  handleOpenModal("Impédancemètre", impedanceModalContent)
                              }
                          >
                              Impédancemètre
                          </button>
                      </>
                  );
              })()}
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
