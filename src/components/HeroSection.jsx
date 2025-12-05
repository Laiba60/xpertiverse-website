import React from "react";
import { HERO_CONTENT } from "../utils/constants/text";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen pt-40 px-4 sm:px-6 lg:px-20 py-20 flex flex-col lg:flex-row lg:items-center text-white overflow-hidden">

      {/* Background Video */}
      <video
        src="/videos/hero-bg5.mp4"
        autoPlay
        loop
        muted
        playsInline
        poster="/images/hero-placeholder.jpg"
        className="absolute inset-0 w-full h-full object-cover z-0 animate-slowZoom"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/80 z-1"></div>

      {/* Main Content */}
      <div className="w-full mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 relative z-2">

        {/* Left Content */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="w-full flex flex-col items-center text-center"
        >
          <p className="bg-linear-to-r from-[#9016B5] to-[#245EBD] bg-clip-text text-transparent mb-1 text-base font-medium border border-[#1E293B] rounded-2xl px-2.5 py-3">
            {HERO_CONTENT.badge}
          </p>

          <h1 className="font-semibold block text-white whitespace-nowrap text-[2rem] sm:text-[3rem] md:text-[2rem] lg:text-[3rem] xl:text-[5rem] 2xl:text-[6rem]">
            {HERO_CONTENT.heading1}
          </h1>

          <h1 className="font-semibold -mt-8 leading-tight sm:leading-tight lg:leading-relaxed bg-linear-to-r from-[#9016B5] to-[#245EBD] bg-clip-text text-transparent whitespace-nowrap text-[2rem] sm:text-[3rem] md:text-[2rem] lg:text-[3rem] xl:text-[5rem] 2xl:text-[6rem]">
            {HERO_CONTENT.heading2}
          </h1>

          <p className="text-gray-300 text-2xl mb-12 leading-relaxed max-w-4xl mx-auto">
            {HERO_CONTENT.description}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">

            {/* Primary Button with Glow */}
 <div className="relative inline-block overflow-hidden">
  <button
    className="
      relative z-10
      px-7 py-3 rounded-md text-xl font-medium
      bg-linear-to-r from-[#9016B5] to-[#245EBD]
      text-white
    "
  >
    Contact Us
  </button>

  {/* Moving Glow Line */}
  <div
    className="
      absolute top-0 left-0
      h-full w-2
      bg-white
      blur-xl
      animate-sweep
    "
  ></div>
</div>






            {/* Secondary Button with Glow */}
            <Link
              to="/aboutdetail"
              className="
                border border-[#9016B5]
                bg-linear-to-r from-[#9016B5] to-[#245EBD]
                bg-clip-text text-transparent
                transition px-7 py-3 rounded-md font-medium w-full sm:w-auto text-center text-xl
                hover:bg-linear-to-r hover:from-[#9016B5] hover:to-[#245EBD]
                hover:text-white
                animate-glowOutline
              "
            >
              {HERO_CONTENT.buttons.secondary}
            </Link>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
