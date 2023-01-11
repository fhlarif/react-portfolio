import { FaLocationArrow, FaFacebook, FaGithub, FaGitlab, FaLinkedin } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { motion } from "framer-motion";

export const Profile = (): JSX.Element => {
  return (
    <motion.header
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className=" max-w-5xl mx-auto h-full sm:items-center flex items-center shadow-gray-800 shadow-lg p-4  flex-col justify-center bg-slate-800  rounded-xl border-4 border-gray-900">
      <div className=" flex gap-4 flex-col ">
        <img className=" self-center h-32 rounded-full" src="/assets/Fathul Arif.png" alt="Fathul Arif" />
        <p className="font-bold text-center uppercase text-lg">
          Fathul Arif Kamarudin | <span className="text-rose-200"> IT Officer </span>
        </p>
        <Sosial />
      </div>
      <div className="md:mt-10 mt-4 w-full">
        <About />
      </div>
    </motion.header>
  );
};
const quote = (
  <motion.div
    initial={{ opacity: 0, scale: 0.5, translateY: -100 }}
    animate={{ opacity: 1, scale: 1, translateY: 1 }}
    transition={{ duration: 0.4 }}
    className="px-4 pt-4">
    <p className="italic text-md tracking-wide pt-2 text-amber-400">
      Take what is given freely, enjoin what is good, and turn away from the ignorant.(7:199)
    </p>
  </motion.div>
);
const About = () => {
  return (
    <section className="w-full  md:pl-8 justify-center items-center flex flex-col">
      <ul className="text-sm flex flex-col  md:flex-row gap-2 md:gap-8 self-center capitalize md:text-md">
        <li className="text-rose-200 lowercase">
          <span className="gap-1 flex items-center">
            <AiFillMail size={25} /> fathulkb@gmail.com
          </span>
        </li>
        <li className="text-rose-200">
          <span className="gap-1 flex items-center">
            <FaLocationArrow size={19} /> Selangor, Malaysia
          </span>
        </li>
      </ul>
      <p className="text-center pt-4 md:pt-8 text-md md:text-md font-bold">
        An Information Technology Officer at IIUM. Skilled in troubleshooting and debugging. Creative, resourceful and
        flexible
      </p>
      <p className="italic my-4 text-md tracking-wide pt-2 text-amber-400 text-center  md:pt-8 text-md md:text-md font-bold">
        Take what is given freely, enjoin what is good, and turn away from the ignorant.(7:199)
      </p>
    </section>
  );
};

const Sosial = (): JSX.Element => {
  interface ISosial {
    link: string;
    icon: JSX.Element;
  }

  const sosialInfo: ISosial[] = [
    {
      link: "https://www.facebook.com/fathul.arif34",
      icon: <FaFacebook size={25} />,
    },
    {
      link: "https://github.com/fhlarif",
      icon: <FaGithub size={25} />,
    },
    {
      link: "https://gitlab.iium.edu.my/fathularif",
      icon: <FaGitlab size={25} />,
    },
    {
      link: "https://www.linkedin.com/in/fathulkb/",
      icon: <FaLinkedin size={25} />,
    },
  ];

  return (
    <div className="flex text-rose-200 gap-8 justify-center items-center">
      {sosialInfo.map(({ link, icon }, index) => {
        return (
          <a key={index} href={link} target={"_blank"}>
            {icon}
          </a>
        );
      })}
    </div>
  );
};
