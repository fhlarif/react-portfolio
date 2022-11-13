import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4 }}
      className="uppercase tracking-wide font-bold p-4 ">
      <span className="text-rose-300">Resume</span>
    </motion.div>
  );
};

export default Resume;
