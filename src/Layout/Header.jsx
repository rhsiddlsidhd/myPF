import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import { motion, useScroll, useSpring } from "framer-motion";

const Header = () => {
  const { scrollYProgress } = useScroll();

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <div className="fixed max-md:hidden w-full  h-header border-b-2 border-b-gray-400 flex justify-center items-center">
        <div className="w-11/12 max-w-7xl h-10 flex justify-between">
          <Logo />
          <Menu />
        </div>
        <motion.hr
          className="absolute bottom-0 w-full border-2 border-gray-400 "
          style={{ scaleX: scaleX }}
        />
      </div>
    </>
  );
};

export default Header;
