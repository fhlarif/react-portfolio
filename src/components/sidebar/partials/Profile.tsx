import { FaFacebook, FaGithub, FaGitlab, FaLinkedin } from "react-icons/fa";

export const Profile = (): JSX.Element => {
  return (
    <header className="flex justify-center">
      <div className="flex gap-4 flex-col">
        <img className=" self-center h-32 rounded-full" src="/public/Fathul Arif.png" alt="Fathul Arif" />
        <p className="font-bold uppercase">Fathul Arif | Developer</p>
        <Sosial />
      </div>
    </header>
  );
};

const Sosial = (): JSX.Element => {
  return (
    <div className="flex gap-8 justify-center items-center">
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
