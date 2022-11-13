import { useState } from "react";
import Navbar from "../nav/Navbar";
import { Profile } from "./Profile";
import Resume from "./Resume";

const Home = () => {
  interface IOpen {
    profile: boolean;
    resume: boolean;
    portfolio: boolean;
    contact: boolean;
  }

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

  return (
    <div className="grid w-full bg-slate-800 rounded-xl">
      {open.profile ? (
        <>
          <Profile />
          <Navbar handleOpen={handleOpen} />
        </>
      ) : null}

      {open.resume ? (
        <>
          <Navbar handleOpen={handleOpen} /> <Resume />
        </>
      ) : null}
    </div>
  );
};

export default Home;
