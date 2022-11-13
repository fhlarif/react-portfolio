import { FaLocationArrow, FaFacebook, FaGithub, FaGitlab, FaLinkedin } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";
import { motion } from "framer-motion";

export const Profile = (): JSX.Element => {
  return (
    <motion.header
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="flex px-2 md:my-4 md:flex-row flex-col justify-center">
      <div className="flex gap-4 flex-col">
        <img className=" self-center h-32 rounded-full" src="/assets/Fathul Arif.png" alt="Fathul Arif" />
        <p className="font-bold text-center uppercase text-lg">
          Fathul Arif Kamarudin | <span className="text-rose-200"> IT Officer </span>
        </p>
        <Sosial />
      </div>
      <div className="md:my-10">
        <About />
      </div>
    </motion.header>
  );
};

const About = () => {
  return (
    <section className=" md:pl-8 justify-center items-center flex flex-col">
      <ul className="my-4 text-sm flex flex-col  md:flex-row gap-2 md:gap-8 md:justify-start capitalize md:text-md">
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
      <p className="text-center md:text-start md:w-96 md:pt-8 text-md md:text-md font-bold">
        An Information Technology Officer at IIUM. Skilled in troubleshooting and debugging. Creative, resourceful and
        flexible
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
