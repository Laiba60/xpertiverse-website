import React from "react";
import { motion } from "framer-motion";
import { FaUserTie, FaIndustry, FaClock, FaTools } from "react-icons/fa";

export default function ProjectOverviewSection() {
  return (
    <section className="w-full bg-black text-white py-20 px-4 sm:px-6 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-14"
      >

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="lg:col-span-2 space-y-6"
        >

          {/* Images Row */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8"
          >
            <img
              src="/images/testimonials.jpg"
              alt="VR Technician"
              className="rounded-xl w-full h-64 sm:h-72 md:h-80 object-cover"
            />

            <img
              src="/images/project2.jpg"
              alt="Data Center Engineer"
              className="rounded-xl w-full h-64 sm:h-85 md:h-100 object-cover"
            />
          </motion.div>

          {/* Description Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 leading-relaxed max-w-4xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold"
          >
            E-Commerce Mobile App for Retail Chain
          </motion.h2>

          {/* Detailed Description */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-gray-300 leading-relaxed max-w-4xl"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </motion.p>

          {/* Innovative Solutions Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
          >

            {/* Left Side */}
            <div>
              <h3 className="text-3xl font-semibold mb-6">
                Innovative Solutions for a Smarter Future
              </h3>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <FaTools className="text-[#DC2828] text-3xl" />
                  <div>
                    <h4 className="text-xl font-semibold mb-1">Innovation First</h4>
                    <p className="text-gray-300">Constantly exploring new technologies.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <FaUserTie className="text-[#DC2828] text-3xl" />
                  <div>
                    <h4 className="text-xl font-semibold mb-1">Integrity & Trust</h4>
                    <p className="text-gray-300">
                      Building lasting partnerships with transparency.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div>
              <h3 className="text-3xl font-semibold mb-6">
                Innovating the Future, One Solution at a Time
              </h3>

              <p className="text-gray-300 leading-relaxed">
                From advanced software development to robust cybersecurity, our expertise ensures you 
                stay ahead in a rapidly evolving digital world.
              </p>
            </div>

          </motion.div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>
        </motion.div>

        {/* RIGHT CARD SECTION */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-[#0f1b2d] p-8 rounded-xl shadow-xl border border-gray-700 h-fit w-full"
        >
          <h3 className="text-2xl font-semibold mb-6">Project Overview</h3>

          <p className="text-gray-300 mb-6 leading-relaxed">
            The client was facing issues with slow system performance, data security risks,
            and scalability challenges.
          </p>

          <div className="space-y-6">

            <div>
              <div className="flex items-center gap-3 text-[#DC2828] mb-1">
                <FaUserTie /> <span className="font-medium">Client:</span>
              </div>
              <p className="text-gray-300 ml-7">FinCore Solutions</p>
            </div>

            <div>
              <div className="flex items-center gap-3 text-[#DC2828] mb-1">
                <FaIndustry /> <span className="font-medium">Industry:</span>
              </div>
              <p className="text-gray-300 ml-7">Finance Technology</p>
            </div>

            <div>
              <div className="flex items-center gap-3 text-[#DC2828] mb-1">
                <FaClock /> <span className="font-medium">Duration:</span>
              </div>
              <p className="text-gray-300 ml-7">6 Months</p>
            </div>

            <div>
              <div className="flex items-center gap-3 text-[#DC2828] mb-1">
                <FaTools /> <span className="font-medium">Services Provided:</span>
              </div>
              <p className="text-gray-300 ml-7">
                Cloud Migration, Cybersecurity, IT Consulting
              </p>
            </div>

          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
