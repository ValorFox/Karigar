import { Link } from "react-router-dom";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  ButtonGroup,
} from "@nextui-org/react";
import { List } from "phosphor-react";
import React, { useState } from "react";
import { MobileSidebar } from "../specific/MobileSidebar";
import { ShoppingCartSimple } from "@phosphor-icons/react";
import { useSelector } from "react-redux";

const Header = () => {
  const { email } = useSelector((state) => state.userState);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <MobileSidebar isOpen={isOpen} setIsOpen={setIsOpen} />
      <Navbar
        className="bg-[#D1BE9C] w-full py-3 z-30"
        height={"auto"}
        shouldHideOnScroll
      >
        <List size={30} className="lg:hidden" onClick={() => setIsOpen(true)} />
        <NavbarBrand className="lg:max-w-min">
          <Link
            to="/"
            className="font-bold text-2xl playwrite-it-moderna-Cursive"
          >
            Karigar
          </Link>
        </NavbarBrand>

        <NavbarContent
          className=" hidden lg:flex gap-8 px-4 py-2 w-full "
          justify="center"
        >
          <NavbarItem>
            <Link
              to="/explore"
              className="text-black relative transition-colors duration-150 hover:text-[#7E6B5A] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#7E6B5A] after:transition-all after:duration-300 hover:after:w-full"
            >
              Explore
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              to="/artists"
              className="text-black relative transition-colors duration-150 hover:text-[#7E6B5A] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#7E6B5A] after:transition-all after:duration-300 hover:after:w-full"
            >
              Artists
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              to="#"
              className="text-black relative transition-colors duration-150 hover:text-[#7E6B5A] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#7E6B5A] after:transition-all after:duration-300 hover:after:w-full"
            >
              Category
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link
              to="/about"
              className="text-black relative transition-colors duration-150 hover:text-[#7E6B5A] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#7E6B5A] after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </Link>
          </NavbarItem>

          <NavbarItem>
            <Link to={"/contact-us"}>Contact Us</Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="left">
          <Link to={"/cart"}>
            <ShoppingCartSimple
              size={25}
              weight="regular"
              className="hover:cursor-pointer"
            />
          </Link>
        </NavbarContent>

        {email && <span>{email}</span>}
        {!email && (
          <NavbarContent justify="left">
            <ButtonGroup className="rounded-lg lg:flex hidden p-2" size="small">
              <Link to={"/login"} className="mx-2">
                Login
              </Link>
              <Link to={"/signup"} className="mx-2">
                SignUp
              </Link>
            </ButtonGroup>

            <Link to={"/login"} className="lg:hidden">
              Login
            </Link>
          </NavbarContent>
        )}
      </Navbar>
    </>
  );
};

export default Header;
