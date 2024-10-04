import React from "react";
import { motion } from "framer-motion";

const TextWrapper = ({ isSticky, opacityValues, children }) => {
  return (
    <motion.div
      className={`w-intro-text flex flex-col ${
        isSticky ? "sticky" : "fixed"
      } top-2/4 justify-center items-center break-keep`}
      style={{ opacity: opacityValues }}
    >
      {children}
    </motion.div>
  );
};

export default TextWrapper;
