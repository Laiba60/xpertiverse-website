import React from "react";
import { motion } from "framer-motion";
import { TEAM_CONTENT } from "../utils/constants/text";
import { AppIcons } from "./ui/AppIcons";
import { useNavigate } from "react-router-dom";

export default function AllTeamMembers() {
  const { teamMembers } = TEAM_CONTENT;
  const navigate = useNavigate();

  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const { Fb, Twitter, Pinterest } = AppIcons;

  return (
    <section className="w-full bg-[#0B0F19] text-white py-24 px-4 sm:px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">

        {/* Back Button */}
        <motion.div
          className="mb-10"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 text-sm bg-linear-to-r from-[#9016B5] to-[#245EBD] text-white rounded-lg hover:opacity-80 transition"
          >
            ← Back
          </button>
        </motion.div>

        {/* Page Heading */}
        <motion.h1
          className="text-4xl md:text-5xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.6 } }}
        >
          <span className="text-white">Meet Our</span>
          <span className="bg-linear-to-r from-[#9016B5] to-[#245EBD] text-transparent bg-clip-text">
            {" "}Team
          </span>
        </motion.h1>

        {/* Team Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-3xl border border-[#2A3450] bg-[#131A26] overflow-hidden shadow-xl"
            >

              {/* Image + Overlay */}
              <div className="relative h-80 p-4 w-full overflow-hidden group text-center">
                
                {/* Image */}
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-3xl"
                />

                {/* Overlay */}
                <div
                  className="
                    absolute bottom-0 left-0 right-0 
                    bg-black/50 
                    h-22 group-hover:h-40
                    transition-all duration-700 
                    flex flex-col justify-end
                    group-hover:pb-10
                  "
                >
                  <h3 className="text-xl font-semibold transition-all duration-700 group-hover:-translate-y-2">
                    {member.name}
                  </h3>

                  {/* Role text gradient */}
                  <p className="text-transparent bg-linear-to-r from-[#9016B5] to-[#245EBD] bg-clip-text text-sm transition-all duration-700 group-hover:-translate-y-2">
                    {member.role}
                  </p>

                  {/* Social Icons */}
                  <div className="flex gap-4 mt-3 opacity-0 justify-center translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                    <Fb className="text-[#0B0F19] text-xl cursor-pointer p-2 bg-linear-to-r from-[#9016B5] to-[#245EBD] rounded-full" />
                    <Twitter className="text-[#0B0F19] text-xl cursor-pointer p-2 bg-linear-to-r from-[#9016B5] to-[#245EBD] rounded-full" />
                    <Pinterest className="text-[#0B0F19] text-xl cursor-pointer p-2 bg-linear-to-r from-[#9016B5] to-[#245EBD] rounded-full" />
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
