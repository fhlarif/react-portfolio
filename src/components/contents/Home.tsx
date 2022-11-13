import { useState } from "react";
import { IOpen } from "../../interfaces/Iopen";
import Navbar from "../nav/Navbar";
import { Profile } from "./Profile";
import Resume from "./Resume";
import { motion } from "framer-motion";

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

  const quote = (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, translateY: -100 }}
      animate={{ opacity: 1, scale: 1, translateY: 1 }}
      transition={{ duration: 0.4 }}
      className="px-4 pt-4">
      {open.resume !== true ? (
        <p className="font-extrabold uppercase  font-sans text-lg tracking-wide">FATHUL ARIF KAMARUDIN</p>
      ) : (
        ""
      )}
      <p className="italic text-md tracking-wide pt-2 text-amber-400">
        Take what is given freely, enjoin what is good, and turn away from the ignorant.(7:199)
      </p>
    </motion.div>
  );

  return (
    <main className="grid w-full bg-slate-800 rounded-xl">
      {open.profile ? (
        <>
          <Profile />
          {navbar}
        </>
      ) : null}

      {open.profile !== true ? quote : ""}

      {open.resume ? (
        <>
          {navbar}
          <Resume />
        </>
      ) : null}
    </main>
  );
};

export default Home;
