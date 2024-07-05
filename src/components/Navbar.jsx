import logo from "../assets/GamingRoom.png";
const Navbar = () => {
  return (
    <header className="bg-white">
      <nav className="flex justify-between items-center w-[92%] mx-auto">
        <div>
          <img className="w-16" src={logo} />
        </div>
        <div>Céline Fougerouse</div>
        <div className="md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5">
          <ul className="flex md:flex-row flex-col md:item-center md:gap-[4vw] gap-8">
            <li>
              <a className="hover:text-gray-500" href="#">
                À propos
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#">
                Contact
              </a>
            </li>
            <li>
              <a className="hover:text-gray-500" href="#">
                Services
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          <button className="bg-[#222222] text-white px-5 py-2 rounded-full hover:bg-[black]">
            Prendre RDV
          </button>
        </div>
        
      </nav>
    </header>
  );
};

export default Navbar;
