import LogoInitiales from "../assets/LogoInitiales.png";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function onToggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
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
        <div className="flex justify-self-end items-center gap-2">
          <div
            className={`gap-4 flex md:static absolute md:min-h-fit right-0 items-center z-10 bg-white ${
              isMenuOpen ? "top-[110px] py-2" : "top-[-100%]"
            } md:w-auto w-full items-center px-5 transition-all duration-500`}
          >
            <ul className="flex md:flex-row flex-col md:item-end md:gap-[4vw]">
              <li className="py-2">
                <a className="hover:text-gray-500" href="#Who">
                  À propos
                </a>
              </li>
              <li className="py-2">
                <a className="hover:text-gray-500" href="#Services">
                  Services
                </a>
              </li>
              <li className="py-2">
                <a className="hover:text-gray-500" href="#Contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <a className="" href="https://www.doctolib.fr/dieteticien/andrezieux-boutheon/celine-fougerouse">
            <div className="bg-green text-white px-5 py-2 hover:bg-lime xl:mr-4 mr-4 rounded-full text-center">
              Prendre RDV
            </div>
          </a>
          <div
            className="justify-self-end flex items-center text-3xl cursor-pointer md:hidden mr-1"
            onClick={onToggleMenu}
          >
            {isMenuOpen ? <IoIosClose /> : <CiMenuBurger />}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
