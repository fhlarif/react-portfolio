import React from "react";
import Resume from "../contents/Resume";

const Navbar = () => {
  return (
    <nav className="mt-4 p-4 bg-gray-700 flex h-14 justify-between w-full ">
      <Resume />
      <Resume />
      <Resume />
    </nav>
  );
};

export default Navbar;
