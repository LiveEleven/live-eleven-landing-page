import { MenuItem } from "@headlessui/react";
import { Link } from "react-scroll/modules";

const ServicesItems = () => {
  return (
    <>
      <MenuItem>
        <button className="py-2 px-1 w-full text-left lg:px-6 hover:bg-secondary-color mt-3 lg:mt-6">
          <Link
            activeClass="active"
            to="live"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="text-sm font-head"
          >
            Live Stream
          </Link>
        </button>
      </MenuItem>
      <hr class="w-40 h-0.5 mx-auto bg-secondary-color border-0 rounded md:w-48 lg:w-24" />
      <MenuItem>
        <button className="py-2 px-1 w-full text-left lg:px-6 hover:bg-secondary-color">
          <Link
            activeClass="active"
            to="event"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="text-sm font-head"
          >
            Event Organizer
          </Link>
        </button>
      </MenuItem>
      <hr class="w-40 h-0.5 mx-auto bg-secondary-color border-0 rounded md:w-48 lg:w-24" />
      <MenuItem>
        <button className="py-2 px-1 w-full text-left lg:px-6 hover:bg-secondary-color">
          <Link
            activeClass="active"
            to="hybrid"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="text-sm font-head"
          >
            Hybrid Event
          </Link>
        </button>
      </MenuItem>
      <hr class="w-40 h-0.5 mx-auto bg-secondary-color border-0 rounded md:w-48 lg:w-24" />
      <MenuItem>
        <button className="py-2 px-1 w-full text-left lg:px-6 hover:bg-secondary-color">
          <Link
            activeClass="active"
            to="setup"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="text-sm font-head"
          >
            Set Up Live Stream
          </Link>
        </button>
      </MenuItem>
      <hr class="w-40 h-0.5 mx-auto bg-secondary-color border-0 rounded md:w-48 lg:w-24" />
      <MenuItem>
        <button className="py-2 px-1 w-full text-left lg:px-6 hover:bg-secondary-color lg:hover:rounded-b-lg">
          <Link
            activeClass="active"
            to="equipment"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="text-sm font-head"
          >
            Equipment Services
          </Link>
        </button>
      </MenuItem>
    </>
  );
};

export default ServicesItems;
