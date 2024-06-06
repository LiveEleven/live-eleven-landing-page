import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import Image from "next/image";

const AddOnsCol2 = () => {
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
            Computer Admin
          </p>
        </MenuButton>
        <MenuItems>
          <MenuItem>
            <p className="text-sm bg-gray-200 py-1 px-3 w-fit rounded-md">
              1,500 ฿
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
            4G Bonding internet (2sim)
          </p>
        </MenuButton>
        <MenuItems>
          <MenuItem>
            <p className="text-sm bg-gray-200 py-1 px-3 w-fit rounded-md">
              5,000 ฿
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
            Studio Lighting
          </p>
        </MenuButton>
        <MenuItems>
          <MenuItem>
            <p className="text-sm bg-gray-200 py-1 px-3 w-fit rounded-md">
              2,000 ฿
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
            Zoom Meeting Pin (3-6 Person)
          </p>
        </MenuButton>
        <MenuItems>
          <MenuItem>
            <p className="text-sm bg-gray-200 py-1 px-3 w-fit rounded-md">
              3,000 ฿
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
            Zoom Meeting (300 Participants)
          </p>
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

export default AddOnsCol2;
