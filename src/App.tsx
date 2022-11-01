import Home from "./components/Home";
import Sidebar from "./components/sidebar/Sidebar";
import { IHNavClick } from "./interfaces/sidebar";

const App = () => {
  const handleNavClick: IHNavClick = (url: string, active: boolean): void => {
    console.log("from app", url, active);
  };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 ">
      <Sidebar handleNavClick={handleNavClick} />
      <Home />
    </div>
  );
};

export default App;
