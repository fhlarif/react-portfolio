import { useState } from "react";
import { IOpen } from "../../interfaces/Iopen";
import Navbar from "../nav/Navbar";
import { Profile } from "./Profile";
import Resume from "./Resume";
import { motion } from "framer-motion";
import Portfolio from "./Portfolio";
import { AiOutlineArrowUp } from "react-icons/ai";

const Home = () => {
  const [open, setOpen] = useState<IOpen>({
    profile: true,
    resume: false,
    portfolio: false,
    contact: false,
  });

  const handleOpen = (e: string) => {
    if (e === "profile") {
      setOpen({ ...open, profile: true, resume: false, portfolio: false, contact: false });
    } else if (e === "resume") {
      setOpen({ ...open, profile: false, resume: true, portfolio: false, contact: false });
    } else if (e === "portfolio") {
      setOpen({ ...open, profile: false, resume: false, portfolio: true, contact: false });
    } else if (e === "contact") {
      setOpen({ ...open, profile: false, resume: false, portfolio: false, contact: true });
    }
  };

  const navbar = (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, translateY: -100 }}
      animate={{ opacity: 1, scale: 1, translateY: 1 }}
      transition={{ duration: 0.4 }}>
      <Navbar open={open} handleOpen={handleOpen} />
    </motion.div>
  );

  return (
    <main className="grid w-full rounded-xl" id="top">
      {open.profile ? (
        <div className="flex h-screen items-center">
          <div>
            <Profile />
            {navbar}
          </div>
        </div>
      ) : null}
      {open.resume ? (
        <>
          {navbar}
          <Resume />
        </>
      ) : null}
      {open.portfolio ? (
        <>
          {navbar}
          <Portfolio />
        </>
      ) : null}
      <span className="flex justify-end sticky bottom-0 right-0">
        <a href="#top" className="  h-12 w-12 z-30 bg-amber-800 flex items-center justify-center rounded-full ">
          <AiOutlineArrowUp size={25} />
        </a>
      </span>
    </main>
  );
};

export default Home;
