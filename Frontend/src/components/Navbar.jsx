import React from "react";
import {IoMdSearch} from 'react-icons/io'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import {FaCaretDown, FaShoppingCart} from 'react-icons/fa'
import DarkMode from "./DarkMode";
function Navbar() {
  const MenuLinks = [
    {
      name: "Home",
      path: "#",
    },
    {
      name: "About",
      path: "#",
    },
    {
      name: "Products",
      path: "#",
    },
    {
      name: "Contact",
      path: "#",
    },
    {
      name: "Blogs",
      path: "#",
    },
  ];
  const DropdownLinks = [
    {
      id: 1,
      name: "Trending Products",
      path: "#",
    },
    {
      id: 2,
      name: "Best Selling",
      path: "#",
    },
    {
      id: 3,
      name: "Top Rated",
      path: "#",
    },
  ];
   

  return (
    <div className="fixed top-0 left-0 right-0 bg-white dark:bg-gray-900 dark:text-white duration-200  z-40">
      <div className=" py-4">
        <div className="container flex justify-between items-center">
          {/* Logo and Links section */}
          <div className=" flex items-center gap-4">
            <a
              href="#"
              className="text-primary font-semibold tracking-wide text-2xl uppercase sm:text-3xl
                 "
            >
              ECart
            </a>
            {/* Menu Links */}
            <div className="hidden lg:block">
              <ul className="flex items-center gap-4">
                {MenuLinks.map((link) => {
                  return (
                    <li key={link.name} className="inline-block">
                      <a
                        href={link.path}
                        className="text-gray-500 px-4 font-semibold hover:text-black dark:hover:text-white duration-200 text-lg"
                      >
                        {link.name}
                      </a>
                    </li>
                  );
                })}
                {/* Dropdown */}
                <li className="  relative  cursor-pointer group ">
                  <a href="#" className="flex items-center gap-[2px] font-semibold text-gray-500 dark:hover:text-white py-2">Quick Link 
                  <span >
                    <FaCaretDown className=" text-sm group-hover:rotate-180 duration-300"/>
                  </span>
                  </a>
                  <div className=" absolute z-[1000] hidden group-hover:block w-[170px] rounded-md bg-white shadow-md p-2 dark:bg-gray-900">
                    <ul className=" space-y-1">
                      {
                        DropdownLinks.map((link) => {
                          return (
                            <li key={link.name} className="p-2 hover:bg-primary/20  dark:hover:bg-primary/40  w-full rounded-lg">
                              <a
                                href={link.path}
                                className="text-gray-500 font-semibold hover:text-black dark:hover:text-white duration-200 text-sm p-2 "
                              >
                                {link.name}
                              </a>
                            </li>
                          );
                        })
                      }
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          {/* Navbar right section  */}
          <div className=" flex justify-between items-center gap-4">
            {/* Search Bar*/}
            <div className=" relative group hidden sm:block ">
                <input type="text" placeholder="Search..." className="
                search-bar" />

                <IoMdSearch className=" text-xl text-gray-600 dark:text-gray-400 absolute top-1/2
                 -translate-y-1/2 right-3 group-hover:text-primary duration-300"  />
            </div>
            {/* Cart*/}
            <button className="relative p-3">
                <FaShoppingCart className=" text-xl text-gray-600 dark:text-gray-400 "/>
                <div
                className="w-4 h-4 bg-green-600 text-white rounded-full absolute top-0 right-0 flex items-center justify-center text-xs "
                >4</div>
            </button>
            {/* Dark Mode Button */}            <div>
                <DarkMode/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
