import { IHandleClick } from "../../interfaces/sidebar";
import { SideBarContent } from "./partials/SideBarContent";
import { Profile } from "./partials/Profile";

const Sidebar = ({ handleNavClick }: IHandleClick): JSX.Element => {
  return (
    <aside className="lg:grid hidden h-screen bg-gray-900 drop-shadow-xl sticky col-span-1">
      <div className="px-2 ">
        <Profile />
        <SideBarContent handleNavClick={handleNavClick} />
      </div>
    </aside>
  );
};
export default Sidebar;
