import Image from "next/image";
import { Link } from "react-scroll/modules";
import { useState } from "react";
import NavMenu from "./NavMenu";
import MobileNavMenu from "./MobileNavMenu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-screen h-auto top-0 z-50">
      <div className="bg-white flex items-center justify-between pl-5 pr-10 md:px-20 shadow-md shadow-slate-600 ">
        <Link
          activeClass="active"
          to="header"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="text-4xl px-4 cursor-pointer"
        >
          <Image
            className="w-14 h-14 lg:w-20 lg:h-20"
            src="/WhiteLogo.png"
            width={100}
            height={100}
            alt="Logo"
            priority
          />
        </Link>

        <div className="lg:hidden">
          <button id="menu-toggle" className="text-black" onClick={toggleMenu}>
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>

        <NavMenu />
      </div>

      {isMenuOpen ? <MobileNavMenu /> : null}
    </nav>
  );
};

export default Navbar;
