import React from "react";
import Text from "../atoms/Text";
import { motion, useScroll, useTransform } from "framer-motion";

const IntroSection = ({ container }) => {
  const { scrollY } = useScroll();

  const opacityIntro = useTransform(scrollY, [0, 300, 600], [0, 1, 0]);
  const opacityAbout = useTransform(scrollY, [600, 900, 1200], [0, 1, 0]);
  const opacityMe = useTransform(scrollY, [1200, 1500, 2000], [0, 1, 1]);
  // const opacityBtn = useTransform(scrollY);

  return (
    <section
      className="w-full h-[150rem] relative flex flex-col justify-center items-center text-white"
      ref={container}
      id="intro"
    >
      <motion.div
        className="w-intro-text flex flex-col fixed top-2/4 justify-center items-center break-keep"
        style={{ opacity: opacityIntro }}
      >
        <Text css="text-9xl">안녕하세요.</Text>
        <Text css="font-thin">FE개발자 신영재입니다.</Text>
      </motion.div>

      <motion.div
        className="w-intro-text flex flex-col fixed top-2/4 justify-center items-center break-keep"
        ref={container}
        id="about_me"
        style={{ opacity: opacityAbout }}
      >
        <Text css="text-9xl">탄탄한 기본이</Text>
        <Text>성장의 한계를 높일 수 있다.</Text>
      </motion.div>
      <motion.div
        className="w-intro-text flex flex-col sticky top-2/4 justify-center items-center break-keep "
        ref={container}
        id="about_me"
        style={{ opacity: opacityMe }}
      >
        <Text css="text-9xl">로그인 로직에</Text>
        <Text css="font-thin">관심이 많은 개발자 신영재입니다.</Text>
        <section className="h-24 flex justify-center items-center ">
          <button className="text-gray-50 h-fit border-2 rounded-md">
            궁금하신가요 ?
          </button>
        </section>
      </motion.div>
    </section>
  );
};

export default IntroSection;
