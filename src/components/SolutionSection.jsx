import React from "react";
import { motion } from "framer-motion";
import { SOLUTIONS_CONTENT } from "../utils/constants/text";

export default function SolutionsSection() {
  const { leftFeatures, centerImage, rightText, sectionTitle } = SOLUTIONS_CONTENT;

  return (
    <section className="w-full bg-[#0B0B0F] py-20 px-4 sm:px-6 lg:px-20 flex flex-col items-center justify-center">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row gap-16 lg:gap-20 items-start">

        {/* Left: Features */}
        <div className="flex flex-col gap-8 w-full lg:w-1/3 mt-6">
          <motion.h2
            className="text-3xl md:text-4xl font-semibold text-gray-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            {sectionTitle}
          </motion.h2>

          {leftFeatures.map((feature, i) => (
            <motion.div
              key={i}
              className="flex gap-4 items-start"
              style={{ marginTop: i % 2 === 0 ? "20px" : "0px" }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-semibold text-gray-200">{feature.title}</h3>
                <p className="text-gray-400 max-w-sm">{feature.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Center Image */}
        <motion.div
          className="w-full lg:w-1/3 flex justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <img
            src={centerImage}
            alt="dashboard graphic"
            className="rounded-xl w-full max-w-sm md:max-w-md lg:max-w-full h-auto"
          />
        </motion.div>

        {/* Right Text */}
        <motion.div
          className="flex flex-col gap-6 w-full lg:w-1/3 mt-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-200 leading-tight">
            {rightText.heading}
          </h2>

          <p className="text-gray-400 max-w-sm">{rightText.desc}</p>
        </motion.div>

      </div>
    </section>
  );
}
