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
          <p className="text-left font-head text-sm lg:text-lg">Off-Site</p>
        </MenuButton>
        <MenuItems>
          <MenuItem>
            <p className="text-sm bg-gray-200 py-1 px-3 w-fit rounded-md">
              เริ่มต้น 2000 ฿
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
          <p className="text-left font-head text-sm lg:text-lg">Run Through</p>
        </MenuButton>
        <MenuItems>
          <MenuItem>
            <p className="text-sm bg-gray-200 py-1 px-3 w-fit rounded-md">
              50% ของ Package
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
          <p className="text-left font-head text-sm lg:text-lg">Sound Effect</p>
        </MenuButton>
        <MenuItems>
          <MenuItem>
            <p className="text-sm bg-gray-200 py-1 px-3 w-fit rounded-md">
              3,500 ฿
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
          <p className="text-left font-head text-sm lg:text-lg">Over Times</p>
        </MenuButton>
        <MenuItems className="flex flex-col gap-2">
          <MenuItem>
            <p className="text-sm bg-gray-200 py-1 px-3 w-fit rounded-md">
              1-3 hrs 3,000 ฿
            </p>
          </MenuItem>
          <MenuItem>
            <p className="text-sm bg-gray-200 py-1 px-3 w-fit rounded-md">
              3-6 hrs 5,000 ฿
            </p>
          </MenuItem>
        </MenuItems>
      </Menu>
    </div>
  );
};

export default AddOnsCol3;
