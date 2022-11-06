import Navbar from "../nav/Navbar";
import { Profile } from "../nav/partials/Profile";

const Home = () => {
  return (
    <div className="grid bg-slate-800 rounded-xl">
      <Profile />
      <Navbar />
    </div>
  );
};

export default Home;
