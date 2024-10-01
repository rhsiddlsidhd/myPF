import React from "react";
import { motion } from "framer-motion";

const Text = ({ children, ...props }) => {
  const { css } = props;

  return (
    <motion.span className={`text-6xl font-bold ${css}`}>
      {children}
    </motion.span>
  );
};

export default Text;
