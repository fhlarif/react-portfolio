import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const Li = ({ children }: Props) => {
  return (
    <li className="hover:underline hover:decoration-amber-500 underline-offset-8 hover:text-amber-500 ">{children}</li>
  );
};

const Ul: JSX.Element = (
  <ul className="flex md:justify-between w-full md:flex-row items-center flex-col justify-center">
    <Li>Home</Li>
    <Li>Resume</Li>
    <Li>Resume</Li>
  </ul>
);

const Navbar = (): JSX.Element => {
  return <nav className="mt-4 p-4 bg-gray-700  flex h-14 items-center w-full ">{Ul}</nav>;
};

export default Navbar;
