import { IHandleClick } from "../../interfaces/sidebar";
import Nav from "./partials/Nav";
import { Profile } from "./partials/Profile";

const Sidebar = ({ handleNavClick }: IHandleClick): JSX.Element => {
  return (
    <aside className="lg:grid hidden h-screen bg-gray-900 drop-shadow-xl sticky col-span-1">
      <div className="px-2 ">
        <Profile />
        <Nav handleNavClick={handleNavClick} />
      </div>
    </aside>
  );
};
export default Sidebar;
