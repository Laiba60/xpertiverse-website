import React, { useRef } from "react";
import { FaLightbulb, FaHandshake } from "react-icons/fa";
import { BsFillPersonCheckFill } from "react-icons/bs";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { IoMdTrophy } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { AiOutlineCheck } from "react-icons/ai";
import Aiimg from "../assets/images/about1.png";
import Aboutus from "../assets/images/about2.png";
import HappyClient from "../assets/images/team1.jpg";
import HappyClient2 from "../assets/images/team2.jpg";
import HappyClient3 from "../assets/images/team3.webp";
import HappyClient4 from "../assets/images/team4.webp";
import Counter from "./Counter";
const CombinedAboutInnovation = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-150px" });
  return (
    <section
      ref={sectionRef}
      className="bg-black text-white px-4 sm:px-6 lg:px-20 py-24"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative flex justify-center"
        >
          <img
            src={Aiimg}
            alt="AI Illustration"
            className="w-full max-w-md object-contain"
          />
          <img
            src={Aboutus}
            className="absolute -top-20 left-6 w-40 opacity-80"
          />
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.4 }}
            className="absolute bottom-0 right-0 bg-black/40 backdrop-blur-xl border border-gray-700 p-4 rounded-2xl w-64"
          >
            <div className="flex text-xl items-center text-[#DC2828]">★★★</div>
            <p className="text-white font-semibold mt-2">10,000+ Client Happy</p>
            <div className="flex space-x-2 mt-3">
              <img src={HappyClient} className="h-9 w-9 object-cover rounded-full" />
              <img src={HappyClient2} className="h-9 w-9 object-cover rounded-full" />
              <img src={HappyClient3} className="h-9 w-9 object-cover rounded-full" />
              <img src={HappyClient4} className="h-9 w-9 object-cover rounded-full" />
            </div>
            <p className="text-xs text-gray-400 mt-2">
              Lorem ipsum dolor sit amet, consectetur.
            </p>
          </motion.div>
        </motion.div>
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
          className="space-y-8"
        >
          <button className="text-[#DC2828] border border-[#1E293B] rounded-lg px-5 py-1">
            About Us
          </button>
          <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            <span className="text-white">
            Innovating the Future
            </span><br />
          
           <span class="bg-linear-to-r from-[#F56716] to-[#EA4920] text-transparent bg-clip-text">with Trust & Excellence</span>
          </h2>
                    <p className="text-gray-300 text-lg max-w-xl">
            From advanced software development to robust cybersecurity, we help
            clients transform challenges into opportunities with innovation and integrity.
          </p>
          <div className="space-y-6 pt-2">
            <div className="flex items-center gap-4">
               <FaLightbulb className="h-10 w-10 text-[#DC2828]" />
              <div>
                <h3 className="text-xl font-semibold">Innovation First</h3>
                <p className="text-gray-400">Constantly exploring new technologies.</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <FaHandshake className="h-10 w-10 text-[#DC2828]" />
              <div>
                <h3 className="text-xl font-semibold">Integrity & Trust</h3>
                <p className="text-gray-400">We build lasting partnerships.</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 text-gray-300 pt-2">
            <div className="flex items-center gap-2 font-semibold">
              <FaHandshake className="text-red-500 text-xl" />
              Innovation First
            </div>
            <div className="flex items-center gap-2 font-semibold">
              <BsFillPersonCheckFill className="text-red-500 text-xl" />
              Client-Centric
            </div>
            <div className="flex items-center gap-2 font-semibold">
              <VscWorkspaceTrusted className="text-red-500 text-xl" />
              Integrity & Trust
            </div>
            <div className="flex items-center gap-2 font-semibold">
              <IoMdTrophy className="text-red-500 text-xl" />
              Excellence
            </div>
          </div>
          <div className="grid grid-cols-3 gap-8 pt-8">
            <div>
              <p className="text-4xl font-bold">
                <Counter to={350} start={isInView} />+
              </p>
              <p className="text-[#DC2828]">Projects Completed</p>
            </div>
            <div>
              <p className="text-4xl font-bold">
                <Counter to={250} start={isInView} />+
              </p>
              <p className="text-[#DC2828]">Satisfied Clients</p>
            </div>
            <div>
              <p className="text-4xl font-bold">
                <Counter to={95} start={isInView} />%
              </p>
              <p className="text-[#DC2828]">Client Satisfaction</p>
            </div>
          </div>

          
          <div className="pt-3">
            <button className="px-6 py-3 bg-[#DC2828]
                text-white hover:bg-transparent border border-[#DC2828] hover:text-[#DC2828] hover:cursor-pointer 
                transition rounded-lg font-semibold"
             onClick={() => navigate("/aboutdetail")}>
              Learn More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CombinedAboutInnovation;
