const Footer = () => {
    return (
        <footer className="bg-blue text-white text-center py-6 mt-0">
            <p className="text-sm sm:text-base">
                © {new Date().getFullYear()} Céline Fougerouse — Tous droits réservés
            </p>
        </footer>
    );
};

export default Footer;