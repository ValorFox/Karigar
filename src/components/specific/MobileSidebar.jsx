import React, { useState, useEffect } from "react";
import { X } from "phosphor-react";
import { Link } from "react-router-dom";
import MobileSidebarUserprofile from "./MobileSidebarUserprofile";

const menuItems = [
  { title: "Explore", url: "/explore" },
  { title: "Artists", url: "/artists" },
  { title: "About", url: "/about" },
  { title: "Contact-Us", url: "/contact-us" },
];

export const MobileSidebar = ({ isOpen, setIsOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <>
      {/* Sidebar */}
      <div
        className={` lg:hidden fixed inset-y-0 left-0 z-50 w-80 bg-[#4A4238] shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 bg-[#4A4238]">
          <h2 className="text-xl text-[#F1E2C9]">Menu</h2>
          <X
            size={30}
            color="#F1E2C9"
            weight="bold"
            onClick={() => setIsOpen(false)}
          />
        </div>

        <MobileSidebarUserprofile />
        <nav>
          <ul>
            {menuItems.map((item) => (
              <Link
                to={item.url}
                className="text-black w-full"
                onClick={() => setIsOpen(false)}
                key={item.title}
              >
                <p className="w-full text-xl text-[#F1E2C9] block py-2 px-4 hover:bg-gray-100">
                  {item.title}
                </p>
              </Link>
            ))}
          </ul>
        </nav>
      </div>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm  bg-opacity-50 transition-opacity duration-300 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};
