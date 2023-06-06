import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { AiFillProject } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";

import Link from "next/link";

function Navbar() {
  return (
    <>
      <div className="fixed z-30 flex w-full items-center justify-center p-2 backdrop-blur-3xl">
        <div className="flex w-full items-center justify-between sm:w-3/4 ">
          <Link className="underline-hover" href="/">
            <span className="z-20 cursor-pointer text-3xl font-bold text-primary-dark">
              SG.
            </span>
          </Link>
          <nav className="hidden w-fit justify-end sm:flex">
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
      <nav className="fixed top-0 z-10 h-fit w-full items-center backdrop-blur-3xl sm:hidden">
        {isOpen ? (
          <div className="bg-black pb-2 backdrop-opacity-50">
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
    <ul className="mb-4 flex w-full flex-col items-center gap-4 active:text-primary-dark sm:mb-0 sm:flex-row sm:px-4">
      <NavBarItem icon={<BsFillPersonFill size="16" />} label="Me" />
      <NavBarItem icon={<AiFillProject size="16" />} label="Work" />
      <NavbarCTA label="Resume" pagelink="/resume" />
    </ul>
  );
}

function NavBarItem({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <Link href={"#" + label}>
      <li className="underline-hover mx-2 flex cursor-pointer flex-row items-center justify-center gap-2 p-2 text-base  text-white transition-all hover:text-primary-dark">
        <i>{icon}</i>
        <span>{label}</span>
      </li>
    </Link>
  );
}

function NavbarCTA({ label, pagelink }: { label: string; pagelink: string }) {
  return (
    <Link href={pagelink}>
      <li className="m-2 flex cursor-pointer flex-row items-center justify-center gap-2 rounded-sm border-2 border-primary-dark px-4 py-2 text-sm  text-primary-dark transition-all hover:bg-primary-dark hover:text-black">
        {label}
      </li>
    </Link>
  );
}

function NavBarMenuIcon({ icon }: { icon: React.ReactNode }) {
  return (
    <button className="float-right p-4 text-white sm:hidden">{icon}</button>
  );
}
export default Navbar;
