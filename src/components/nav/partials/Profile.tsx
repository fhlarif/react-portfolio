import { FaLocationArrow, FaFacebook, FaGithub, FaGitlab, FaLinkedin } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";

export const Profile = (): JSX.Element => {
  return (
    <header className="flex px-4 sm:my-4 sm:flex-row flex-col justify-center">
      <div className="flex gap-4 flex-col">
        <img className=" self-center h-32 rounded-full" src="/assets/Fathul Arif.png" alt="Fathul Arif" />
        <p className="font-bold text-center uppercase">
          Fathul Arif Kamarudin | <span className="text-rose-200"> IT Officer </span>
        </p>
        <Sosial />
      </div>
      <div className="sm:my-10">
        <About />
      </div>
    </header>
  );
};

const About = () => {
  return (
    <section className=" sm:pl-8 justify-center items-center flex flex-col">
      <ul className="my-4 flex flex-col  sm:flex-row gap-2 sm:gap-8 sm:justify-start capitalize sm:text-lg">
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
      <p className="text-center sm:text-start sm:w-96 sm:pt-8 text-lg font-bold">
        An Information Technology Officer at IIUM. Skilled in troubleshooting and debugging. Creative, resourceful and
        flexible
      </p>
    </section>
  );
};

const Sosial = (): JSX.Element => {
  return (
    <div className="flex text-rose-200 gap-8 justify-center items-center">
      <a href="http://" target={"_blank"}>
        <FaFacebook size={25} />
      </a>
      <a href="http://" target={"_blank"}>
        <FaGithub size={25} />
      </a>
      <a href="http://" target={"_blank"}>
        <FaGitlab size={25} />
      </a>
      <a href="http://" target={"_blank"}>
        <FaLinkedin size={25} />
      </a>
    </div>
  );
};