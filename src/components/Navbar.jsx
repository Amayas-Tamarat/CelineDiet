import logo from "../assets/GamingRoom.png";
import { CiMenuBurger } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";
import React, { useState } from 'react';

const Navbar = () => {
  const navLinks = document.querySelector('.nav-links')
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  function onToggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }
  return (
    <header className="bg-white font-roboto">
      <nav className="grid grid-cols-2 justify-items-end items-center w-[92%] mx-auto h-[10vh]">
        <div className="flex justify-self-start items-center gap-2 text-3xl ">
          <img className="w-16 " src={logo} />
          Céline Fougerouse
        </div>
        <div className="flex justify-self-end items-center gap-2">
          <div
            className={`gap-4 flex md:static absolute bg-white md:min-h-fit right-0 items-center ${
              isMenuOpen ? "top-[60px] py-2" : "top-[-100%]"
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
          <div className="bg-[#222222] text-white px-5 py-2 hover:bg-[black]">
            <a className="" href="#">
              Prendre RDV
            </a>
          </div>
          <div
          className="justify-self-end flex items-center text-3xl cursor-pointer md:hidden"
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
