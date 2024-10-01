/** @type {import('tailwindcss').Config} */

/**
 * theme 객체 생성 = 기존 tailwind code 는 사용하지 못하고 Custom
 * theme .extend 객체 생성 = 기존 tailwind code 사용 + Custom 추가
 */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        kakao: "카카오 OTF",
      },
      colors: {
        "regal-black": "#202124",
        "regal-red": "#500103",
        "regal-light-red": "#8a0609",
      },
      height: {
        header: "6rem",
      },
      width: {
        "intro-text": "54rem",
      },
    },
  },
  plugins: [],
};
