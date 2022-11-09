import { useState } from "react";
import Navbar from "../nav/Navbar";
import { Profile } from "./Profile";

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

  return (
    <div className="grid w-full bg-slate-800 rounded-xl">
      {open.profile ? <Profile /> : null}

      <Navbar />
    </div>
  );
};

export default Home;
