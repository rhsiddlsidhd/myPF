import React from "react";

const Menu = () => {
  const menuTab = ["About Me", "Skill", "Archiving", "Project", "Career"];
  return (
    <div className="flex w-3/5 text-xl text-white font-bold whitespace-nowrap">
      {menuTab.map((item) => {
        return (
          <div
            key={item}
            className="h-full flex-1 flex justify-center items-center "
          >
            {/* <div className="cursor-pointer hover:text-regal-light-red hover:duration-500 hover:border-b-2 "> */}
            <div className="relative  hover:text-gray-400 cursor-pointer transition-all ease-in-out before:transition-[width] before:ease-in-out before:duration-700 before:absolute before:bg-gray-400 before:origin-center before:h-[1px] before:w-0 hover:before:w-[50%] before:bottom-0 before:left-[50%] after:transition-[width] after:ease-in-out after:duration-700 after:absolute after:bg-gray-400 after:origin-center after:h-[1px] after:w-0 hover:after:w-[50%] after:bottom-0 after:right-[50%]">
              {item}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Menu;
