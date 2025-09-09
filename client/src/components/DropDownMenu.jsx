import React from "react";
import { FiArrowRight } from "react-icons/fi";

const DropdownMenu = ({ items }) => {
  if (!items || !Array.isArray(items)) return null;

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-12 flex gap-6 max-w-[90vw]">
      {items.map((item, index) => (
        <a
          key={index}
          href="#"
          className={`flex flex-col rounded-2xl p-10 transition-all duration-300 hover:scale-105 ${item.bgColor}`}
          style={{ width: "280px", height: "200px" }}
        >
          <h3 className="text-4xl font-extrabold mb-2">
            {item.text}
            <span className="font-extrabold">.</span>
          </h3>
          <p className="text-base text-black leading-snug">
            {item.subtext}
          </p>

          
          <div className="flex justify-end mt-4 text-xl">
            <FiArrowRight />
          </div>
        </a>
      ))}
    </div>
  );
};

export default DropdownMenu;
