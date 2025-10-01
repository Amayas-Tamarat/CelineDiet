
const Footer = () => {
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
        <div className="bg-blue text-white p-4" id="Contact">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
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
                <div className="flex flex-col items-center text-center gap-4">
                    <h1 className="text-green font-bold text-xl sm:text-2xl">Horaires:</h1>
                    <div className="grid grid-cols-2 gap-x-6 text-lg">
                        <div>
                            Lundi 9h30-19h
                            <br />
                            Mardi 9h30-16h30
                            <br />
                            Mercredi 9h30-20h
                        </div>
                        <div>
                            Jeudi 9h30-16h30
                            <br />
                            Vendredi 9h30-18h
                            <br />
                            Samedi 9h-12h
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center text-center gap-4">
                    <h1 className="text-green font-bold text-xl sm:text-2xl">Adresse</h1>
                    <div className="text-lg underline hover:text-green">
                        <a
                            href="https://www.google.com/maps/place/10+Av.+de+Saint-Etienne,+42160+Andr%C3%A9zieux-Bouth%C3%A9on/@45.5257939,4.2643697,17.75z"
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
