import Image from "next/image";
import ServicesDropdown from "./ServicesDropdown";
import PackagesDropdown from "./PackagesDropdown";
import { Link } from "react-scroll";
import { NavIcons } from "./NavIcons";

const MobileNavMenu = () => {
  return (
    <>
      <div className="absolute top-10 right-0 flex justify-center w-[250px] md:w-[300px] py-4 px-8 md:px-10 rounded-l-md bg-white lg:hidden ">
        <div className="flex flex-col items-center gap-4">
          <ServicesDropdown />
          <hr class="w-40 h-0.5 mx-auto bg-secondary-color border-0 rounded md:w-48" />
          <PackagesDropdown />
          <hr class="w-40 h-0.5 mx-auto bg-secondary-color border-0 rounded md:w-48" />
          <button>
            <Link
              activeClass="active"
              to="aboutus"
              spy={true}
              smooth={true}
              offset={0}
              duration={500}
              className="text-md md:text-xl font-head"
            >
              About Us
            </Link>
          </button>
          <hr class="w-40 h-0.5 mx-auto bg-secondary-color border-0 rounded md:w-48" />
          <div className="flex gap-2">
            {NavIcons.map((icon) => (
              <div
                className="relative w-3 h-3 md:w-4 md:h-4 lg:w-7 lg:h-7 cursor-pointer"
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
        </div>
      </div>
    </>
  );
};

export default MobileNavMenu;
