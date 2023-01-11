import { motion } from "framer-motion";

const Portfolio = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="w-full gap-4 grid md:grid-cols-2  tracking-wide font-bold p-4 ">
      <div>Hello there</div>
    </motion.div>
  );
};

export default Portfolio;
