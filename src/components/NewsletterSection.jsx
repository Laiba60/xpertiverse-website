import React from "react";
import { NEWSLETTER_CONTENT } from "../utils/constants/text";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useNavigate } from "react-router-dom";

export default function NewsletterSection() {
  const navigate = useNavigate();
  const { heading, heading1, description, buttonText } = NEWSLETTER_CONTENT;

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const controls = useAnimation();

  React.useEffect(() => {
    if (inView) controls.start("visible");
  }, [inView, controls]);

  // Parent container animation (staggered)
  const parentVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  // Fade up animation for elements
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="bg-black py-20 px-4 md:px-10 flex justify-center relative overflow-hidden">
      
      {/* Floating particles */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-purple-500 rounded-full opacity-10 blur-2xl animate-float-slow"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-blue-500 rounded-full opacity-10 blur-2xl animate-float-slow"></div>

      {/* Gradient Border Wrapper */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={parentVariants}
        className="
          bg-gradient-to-r from-[#9016B5]/50 to-[#245EBD]/50
          p-[1.5px] rounded-3xl w-full max-w-6xl
        "
      >
        {/* Inner Black Box */}
        <div className="bg-black rounded-3xl py-20 px-6 md:px-16 text-center relative overflow-hidden">

          {/* Soft Glow Background */}
          <motion.div
            className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-[#9016B5]/30 to-[#245EBD]/30 blur-3xl opacity-20 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.2 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          />

          {/* Animated Content */}
          <motion.div
            variants={parentVariants}
            className="flex flex-col items-center gap-10"
          >
            {/* Heading + Description */}
            <motion.div variants={fadeUp} className="space-y-6 max-w-2xl">
              <motion.h2
                variants={fadeUp}
                whileHover={{ scale: 1.02, textShadow: "0px 0px 8px rgba(144,22,181,0.7)" }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight"
              >
                <span className="text-white">{heading}</span>
                <br />
                <span className="bg-gradient-to-r from-[#9016B5] to-[#245EBD] text-transparent bg-clip-text">
                  {heading1}
                </span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="text-gray-300 text-lg leading-relaxed"
              >
                {description}
              </motion.p>
            </motion.div>

            {/* Button with pulsing glow */}
            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-4 w-full justify-center">
  {/* Primary Button */}
  <div className="relative inline-block w-max">
    <motion.button
      whileHover={{ scale: 1.1, y: -5 }}
      whileTap={{ scale: 0.95 }}
      animate={{ y: [0, 2, 0] }}
      transition={{ repeat: Infinity, duration: 2 }}
      onClick={() => navigate("/contact")}
      className="relative z-10 px-10 py-4 text-xl font-semibold rounded-xl bg-gradient-to-r from-[#9016B5] to-[#245EBD] text-white shadow-lg shadow-[#9016B5]/20 hover:shadow-[#245EBD]/40 transition-all duration-300"
    >
      {buttonText}
    </motion.button>
  </div>

  {/* Secondary Button */}
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    onClick={() => navigate("/about")}
    className="px-10 py-4 text-xl font-semibold rounded-xl border border-[#9016B5] text-[#9016B5] hover:bg-[#9016B5] hover:text-white transition-all duration-300"
  >
    Explore Features
  </motion.button>
</motion.div>

          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
