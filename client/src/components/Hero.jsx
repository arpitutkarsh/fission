// Hero.jsx
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import { useDarkMode } from "../Context/Context.jsx";

function Hero() {
  const { isDark } = useDarkMode();

  // Light mode logos
  const logosLight = [
    "https://leo9studio.com/img/logo-l-14.svg",
    "https://leo9studio.com/img/logo-l-11.svg",
    "https://leo9studio.com/img/logo-l-12.svg",
    "https://leo9studio.com/img/logo-l-4.svg",
    "https://leo9studio.com/img/logo-l-3.svg",
    "https://leo9studio.com/img/logo-l-15.svg",
    "https://leo9studio.com/img/logo-l-9.svg",
    "https://leo9studio.com/img/logo-l-5.svg",
    "https://leo9studio.com/img/logo-l-6.svg",
    "https://leo9studio.com/img/logo-l-16.svg",
    "https://leo9studio.com/img/logo-l-1.svg",
  ];

  // Dark mode logos
  const logosDark = [
    "https://leo9studio.com/img/logo-d-14.svg",
    "https://leo9studio.com/img/logo-d-11.svg",
    "https://leo9studio.com/img/logo-d-12.svg",
    "https://leo9studio.com/img/logo-d-4.svg",
    "https://leo9studio.com/img/logo-d-3.svg",
    "https://leo9studio.com/img/logo-d-15.svg",
    "https://leo9studio.com/img/logo-d-9.svg",
    "https://leo9studio.com/img/logo-d-5.svg",
    "https://leo9studio.com/img/logo-d-6.svg",
    "https://leo9studio.com/img/logo-d-16.svg",
    "https://leo9studio.com/img/logo-d-1.svg",
  ];

  //const logos = isDark ? logosDark : logosLight;
  const logos = isDark? logosDark : logosLight

  return (
    <section
      className={`flex flex-col items-center justify-between min-h-screen px-8 md:px-16 lg:px-24 py-4 transition-colors duration-500 ${
        isDark ? "bg-black text-gray-300" : "bg-white text-black"
      }`}
    >
      <div className="flex flex-col md:flex-row items-center justify-between w-full flex-grow">
        {/* Left Animated SVG */}
        <div className="flex-1 flex items-center justify-center mb-6 md:mb-0">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
            className="w-72 h-72"
          >
            <motion.path
              d="M50 150 C 70 100, 130 100, 150 150 Q 160 160, 140 170 Q 100 190, 60 170 Q 40 160, 50 150 Z"
              fill="url(#gradient)"
              stroke={isDark ? "#fff" : "#000"}
              strokeWidth="2"
              initial={{ pathLength: 0, opacity: 0, scale: 0.9, rotate: 0 }}
              animate={{
                pathLength: [0, 1, 0.8, 1],
                opacity: [0.6, 1, 0.8, 1],
                scale: [0.95, 1.05, 0.95],
                rotate: [0, 2, -2, 0],
              }}
              transition={{
                duration: 8,
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "mirror",
              }}
            />

            <defs>
              <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#ec4899">
                  <animate
                    attributeName="offset"
                    values="0;1;0"
                    dur="6s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop offset="50%" stopColor="#8b5cf6">
                  <animate
                    attributeName="offset"
                    values="0.3;0.7;0.3"
                    dur="6s"
                    repeatCount="indefinite"
                  />
                </stop>
                <stop offset="100%" stopColor="#6366f1">
                  <animate
                    attributeName="offset"
                    values="0.6;1;0.6"
                    dur="6s"
                    repeatCount="indefinite"
                  />
                </stop>
              </linearGradient>
            </defs>
          </motion.svg>
        </div>

        {/* Right Side - Text */}
        <div className="flex-1 text-center w-max md:text-left md:ml-12">
          {["Design", "Transform", "Accelerate"].map((word, i) => (
            <motion.h1
              key={word}
              custom={i}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3, duration: 0.6, ease: "easeOut" }}
              className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
            >
              {word}
            </motion.h1>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.6 }}
            className="text-lg md:text-xl lg:text-2xl mt-4 font-bold"
          >
            Redefining user experiences through <br /> Behavioural Science & AI
          </motion.div>
        </div>
      </div>

      
      <div
        className={`flex flex-col md:flex-row items-center justify-between w-full mt-2 px-8 md:px-16 lg:px-24 py-4 rounded-3xl transition-colors duration-500 ${
          isDark ? "bg-black text-white" : "bg-white text-black"
        }`}
      >
        {/* Left Side Text */}
        <div className="flex-1 md:pr-12 mb-4 md:mb-0">
          <h2 className="text-2xl md:text-3xl lg:text-l font-extrabold leading-snug">
            Your trusted{" "}
            <span className="text-indigo-500">UI/UX Design</span> agency
          </h2>
          <div className="w-20 h-1 bg-indigo-500 mt-3 rounded-full"></div>
        </div>

        {/* Right Side Marquee */}
        <div className="flex-1 overflow-hidden">
          <Marquee gradient={false} speed={50}>
            {logos.map((src, idx) => (
              <motion.img
                key={idx}
                src={src}
                alt={`logo-${idx}`}
                className="h-8 w-auto mx-6 object-contain"
                whileHover={{ scale: 1.2, rotate: 3 }}
                transition={{ type: "spring", stiffness: 200 }}
              />
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

export default Hero;
