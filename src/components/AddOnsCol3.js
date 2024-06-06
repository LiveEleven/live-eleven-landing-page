import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Image from "next/image";

const AddOnsCol3 = () => {
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

export default AddOnsCol3;
