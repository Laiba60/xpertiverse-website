import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import videobgimg from "../assets/images/videobgimg.jpg";

const TechnologySolutions = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <div
      ref={sectionRef}
      className="relative w-full min-h-[90vh] sm:min-h-[95vh] overflow-hidden flex items-center justify-center px-4 sm:px-6 lg:px-20"
    >
      {/* Background */}
      <img
        src={videobgimg}
        alt="Technology Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative text-center max-w-full sm:max-w-4xl mx-auto px-2 space-y-4 sm:space-y-6">
        <motion.span
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="px-4 sm:px-6 py-1 sm:py-2 text-[#49FBFD] rounded-full border border-[#1E293B] text-xs sm:text-sm backdrop-blur-sm inline-block"
        >
          Technology Solutions
        </motion.span>

        <motion.h1
          initial={{ y: 60, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.2 }}
          className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-snug mt-4 sm:mt-6"
        >
          Empowering Your Business Through Technology
        </motion.h1>

        <motion.p
          initial={{ y: 60, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.4 }}
          className="text-gray-300 mt-4 sm:mt-6 text-sm sm:text-base md:text-lg"
        >
          Innovative IT solutions to help your business grow, stay secure, and succeed in the digital era.
        </motion.p>

        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.6 }}
          className="mt-6 sm:mt-10 flex justify-center"
        >
          <button className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-linear-to-r from-blue-500 to-teal-400 flex items-center justify-center shadow-xl hover:scale-105 transition-transform">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              className="w-8 h-8 sm:w-10 sm:h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-4.586-2.724A1 1 0 009 9.277v5.446a1 1 0 001.166.833l4.586-2.724a1 1 0 000-1.664z"
              />
            </svg>
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default TechnologySolutions;
