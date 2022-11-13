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
  const navstyle: string =
    "mt-2 p-4 hover:-translate-y-1 hover:underline text-center hover:decoration-amber-500 underline-offset-8 hover:text-amber-500 flex h-14 md:justify-between w-full md:flex-row items-center flex-col justify-center";

  let isopen: string = "bg-gray-700";

  if (
    (open?.profile && children === "Profile") ||
    (open?.resume && children === "Resume") ||
    (open?.portfolio && children === "Portfolio") ||
    (open?.contact && children === "Contact")
  ) {
    isopen = "bg-gray-600";
  }

  return (
    <ul className={navstyle + " " + isopen}>
      <li>{children}</li>
    </ul>
  );
};

const Navbar = ({ open, handleOpen }: Props): JSX.Element => {
  return (
    <nav className="m-4 flex md:flex-row flex-col gap-2 uppercase">
      <div className={"w-full cursor-pointer"} onClick={() => handleOpen?.("profile")}>
        <Nav open={open}>
          {" "}
          <div className="flex gap-2">
            <span className="text-amber-500">
              <AiFillContacts size={25} />
            </span>
            Profile
          </div>
        </Nav>
      </div>
      <div className={"w-full cursor-pointer"} onClick={() => handleOpen?.("resume")}>
        <Nav open={open}>
          <div className="flex gap-2">
            <span className="text-amber-500">
              <FaPaperclip size={25} />
            </span>
            Resume
          </div>
        </Nav>
      </div>
      <div className={"w-full cursor-pointer"} onClick={() => handleOpen?.("portfolio")}>
        <Nav open={open}>
          <div className="flex gap-2">
            <span className="text-amber-500">
              <AiOutlineFundProjectionScreen size={25} />
            </span>
            Resume
          </div>
        </Nav>
      </div>
      <div className={"w-full cursor-pointer"} onClick={() => handleOpen?.("contact")}>
        <Nav open={open}>
          <div className="flex gap-2">
            <span className="text-amber-500">
              <AiOutlineMessage size={25} />
            </span>
            Contact
          </div>
        </Nav>
      </div>
    </nav>
  );
};

export default Navbar;
