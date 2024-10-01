import React, { useEffect } from "react";
import Text from "../atoms/Text";
import { motion, useScroll, useTransform } from "framer-motion";

const AboutMe = ({ container }) => {
  const { scrollY } = useScroll();

  useEffect(() => {
    console.log("scrollY", scrollY.current);
  }, [scrollY]);

  const opacity = useTransform(scrollY, [475, 871], [0, 1]);

  return (
    <section className="w-full h-screen  flex flex-col justify-center items-center text-white bg-red-700">
      <motion.div
        className="w-2/3 flex justify-center items-center break-keep "
        ref={container}
        id="about_me"
        style={{ opacity }}
      >
        <Text css="text-5xl font-bold ">Career</Text>
      </motion.div>
    </section>
  );
};

export default AboutMe;
