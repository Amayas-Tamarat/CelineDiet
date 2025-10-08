import React from "react";
import { FiMail, FiMapPin, FiPhone, FiClock } from "react-icons/fi";

const Contact = () => {
    return (
        <section
            id="Contact"
            className="bg-gray-50 py-20 px-6 sm:px-12 lg:px-24 text-gray-800"
        >
            <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl sm:text-5xl font-extrabold text-rose mb-6">
                    Me Contacter
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
                    Vous souhaitez obtenir des renseignements, prendre rendez-vous
                    ou simplement échanger ? N’hésitez pas à me contacter via les moyens ci-dessous.
                </p>
            </div>

            <div className="mt-16 grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto">

                <div className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-rose text-center hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                    <div className="flex justify-center gap-4 mb-4">
                        <FiPhone className="text-rose w-8 h-8" />
                        <FiMail className="text-rose w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-rose mb-2">Contacts</h3>

                    <div className="space-y-2">
                        <a
                            href="tel:+33668475597"
                            className="block text-gray-700 hover:text-rose transition-colors duration-300 underline"
                        >
                            06 68 47 55 97
                        </a>
                        <a
                            href="mailto:cf.apadiet@gmail.com"
                            className="block text-gray-700 hover:text-rose transition-colors duration-300 underline break-words"
                        >
                            cf.apadiet@gmail.com
                        </a>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-lime text-center hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                    <FiClock className="text-lime w-8 h-8 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-lime mb-2">Horaires</h3>
                    <div className="grid grid-cols-2 gap-x-6 text-gray-700 text-sm sm:text-base leading-relaxed">
                        <div>
                            <p>Lundi<br />Mardi<br />Mercredi</p>
                        </div>
                        <div>
                            <p>9h30 - 19h<br />9h30 - 16h30<br />9h30 - 20h</p>
                        </div>
                        <div>
                            <p>Jeudi<br />Vendredi<br />Samedi</p>
                        </div>
                        <div>
                            <p>9h30 - 16h30<br />9h30 - 18h<br />9h - 12h</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-8 rounded-2xl shadow-md border-l-4 border-green text-center hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                    <FiMapPin className="text-green w-8 h-8 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-green mb-2">Adresse</h3>
                    <a
                        href="https://www.google.com/maps/place/10+Av.+de+Saint-Etienne,+42160+Andr%C3%A9zieux-Bouth%C3%A9on/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-700 hover:text-green transition-colors duration-300 underline"
                    >
                        Espace Ambroise Paré<br />
                        10 Av. de Saint-Étienne<br />
                        42160 Andrézieux-Bouthéon
                    </a>
                    <p className="text-sm italic mt-2">(au premier étage avec ascenseur)</p>
                </div>


            </div>

            {/* --- CTA --- */}
            <div className="flex justify-center mt-16">
                <a
                    href="https://www.doctolib.fr/dieteticien/andrezieux-boutheon/celine-fougerouse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-green hover:bg-lime text-white font-bold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 hover:ring-4 hover:ring-green/30"
                >
                    📅 Prendre rendez-vous sur Doctolib
                </a>
            </div>
        </section>
    );
};

export default Contact;
