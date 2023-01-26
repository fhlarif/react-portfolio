import { ReactNode } from "react";
import { AiFillContacts, AiOutlineFundProjectionScreen, AiOutlineMessage } from "react-icons/ai";
import { FaPaperclip } from "react-icons/fa";
import { IOpen } from "../../interfaces/Iopen";

type Props = {
  open?: IOpen;
  handleOpen?: (e: string) => void;
  children?: ReactNode;
};

const Nav = ({ open, children }: Props) => {
  return (
    <ul className="mt-2 p-4 hover:-translate-y-1 hover:underline text-center hover:decoration-amber-500 underline-offset-8 hover:text-amber-500 flex h-14 md:justify-between w-full md:flex-row items-center flex-col justify-center rounded-lg border-4 border-gray-800 shadow-md shadow-gray-700 bg-gray-700">
      <li>{children}</li>
    </ul>
  );
};

const Navbar = ({ open, handleOpen }: Props): JSX.Element => {
  return (
    <nav className="m-4 flex md:flex-row flex-col gap-2 uppercase w-full mx-auto">
      <div className={"w-full cursor-pointer"} onClick={() => handleOpen?.("profile")}>
        <Nav open={open}>
          {" "}
          <div className="flex gap-2">
            <span className="text-amber-500">
              <AiFillContacts size={25} />
            </span>
            <span className={open?.profile ? "text-amber-600 underline" : ""}>Profile</span>
          </div>
        </Nav>
      </div>
      <div className={"w-full cursor-pointer"} onClick={() => handleOpen?.("resume")}>
        <Nav open={open}>
          <div className="flex gap-2">
            <span className="text-amber-500">
              <FaPaperclip size={25} />
            </span>
            <span className={open?.resume ? "text-amber-600 underline" : ""}>Resume</span>
          </div>
        </Nav>
      </div>
      <div className={"w-full cursor-pointer"} onClick={() => handleOpen?.("portfolio")}>
        <Nav open={open}>
          <div className="flex gap-2">
            <span className="text-amber-500">
              <AiOutlineFundProjectionScreen size={25} />
            </span>
            <span className={open?.portfolio ? "text-amber-600 underline" : ""}>Portfolio</span>
          </div>
        </Nav>
      </div>
    </nav>
  );
};

export default Navbar;
