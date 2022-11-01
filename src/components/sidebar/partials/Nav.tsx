import { IHandleClick, INav } from "../../../interfaces/sidebar";

export const Nav = ({ handleNavClick }: IHandleClick): JSX.Element => {
  const links: INav[] = [
    { url: "#home", title: "Home", active: true },
    { url: "#about", title: "About", active: true },
  ];

  return (
    <nav className="px-2 pl-10 text-xl mt-20 justify-start flex gap-4">
      <ul className="flex flex-col gap-6">
        {links.map((link, index) => (
          <li key={index} onClick={() => handleNavClick(link.url, link.active)}>
            <a href={link.url}>{link.title}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
