import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";

import { FaLightbulb, FaHandshake } from "react-icons/fa";
import { FaHandsHoldingCircle } from "react-icons/fa6";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { IoMdTrophy } from "react-icons/io";

import { ABOUT_INNOVATION } from "../utils/constants/text";
import Counter from "./Counter";

// Gradient Icon wrapper
const GradientIcon = ({ Icon, size = 32, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" className={className}>
    <defs>
      <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#9016B5" />
        <stop offset="100%" stopColor="#245EBD" />
      </linearGradient>
    </defs>
    <Icon width={size} height={size} fill="url(#iconGradient)" stroke="url(#iconGradient)" strokeWidth={1.5} />
  </svg>
);

// ICON MAP
const mainIcons = {
  FaLightbulb: <GradientIcon Icon={FaLightbulb} size={50} />,
  FaHandshake: <GradientIcon Icon={FaHandshake} size={50} />,
};

const miniIcons = {
  FaHandsHoldingCircle: <GradientIcon Icon={FaHandsHoldingCircle} size={24} />,
  BsFillPersonCheckFill: <GradientIcon Icon={BsFillPersonCheckFill} size={24} />,
  VscWorkspaceTrusted: <GradientIcon Icon={VscWorkspaceTrusted} size={24} />,
  IoMdTrophy: <GradientIcon Icon={IoMdTrophy} size={24} />,
};

const CombinedAboutInnovation = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-150px" });

  return (
    <section ref={sectionRef} className="bg-black text-white px-4 sm:px-6 lg:px-20 py-24">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease: "easeOut" }}
        className="text-center max-w-3xl mx-auto mb-16"
      >
        <button className="bg-gradient-to-r from-[#9016B5] to-[#245EBD] bg-clip-text text-transparent border border-[#1E293B] text-sm xl:text-xl font-semibold rounded-lg px-5 py-1">
          {ABOUT_INNOVATION.badge}
        </button>

        <h2 className="text-4xl lg:text-7xl whitespace-nowrap font-bold leading-tight mt-4">
          <span className="text-white">{ABOUT_INNOVATION.headingWhite}</span>
          <br />
          <span className="bg-gradient-to-r from-[#9016B5] to-[#245EBD] bg-clip-text text-transparent">
            {ABOUT_INNOVATION.headingGradient}
          </span>
        </h2>

        <p className="text-gray-300 text-lg mt-4">{ABOUT_INNOVATION.description}</p>
      </motion.div>

      {/* CONTENT */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="flex justify-center"
        >
          <img
            src="/images/about-us3.jpg"
            alt="Innovation"
            className="w-full max-w-md h-80 object-cover lg:max-w-lg rounded-xl shadow-lg"
          />
        </motion.div>

        {/* TEXT / FEATURES */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: "easeOut" }}
          className="space-y-8 text-left"
        >
          {/* MAIN FEATURES */}
          <div className="space-y-4">
            {ABOUT_INNOVATION.features.map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                {mainIcons[item.icon] || <span className="w-12 h-12 inline-block" />}
                <div>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* MINI FEATURES */}
          <div className="grid grid-cols-2 gap-4 text-gray-300">
            {ABOUT_INNOVATION.miniFeatures.map((item, i) => (
              <div key={i} className="flex items-center gap-2 font-semibold">
                {miniIcons[item.icon] || <span className="w-6 h-6 inline-block" />}
                <span>{item.text}</span>
              </div>
            ))}
          </div>

          {/* COUNTERS */}
          <div className="grid grid-cols-3 gap-8 pt-4">
            {ABOUT_INNOVATION.counters.map((item, i) => (
              <div key={i} className="flex flex-col items-start">
                <p className="text-4xl font-bold">
                  <Counter to={item.value} start={isInView} />
                  {item.isPercent ? "%" : "+"}
                </p>
                <p className="bg-gradient-to-r from-[#9016B5] to-[#245EBD] bg-clip-text text-transparent">
                  {item.label}
                </p>
              </div>
            ))}
          </div>

          {/* BUTTON */}
          <button
            className="cursor-pointer px-6 py-2 rounded-md w-full sm:w-auto text-center
              transition-all duration-300
              bg-gradient-to-r from-[#9016B5] to-[#245EBD] text-white border border-transparent
              hover:bg-transparent hover:border-[#9016B5]
              hover:text-transparent hover:bg-clip-text text-lg hover:bg-gradient-to-r hover:from-[#9016B5] hover:to-[#245EBD]"
            onClick={() => navigate("/aboutdetail")}
          >
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default CombinedAboutInnovation;
