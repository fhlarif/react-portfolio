import { ReactNode } from "react";
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
        <Nav open={open}>Profile</Nav>
      </div>
      <div className={"w-full cursor-pointer"} onClick={() => handleOpen?.("resume")}>
        <Nav open={open}>Resume</Nav>
      </div>
      <div className={"w-full cursor-pointer"} onClick={() => handleOpen?.("portfolio")}>
        <Nav open={open}>Portfolio</Nav>
      </div>
      <div className={"w-full cursor-pointer"} onClick={() => handleOpen?.("contact")}>
        <Nav open={open}>Contact</Nav>
      </div>
    </nav>
  );
};

export default Navbar;
