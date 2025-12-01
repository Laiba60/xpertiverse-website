import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import InnovationFirst from "../assets/images/InnovationFirst.png";
import IntegrityTrust from "../assets/images/IntegrityTrust.png";
import Aiimg from "../assets/images/Aiimg.png";
import HappyClient from "../assets/images/HappyClient.jpg";
import HappyClient2 from "../assets/images/HappyClient2.jpg";
import HappyClient3 from "../assets/images/HappyClient3.jpg";
import HappyClient4 from "../assets/images/HappyClient4.jpg";
import Counter from "./counter.jsx";

const InnovatingFuture = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="bg-gray-900 text-white px-4 sm:px-6 lg:px-20 py-20 flex flex-col lg:flex-row lg:items-center"
    >
      <div className="container max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12">

        {/* Left Content */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="lg:w-1/2 flex flex-col items-start space-y-8"
        >
          <p className="text-[#49FBDF] mb-2 text-sm font-medium border border-[#1E293B] rounded-lg px-4 py-2">
            Who we are
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Innovating the Future
          </h1>
           <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            One Solution at a Time
          </h1>

          <p className="text-[#B2B3C7] text-lg">
            From advanced software development to robust cybersecurity, our team of
            experts is committed to providing tailored solutions.
          </p>

          {/* Values */}
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <img src={InnovationFirst} alt="Innovation First" className="h-10 w-10" />
              <div>
                <h3 className="text-xl font-semibold">Innovation First</h3>
                <p className="text-[#B2B3C7]">Constantly exploring new technologies</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <img src={IntegrityTrust} alt="Integrity & Trust" className="h-10 w-10" />
              <div>
                <h3 className="text-xl font-semibold">Integrity & Trust</h3>
                <p className="text-[#B2B3C7]">Building lasting partnerships with transparency.</p>
              </div>
            </div>
          </div>

          {/* Counters */}
          <div className="flex flex-col sm:flex-row justify-between max-w-md pt-8 gap-6">
            <div>
              <p className="text-4xl font-bold">
                <Counter to={350} start={isInView} />+
              </p>
              <p className="text-[#49FBDF]">Projects Completed</p>
            </div>

            <div>
              <p className="text-4xl font-bold">
                <Counter to={250} start={isInView} />+
              </p>
              <p className="text-[#49FBDF]">Satisfied Clients</p>
            </div>

            <div>
              <p className="text-4xl font-bold">
                <Counter to={95} start={isInView} />%
              </p>
              <p className="text-[#49FBDF]">Client Satisfaction</p>
            </div>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 }}
          className="lg:w-1/2 flex justify-center w-full relative"
        >
          <img
            src={Aiimg}
            alt="AI Illustration"
            className="w-full max-w-xl object-contain"
          />

          {/* Client Happy Box */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            className="absolute -bottom-10 sm:-bottom-16 md:-bottom-20 lg:-bottom-28 right-1 sm:right-4 md:right-10 lg:right-16 bg-transparent border border-gray-900 p-4 sm:p-5 rounded-2xl w-56 sm:w-64 md:w-72 shadow-none"
          >
            <div className="flex items-center mt-4">
              <span className="text-[#49FBDF] text-lg">★★★</span>
            </div>
            <p className="text-sm text-white font-semibold">10,000+ Client Happy</p>
            <div className="flex space-x-2 mt-3">
              <img src={HappyClient} className="h-9 w-9 rounded-full object-cover" />
              <img src={HappyClient2} className="h-9 w-9 rounded-full object-cover" />
              <img src={HappyClient3} className="h-9 w-9 rounded-full object-cover" />
              <img src={HappyClient4} className="h-9 w-9 rounded-full object-cover" />
            </div>
            <p className="text-xs text-[#B2B3C7] mt-2">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default InnovatingFuture;
