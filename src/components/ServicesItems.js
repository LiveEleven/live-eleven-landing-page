import { MenuItem } from "@headlessui/react";
import { Link } from "react-scroll/modules";

const ServicesItems = () => {
  return (
    <>
      <Link
        activeClass="active"
        to="live"
        spy={true}
        smooth={true}
        offset={0}
        duration={200}
        className="text-sm font-head"
      >
        <MenuItem>
          <button className="py-2 px-1 w-full text-left lg:px-6 hover:bg-secondary-color mt-3 lg:mt-6">
            Live Stream
          </button>
        </MenuItem>
      </Link>
      <hr class="w-40 h-0.5 mx-auto bg-secondary-color border-0 rounded md:w-48 lg:w-24" />
      <Link
        activeClass="active"
        to="event"
        spy={true}
        smooth={true}
        offset={0}
        duration={200}
        className="text-sm font-head"
      >
        <MenuItem>
          <button className="py-2 px-1 w-full text-left lg:px-6 hover:bg-secondary-color">
            Event Organizer
          </button>
        </MenuItem>
      </Link>
      <hr class="w-40 h-0.5 mx-auto bg-secondary-color border-0 rounded md:w-48 lg:w-24" />
      <Link
        activeClass="active"
        to="hybrid"
        spy={true}
        smooth={true}
        offset={0}
        duration={200}
        className="text-sm font-head"
      >
        <MenuItem>
          <button className="py-2 px-1 w-full text-left lg:px-6 hover:bg-secondary-color">
            Hybrid Event
          </button>
        </MenuItem>
      </Link>
      <hr class="w-40 h-0.5 mx-auto bg-secondary-color border-0 rounded md:w-48 lg:w-24" />
      <Link
        activeClass="active"
        to="setup"
        spy={true}
        smooth={true}
        offset={0}
        duration={200}
        className="text-sm font-head"
      >
        <MenuItem>
          <button className="py-2 px-1 w-full text-left lg:px-6 hover:bg-secondary-color">
            Set Up Live Stream
          </button>
        </MenuItem>
      </Link>
      <hr class="w-40 h-0.5 mx-auto bg-secondary-color border-0 rounded md:w-48 lg:w-24" />
      <Link
        activeClass="active"
        to="equipment"
        spy={true}
        smooth={true}
        offset={0}
        duration={200}
        className="text-sm font-head"
      >
        <MenuItem>
          <button className="py-2 px-1 w-full text-left lg:px-6 hover:bg-secondary-color lg:hover:rounded-b-lg">
            Equipment Services
          </button>
        </MenuItem>
      </Link>
    </>
  );
};

export default ServicesItems;

