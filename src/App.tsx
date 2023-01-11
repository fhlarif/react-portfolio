import Home from "./components/contents/Home";
import { motion } from "framer-motion";
import { RouterProvider } from "@tanstack/react-router";
import { router } from "./components/nav/RootRouter";
const App = () => {
  return (
    <RouterProvider router={router} />
    /* <div className=" max-w-5xl mx-auto h-full flex justify-center sm:items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5, translateY: -100 }}
          animate={{ opacity: 1, scale: 1, translateY: 1 }}
          transition={{ duration: 0.4 }}
          className="w-full md:px-14 sm:px-4">
          <Home />
        </motion.div>
      </div>
    </RouterProvider> */
  );
};

export default App;
