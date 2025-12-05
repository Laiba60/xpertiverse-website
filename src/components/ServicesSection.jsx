import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { SERVICES_CONTENT } from "../utils/constants/text";

// Gradient Icon wrapper
const GradientIcon = ({ Icon, size = 40 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
    <defs>
      <linearGradient id="serviceIconGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#9016B5" />
        <stop offset="100%" stopColor="#245EBD" />
      </linearGradient>
    </defs>
    <Icon width={size} height={size} fill="url(#serviceIconGradient)" stroke="url(#serviceIconGradient)" strokeWidth={1.5} />
  </svg>
);

export default function ServicesSection() {
  const { sectionTag, heading, heading1, description, cards } = SERVICES_CONTENT;
  const navigate = useNavigate();

  return (
    <section className="w-full bg-black text-white py-20 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center space-y-12">

        {/* TOP TEXT */}
        <motion.div
          className="space-y-6 max-w-3xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <button className="bg-gradient-to-r from-[#9016B5] to-[#245EBD] bg-clip-text text-transparent border border-[#1E293B] text-sm xl:text-xl font-semibold rounded-lg px-6 py-2">
            {sectionTag}
          </button>
          <h2 className="text-4xl sm:text-7xl whitespace-nowrap font-bold leading-tight">
            <span className="text-white">{heading}</span><br />
            <span className="bg-gradient-to-r from-[#9016B5] to-[#245EBD] text-transparent bg-clip-text">
              {heading1}
            </span>
          </h2>
          <p className="text-gray-300 max-w-xl mx-auto">{description}</p>
        </motion.div>

        {/* CARDS */}
        <div className="flex flex-wrap w-full lg:w-4/5 gap-6 justify-center">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="p-10 rounded-xl border border-[#1E293B] hover:border-[#9016B5] transition shadow-lg shadow-black/20 flex flex-col justify-between w-full sm:w-[45%] lg:w-[30%]"
              style={{ height: "350px" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ scale: 1.03 }}
            >
              <div>
                <div className="mb-6 flex justify-center">
                  <GradientIcon Icon={card.icon} size={50} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-center text-white">{card.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed text-center">{card.desc}</p>
              </div>

              <button
                onClick={() => navigate(`/service/${i}`)}
                className="mt-6 px-4 py-2 text-sm font-semibold rounded-lg 
                  bg-gradient-to-r from-[#9016B5] to-[#245EBD] text-white border border-transparent
                  hover:bg-transparent hover:border-[#9016B5] hover:text-transparent hover:bg-clip-text
                  transition"
              >
                View Details
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
