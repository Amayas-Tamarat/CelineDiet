import { useEffect } from "react";
import Celine from "../assets/PhotoCeline.jpg";
import AOS from "aos";
import "aos/dist/aos.css";

const Who = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section
            className="container mx-auto px-4 py-12 md:py-20"
            id="Who"
            data-aos="fade-up"
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Image */}
                <div className="flex justify-center md:justify-start">
                    <img
                        className="h-72 sm:h-80 md:h-auto md:max-h-[70vh] lg:max-h-[80vh] object-cover rounded-2xl shadow-xl"
                        src={Celine}
                        alt="Celine"
                    />
                </div>

                {/* Text */}
                <div
                    className="space-y-6 md:space-y-8 text-grey text-base sm:text-lg md:text-xl leading-loose text-justify max-w-3xl"
                    data-aos="fade-up"
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-rose text-center md:text-left">
                        Qui suis-je ?
                    </h1>

                    {/* Formation */}
                    <div>
                        <h2 className="font-semibold text-rose mb-2">🎓 Formation</h2>
                        <p>
                            Forte de mes deux compétences, la{" "}
                            <span className="text-rose font-bold">Diététique</span> reconnue
                            par un BTS Diététique et le{" "}
                            <span className="text-rose font-bold">Sport</span> par une licence
                            STAPS option activités physiques adaptées, ma double qualification
                            vous apportera une expertise complète et qualitative.
                        </p>
                    </div>

                    {/* Expérience */}
                    <div>
                        <h2 className="font-semibold text-rose mb-2">💼 Expérience</h2>
                        <ul className="list-disc list-inside space-y-2">
                            <li>
                                <span className="text-rose font-bold">Diététicienne</span> au
                                Centre hospitalier du Forez
                            </li>
                            <li>
                                Employée <span className="text-rose font-bold">sport santé</span>{" "}
                                dans un club d&apos;athlétisme
                            </li>
                            <li>
                                Professeure d&apos;activités physiques adaptées à l&apos;association
                                cœur et santé
                            </li>
                            <li>Professeure de gym douce / aquagym dans des associations</li>
                            <li>Entraîneur d&apos;athlétisme et de marche nordique</li>
                        </ul>
                    </div>

                    {/* Cabinet */}
                    <div>
                        <h2 className="font-semibold text-rose mb-2">🏠 Cabinet</h2>
                        <p>
                            Je vous propose des{" "}
                            <span className="text-rose font-bold">
                consultations diététiques
              </span>{" "}
                            et/ou des séances pratiques de{" "}
                            <span className="text-rose font-bold">sport adapté</span> au sein
                            même de mon cabinet à{" "}
                            <span className="font-semibold">Andrézieux-Bouthéon</span> à 10
                            minutes de <span className="font-semibold">Saint-Étienne</span>{" "}
                            (<span className="font-semibold">Loire 42</span>).
                        </p>
                    </div>

                    {/* Handicap */}
                    <div>
                        <h2 className="font-semibold text-rose mb-2">🌍 Accessibilité</h2>
                        <p>
                            Également spécialisée dans le sport pour tous, j&apos;accompagne
                            les personnes en situation de{" "}
                            <span className="text-rose font-bold">handicap</span> (mental ou
                            physique) désireuses de commencer une activité physique ou de se
                            perfectionner dans un domaine{" "}
                            <span className="text-rose font-bold">sportif</span>.
                        </p>
                    </div>
                    <div className="bg-rose/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center md:justify-between gap-4 md:gap-6 shadow-lg">
                    <p className="italic text-rose font-semibold text-center md:text-left text-lg md:text-xl">
                        Au plaisir de vous rencontrer
                    </p>
                    <a
                        href="https://www.doctolib.fr/dieteticien/andrezieux-boutheon/celine-fougerouse"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green text-white px-8 py-3 md:px-10 md:py-4 rounded-full shadow-md hover:bg-lime transition-all duration-300 text-center text-lg md:text-xl font-semibold"
                    >
                        Prendre un RDV
                    </a>
                </div>

                </div>
            </div>
        </section>
    );
};

export default Who;
