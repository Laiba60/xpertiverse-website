import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { HERO_TECH_CONTENT } from "../utils/constants/text";

export default function HeroTechSection() {
  const { sectionTag, heading, description, buttons, stats } = HERO_TECH_CONTENT;

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });
  const [startCount, setStartCount] = useState(false);

  useEffect(() => {
    if (inView) setStartCount(true);
  }, [inView]);

  return (
    <section
      ref={ref}
      className="relative w-full min-h-[550px] md:h-[600px] px-4 sm:px-6 lg:px-20  bg-[#0B1220] text-white overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src="/images/herotech.png"
          className="w-full h-full object-cover opacity-40"
          alt="background"
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative max-w-7xl mx-auto h-full flex flex-col md:flex-row items-center md:items-center justify-between px-6 py-16 gap-14">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl space-y-6 text-center md:text-left"
        >
          <button className="px-6 py-2 border border-[#1E293B] bg-[#0F172A]/60 rounded-lg text-[#DC2828] text-sm mx-auto md:mx-0">
            {sectionTag}
          </button>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-300 leading-snug">
            {heading.split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </h1>

          <p className="text-gray-200 text-sm sm:text-base">{description}</p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
            <button className="px-8 py-3 rounded-lg cursor-pointer
    bg-linear-to-r from-red-600 to-orange-500
    text-white border border-transparent
    hover:border-[#DC2828] hover:text-[#DC2828]
    hover:bg-none transition font-semibold">
              {buttons.primary}
            </button>
            <button className="px-8 py-3 rounded-lg border cursor-pointer border-[#DC2828] text-[#DC2828] hover:bg-linear-to-r from-red-600 to-orange-500 hover:text-black transition font-semibold">
              {buttons.secondary}
            </button>
          </div>
        </motion.div>

        {/* RIGHT STATS */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full md:w-auto text-center md:text-left"
        >
          {stats.map((item, i) => {
            const numericValue = parseInt(item.value.replace(/\D/g, ""), 10);
            const symbol = item.value.replace(/\d/g, "");

            return (
              <div
                key={i}
                className="p-6 backdrop-blur-md rounded-xl border border-white/10 flex flex-col items-center md:items-start"
              >
                <h2 className="text-4xl font-semibold">
                  {startCount ? <CountUp end={numericValue} duration={2} /> : 0}
                  {symbol}
                </h2>
                <p className="text-[#DC2828] mt-1">{item.label}</p>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
