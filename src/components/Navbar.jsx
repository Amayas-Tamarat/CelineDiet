import LogoInitiales from "../assets/LogoInitiales.png";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function onToggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <header className="font-roboto">
      <nav className="grid grid-cols-2 border-b-2 gap-6 xl:h-[14vh]  xl:items-center">
        <div className="flex items-center">
          <img
            className="w-16 sm:w-20 md:w-24 lg:w-28 xl:w-32 "
            src={LogoInitiales}
            alt="Logo Initiales"
          />
          <h1 className="text-xl sm:text-3xl">Céline Fougerouse</h1>
        </div>
        <div className="flex justify-self-end items-center gap-2">
          <div
            className={`gap-4 flex md:static absolute md:min-h-fit right-0 items-center z-10 bg-white ${
              isMenuOpen ? "top-[110px] py-2" : "top-[-100%]"
            } md:w-auto w-full items-center px-5 transition-all duration-500`}
          >
            <ul className="flex md:flex-row flex-col md:item-end md:gap-[4vw] gap-8">
              <li className="py-2">
                <a className="hover:text-gray-500" href="#">
                  À propos
                </a>
              </li>
              <li className="py-2">
                <a className="hover:text-gray-500" href="#">
                  Contact
                </a>
              </li>
              <li className="py-2">
                <a className="hover:text-gray-500" href="#">
                  Services
                </a>
              </li>
            </ul>
          </div>
          <div className="bg-green text-white px-5 py-2 hover:bg-lime xl:mr-4 mr-4">
            <a className="" href="#">
              Prendre RDV
            </a>
          </div>
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
