import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { pageTransition } from "../Styles/Transitions";
const Timers = () => {
  return (
    <motion.div
      exit="out"
      animate="in"
      initial="initial"
      variants={pageTransition}
      className="container"
    >
      Timers
    </motion.div>
  );
};

export default Timers;
