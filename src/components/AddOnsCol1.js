import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Image from "next/image";

const AddOnsCol1 = () => {
  return (
    <div className="flex flex-col gap-4 md:hidden lg:flex">
      <Menu>
        <MenuButton className="flex items-center gap-3">
          <Image
            src="/plus.png"
            width={50}
            height={50}
            alt="Plus"
            className="w-4 h-4"
          />
          <p className="text-left font-head text-sm lg:text-lg">
            Full-Frame Mirrorless Camera
          </p>
        </MenuButton>
        <MenuItems>
          <MenuItem>
            <p className="text-sm bg-gray-200 py-1 px-3 w-fit rounded-md">
              10,000 ฿
            </p>
          </MenuItem>
        </MenuItems>
      </Menu>
      <Menu>
        <MenuButton className="flex items-center gap-3">
          <Image
            src="/plus.png"
            width={50}
            height={50}
            alt="Plus"
            className="w-4 h-4"
          />
          <p className="text-left font-head text-sm lg:text-lg">
            Computer vMix
          </p>
        </MenuButton>
        <MenuItems>
          <MenuItem>
            <p className="text-sm bg-gray-200 py-1 px-3 w-fit rounded-md">
              2,500 ฿
            </p>
          </MenuItem>
        </MenuItems>
      </Menu>
      <Menu>
        <MenuButton className="flex items-center gap-3">
          <Image
            src="/plus.png"
            width={50}
            height={50}
            alt="Plus"
            className="w-4 h-4"
          />
          <p className="text-left font-head text-sm lg:text-lg">
            Monitor 24 inch
          </p>
        </MenuButton>
        <MenuItems>
          <MenuItem>
            <p className="text-sm bg-gray-200 py-1 px-3 w-fit rounded-md">
              1,000 ฿
            </p>
          </MenuItem>
        </MenuItems>
      </Menu>
      <Menu>
        <MenuButton className="flex items-center gap-3">
          <Image
            src="/plus.png"
            width={50}
            height={50}
            alt="Plus"
            className="w-4 h-4"
          />
          <p className="text-left font-head text-sm lg:text-lg">
            Green Screen (For 1 Person)
          </p>
        </MenuButton>
        <MenuItems>
          <MenuItem>
            <p className="text-sm bg-gray-200 py-1 px-3 w-fit rounded-md">
              2,500 ฿
            </p>
          </MenuItem>
        </MenuItems>
      </Menu>
      <Menu>
        <MenuButton className="flex items-center gap-3">
          <Image
            src="/plus.png"
            width={50}
            height={50}
            alt="Plus"
            className="w-4 h-4"
          />
          <p className="text-left font-head text-sm lg:text-lg">
            Sound Engineer
          </p>
        </MenuButton>
        <MenuItems>
          <MenuItem>
            <p className="text-sm bg-gray-200 py-1 px-3 w-fit rounded-md">
              12,000 ฿
            </p>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
};

export default AddOnsCol1;
