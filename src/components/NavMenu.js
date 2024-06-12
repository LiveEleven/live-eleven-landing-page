import Image from "next/image";
import ServicesDropdown from "./ServicesDropdown";
import PackagesDropdown from "./PackagesDropdown";
import { Link } from "react-scroll";
import { NavIcons } from "./NavIcons";

const NavMenu = () => {
  return (
    <>
      <div className="hidden lg:flex items-center ml-48">
        <div className="px-4">
          <ServicesDropdown />
        </div>
        <p className="text-2xl px-4 font-head">|</p>
        <div className="px-4">
          <PackagesDropdown />
        </div>
        <p className="text-2xl px-4 font-head">|</p>
        <button>
          <Link
            activeClass="active"
            to="aboutus"
            spy={true}
            smooth={true}
            offset={0}
            duration={200}
            className="hidden lg:flex text-sm  md:text-xl px-4 font-head"
          >
            About Us
          </Link>
        </button>
      </div>
      <div className="hidden lg:flex items-center gap-2 lg:gap-4">
        <div className="flex justify-center items-center gap-2">
          <div className="relative w-4 h-4 lg:w-7 lg:h-7">
            <Image src="/icon-phone.png" alt={"icon-phone"} fill />
          </div>

          <p>087-510-7972</p>
        </div>
        {NavIcons.map((icon) => (
          <div
            className="relative w-4 h-4 lg:w-7 lg:h-7 cursor-pointer"
            key={icon.icon}
          >
            <a href={icon.link} target="_blank" rel="noopener noreferrer">
              <Image
                src={`/${icon.icon}.png`}
                key={icon.icon}
                alt={icon.icon}
                fill
              />
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default NavMenu;
