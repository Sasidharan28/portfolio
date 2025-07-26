import React from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";

const NavbarMain = () => {
  return (
    <nav className="max-h-[1300px] mx-auto px-4 w-full fixed left-[50%] -translate-x-[50%] z-20 flex gap-4 mt-2">
        <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-amber-950 items-center p-5 rounded-r-full rounded-l-full border-[1px] border-orange-400">
      <NavbarLogo />
      <NavbarLinks />
      <NavbarBtn />
      </div>
    </nav>
  );
};

export default NavbarMain;
