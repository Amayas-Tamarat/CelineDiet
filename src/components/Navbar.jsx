import LogoInitiales from "../assets/LogoInitiales.png";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const onToggleMenu = () => setIsMenuOpen(!isMenuOpen);

    return (
        <header className="font-roboto">
            <nav className="relative flex justify-between items-center border-b-2 text-rose bg-white h-20 px-4 md:px-8">
                <div className="flex items-center text-rose">
                    <img
                        className="w-12 sm:w-14 md:w-16 lg:w-20 xl:w-20"
                        src={LogoInitiales}
                        alt="Logo Initiales"
                    />
                    <h1 className="text-xl sm:text-3xl text-rose">Céline Fougerouse</h1>
                </div>
                <div className="flex items-center gap-2">
                    <ul className="hidden md:flex md:flex-row md:items-center md:gap-[4vw]">
                        <li>
                            <a className="hover:text-gray-500" href="#Who">
                                À propos
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-gray-500" href="#Services">
                                Services
                            </a>
                        </li>
                        <li>
                            <a className="hover:text-gray-500" href="#Contact">
                                Contact
                            </a>
                        </li>
                    </ul>
                    <a
                        href="https://www.doctolib.fr/dieteticien/andrezieux-boutheon/celine-fougerouse"
                        rel="noopener noreferrer"
                    >
                        <div className="bg-green text-white px-5 py-2 hover:bg-lime xl:mr-4 mr-4 rounded-full text-center">
                            Prendre RDV
                        </div>
                    </a>
                    <div
                        className="md:hidden flex items-center text-3xl cursor-pointer mr-1"
                        onClick={onToggleMenu}
                    >
                        {isMenuOpen ? <IoIosClose /> : <CiMenuBurger />}
                    </div>
                </div>
                <div
                    className={`md:hidden absolute left-0 right-0 top-full z-50 bg-white w-full shadow-md transition-all duration-500
            ${isMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"}`}
                >
                    <ul className="flex flex-col p-4 gap-2">
                        <li>
                            <a
                                className="hover:text-gray-500"
                                href="#Who"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                À propos
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:text-gray-500"
                                href="#Services"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Services
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:text-gray-500"
                                href="#Contact"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;
