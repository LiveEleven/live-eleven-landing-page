import { MenuItem } from "@headlessui/react";
import { Link } from "react-scroll/modules";

const PackagesItems = () => {
  return (
    <div>
      <MenuItem>
        <button className="py-2 px-1 w-full text-left lg:px-6 hover:bg-secondary-color mt-3 lg:mt-6">
          <Link
            activeClass="active"
            to="livePackages"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="text-sm font-head"
          >
            Live Packages
          </Link>
        </button>
      </MenuItem>
      <hr class="w-40 h-0.5 mx-auto bg-secondary-color border-0 rounded md:w-48 lg:w-24" />
      <MenuItem>
        <button className="py-2 px-1 w-full text-left lg:px-6 hover:bg-secondary-color lg:hover:rounded-b-lg">
          <Link
            activeClass="active"
            to="setUpLivePackages"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
            className="text-sm font-head"
          >
            Set Up Live Stream Packages
          </Link>
        </button>
      </MenuItem>
    </div>
  );
};

export default PackagesItems;
