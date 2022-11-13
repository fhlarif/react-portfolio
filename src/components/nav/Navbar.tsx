import { ReactNode } from "react";
import { motion } from "framer-motion";

type Props = {
  handleOpen?: (e: string) => void;
  children?: ReactNode;
};

const Nav = ({ children }: Props) => {
  return (
    <ul className="mt-2 p-4 bg-gray-700 hover:-translate-y-1  hover:underline text-center hover:decoration-amber-500 underline-offset-8 hover:text-amber-500 flex h-14 md:justify-between w-full md:flex-row items-center flex-col justify-center">
      <li>{children}</li>
    </ul>
  );
};

const Navbar = ({ handleOpen }: Props): JSX.Element => {
  return (
    <motion.nav
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="m-4 flex md:flex-row flex-col gap-2">
      <div className="w-full cursor-pointer" onClick={() => handleOpen?.("profile")}>
        <Nav>Profile</Nav>
      </div>
      <div className="w-full cursor-pointer" onClick={() => handleOpen?.("resume")}>
        <Nav>Resume</Nav>
      </div>
      <div className="w-full cursor-pointer" onClick={() => handleOpen?.("portfolio")}>
        <Nav>Portfolio</Nav>
      </div>
      <div className="w-full cursor-pointer" onClick={() => handleOpen?.("contact")}>
        <Nav>Contact</Nav>
      </div>
    </motion.nav>
  );
};

export default Navbar;
