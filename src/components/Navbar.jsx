import LogoInitiales from "../assets/LogoInitiales.png";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const onToggleMenu = () => setIsMenuOpen(!isMenuOpen);

    const navLinks = [
        { name: "À propos", href: "#Who" },
        { name: "Services", href: "#Services" },
        { name: "Contact", href: "#Contact" },
    ];

    return (
        <header className="font-roboto">
            <nav className="relative flex justify-between items-center border-b-2 text-rose bg-white h-20 px-4 md:px-8">
                {/* Logo */}
                <div className="flex items-center gap-4">
                    <img
                        className="w-12 sm:w-14 md:w-16 lg:w-20 xl:w-20"
                        src={LogoInitiales}
                        alt="Logo Initiales"
                    />
                    <h1 className="text-xl sm:text-3xl text-rose font-bold">Céline Fougerouse</h1>
                </div>

                {/* Desktop links */}
                <div className="flex items-center gap-4 md:gap-6">
                    <ul className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="text-rose hover:text-gray-500 transition-colors duration-300"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* RDV Button */}
                    <a
                        href="https://www.doctolib.fr/dieteticien/andrezieux-boutheon/celine-fougerouse"
                        rel="noopener noreferrer"
                    >
                        <div className="bg-green text-white px-5 py-2 hover:bg-lime rounded-full font-semibold transition-colors duration-300">
                            Prendre RDV
                        </div>
                    </a>

                    {/* Mobile menu toggle */}
                    <div
                        className="md:hidden flex items-center text-3xl cursor-pointer ml-2"
                        onClick={onToggleMenu}
                    >
                        {isMenuOpen ? <IoIosClose /> : <CiMenuBurger />}
                    </div>
                </div>

                {/* Mobile menu */}
                <div
                    className={`md:hidden absolute left-0 right-0 top-full z-50 bg-white w-full shadow-md transition-all duration-500
            ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}`}
                >
                    <ul className="flex flex-col p-4 gap-4">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-rose hover:text-gray-500 transition-colors duration-300 block"
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
