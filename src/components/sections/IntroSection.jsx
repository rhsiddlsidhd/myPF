import React from "react";
import Text from "../atoms/Text";
import { motion, useScroll, useTransform } from "framer-motion";

import TextWrapper from "./../atoms/TextWrapper";

const IntroSection = ({ container }) => {
  const { scrollY } = useScroll();
  const opacityBtn = useTransform(scrollY, [0, 1200, 1500], [1, 1, 0]);
  const opacityIntro = useTransform(scrollY, [0, 300, 600], [0, 1, 0]);
  const opacityAbout = useTransform(scrollY, [600, 900, 1200], [0, 1, 0]);
  const opacityMe = useTransform(scrollY, [1200, 1500], [0, 1]);

  const sectionData = [
    {
      text: ["안녕하세요.", "FE개발자 신영재입니다."],
      opacity: opacityIntro,
      isSticky: false,
    },
    {
      text: ["탄탄한 기본이", "성장의 한계를 높일 수 있다."],
      opacity: opacityAbout,
      isSticky: false,
    },
    {
      text: ["로그인 로직에", "관심이 많은 개발자 신영재입니다."],
      opacity: opacityMe,
      isSticky: true,
    },
  ];

  return (
    <section
      className="w-full h-[150rem] relative flex flex-col justify-center items-center text-white"
      ref={container}
      id="intro"
    >
      <motion.div
        style={{ opacity: opacityBtn }}
        className="h-16 flex fixed top-1/4 justify-center items-center"
      >
        <motion.div
          animate={{ y: 15 }}
          transition={{
            repeat: Infinity,
            duration: 2,
          }}
          className="text-gray-50 h-fit  rounded-md"
        >
          스크롤 해주세요 ↓ ↓ ↓
        </motion.div>
      </motion.div>
      {sectionData.map((item, i) => {
        const { text, opacity, isSticky } = item;

        return (
          <TextWrapper opacityValues={opacity} isSticky={isSticky} key={i}>
            <Text css="text-9xl">{text[0]}</Text>
            <Text css="font-thin">{text[1]}</Text>
            {isSticky && (
              <section className="h-24 flex justify-center items-center ">
                <button className="text-gray-50 h-fit border-2 rounded-md">
                  궁금하신가요 ?
                </button>
              </section>
            )}
          </TextWrapper>
        );
      })}
    </section>
  );
};

export default IntroSection;
