import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { AiFillProject } from "react-icons/ai";
import {
  BsFillHouseFill,
  BsFillPersonFill,
  BsFillFileEarmarkFill,
} from "react-icons/bs";

import Link from "next/link";

function Navbar() {
  return (
    <>
      <div className="fixed flex z-50 items-center backdrop-blur-3xl w-full">
        <div className="flex justify-between items-center w-full">
          <Link href="/">
            <span className="cursor-pointer text-primary-dark p-4 text-3xl font-bold lg:pl-12">
              Sg.
            </span>
          </Link>
          <nav className="hidden sm:flex w-fit justify-end">
            <NavbarLinks />
          </nav>
        </div>
        <MobileMenu />
      </div>
    </>
  );
}

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };
  const closeMenu = (
    <div onClick={handleToggle}>
      <NavBarMenuIcon icon={<AiOutlineClose size="26" />} />
    </div>
  );
  const openMenu = (
    <div onClick={handleToggle} className="m-0 p-0">
      <NavBarMenuIcon icon={<AiOutlineMenu size="26" />} />
    </div>
  );
  return (
    <>
      <nav className="h-fit z-10 fixed top-0 sm:hidden items-center w-full">
        {isOpen ? (
          <div className="backdrop-blur-3xl pb-2">
            {closeMenu}
            <NavbarLinks />
          </div>
        ) : (
          openMenu
        )}{" "}
      </nav>
    </>
  );
}

function NavbarLinks() {
  return (
    <ul className="flex flex-col sm:flex-row items-center w-full mb-4 sm:mb-0 sm:px-4 gap-4 active:text-primary-dark">
      <NavBarItem icon={<BsFillPersonFill size="16" />} label="me" />
      <NavBarItem icon={<AiFillProject size="16" />} label="work" />
      <NavbarCTA label="Resume" pagelink="/resume" />
    </ul>
  );
}

function NavBarItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <Link href={"#" + label}>
      <li className="flex flex-row  text-sm justify-center cursor-pointer items-center gap-2 mx-2 my-4 px-2  text-white hover:text-primary-dark transition-all">
        <i>{icon}</i>
        <span>{label}</span>
      </li>
    </Link>
  );
}

function NavbarCTA({ label, pagelink }: { label: string; pagelink: string }) {
  return (
    <Link href={pagelink}>
      <a target="_blank" rel="noopener noreferrer">
        <li className="flex flex-row justify-center items-center text-sm gap-2 m-2 px-4 py-2 border-primary-dark border-2 rounded-sm  text-primary-dark hover:text-black hover:bg-primary-dark transition-all">
          {label}
        </li>
      </a>
    </Link>
  );
}

function NavBarMenuIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="text-white float-right p-4 sm:hidden">{icon}</button>
  );
}
export default Navbar;
