import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Image from "next/image";

const AddOnsTablet2 = () => {
  return (
    <div className="flex-col gap-4 hidden md:flex lg:hidden">
      <Menu>
        <MenuButton className="flex items-center gap-3">
          <Image
            src="/plus.png"
            width={50}
            height={50}
            alt="Plus"
            className="w-4 h-4"
          />
          <p className="text-left font-head">4G Bonding internet ( 2sim )</p>
        </MenuButton>
        <MenuItems>
          <MenuItem>
            <p className="text-sm bg-gray-200 py-1 px-3 w-fit rounded-md">
              12,000
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
          <p className="text-left font-head">Studio Lighting</p>
        </MenuButton>
        <MenuItems>
          <MenuItem>
            <p className="text-sm bg-gray-200 py-1 px-3 w-fit rounded-md">
              12,000
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
          <p className="text-left font-head">Zoom Meeting Pin ( 3-6 Person)</p>
        </MenuButton>
        <MenuItems>
          <MenuItem>
            <p className="text-sm bg-gray-200 py-1 px-3 w-fit rounded-md">
              12,000
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
          <p className="text-left font-head">Zoom Create Room</p>
        </MenuButton>
        <MenuItems>
          <MenuItem>
            <p className="text-sm bg-gray-200 py-1 px-3 w-fit rounded-md">
              12,000
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
          <p className="text-left font-head">Run Through</p>
        </MenuButton>
        <MenuItems>
          <MenuItem>
            <p className="text-sm bg-gray-200 py-1 px-3 w-fit rounded-md">
              12,000
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
          <p className="text-left font-head">etc.</p>
        </MenuButton>
        <MenuItems>
          <MenuItem>
            <p className="text-sm bg-gray-200 py-1 px-3 w-fit rounded-md">
              12,000
            </p>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
};

export default AddOnsTablet2;
