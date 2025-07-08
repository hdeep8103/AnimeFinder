import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/react";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "Services" },
  { name: "Our Process", href: "OurProcess" },
  { name: "About Us", href: "AboutUs" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const HeaderNavBar = () => {
  const [active, setActive] = useState("Home");
  const navigate = useNavigate();

  return (
    <Disclosure
      as="nav"
      className="w-full bg-transparent backdrop-blur-md bg-white/10 fixed z-50">
      <div className="mx-auto px-2 sm:px-6 lg:px-8 w-full">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-none focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                className="block size-6 group-data-open:hidden"
                aria-hidden="true"
              />
              <XMarkIcon
                className="hidden size-6 group-data-open:block"
                aria-hidden="true"
              />
            </DisclosureButton>
          </div>

          {/* Centered nav items */}
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-center">
            <div className="hidden sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    onClick={() => {
                      setActive(item.name);
                      navigate(item.href);
                    }}
                    className={classNames(
                      active === item.name
                        ? "bg-white text-black"
                        : "text-white hover:bg-gray-400 hover:text-black",
                      "rounded-md px-4 py-2 text-sm font-medium cursor-pointer transition duration-300"
                    )}>
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
              <span className="sr-only">View notifications</span>
              <BellIcon className="size-6" aria-hidden="true" />
            </button>

            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none">
                  <span className="sr-only">Open user menu</span>
                  <img
                    alt=""
                    src="https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png"
                    className="size-8 rounded-full"
                  />
                </MenuButton>
              </div>
              <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none">
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Your Profile
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Settings
                  </a>
                </MenuItem>
                <MenuItem>
                  <a
                    href="#"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                    Sign out
                  </a>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3 text-center">
          {navigation.map((item) => (
            <DisclosureButton
              key={item.name}
              onClick={() => {
                setActive(item.name);
                navigate(item.href);
              }}
              className={classNames(
                active === item.name
                  ? "bg-white text-black"
                  : "text-white hover:bg-gray-400 hover:text-black",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}>
              {item.name}
            </DisclosureButton>
          ))}
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default HeaderNavBar;
