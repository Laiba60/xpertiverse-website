import React from "react";
import { BLOG_CONTENT } from "../utils/constants/text";
import { AppIcons } from "../components/ui/AppIcons";
import { motion } from "framer-motion";

export default function BlogSection() {
  const { heading, posts } = BLOG_CONTENT;
  
  // Replace with your actual calendar icon from AppIcons
  const CalendarIcon = AppIcons.Calendar || AppIcons.Fb;

  return (
    <section className="w-full py-20 px-4 sm:px-6 lg:px-20 bg-[#0A0F1C]">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-12 px-2">
          <p className="text-[#4EE1A0] text-sm mb-2">{heading.preTitle}</p>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            {heading.title}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              className="rounded-2xl border border-white/10 overflow-hidden shadow-lg bg-[#0D1528]"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Image */}
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-56 sm:h-60 md:h-64 object-cover"
              />

              <div className="p-6 md:p-8">
                {/* Category */}
                <span className="text-xs bg-[#4EE1A0]/10 text-[#4EE1A0] px-3 py-1 rounded-md">
                  {post.category}
                </span>

                {/* Date */}
                <div className="flex items-center gap-2 mt-4 text-[#4EE1A0]">
                  <CalendarIcon size={16} />
                  <p className="text-sm">{post.date}</p>
                </div>

                {/* Title */}
                <h3 className="text-lg md:text-xl font-semibold text-white mt-4 leading-snug">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mt-3 leading-relaxed">
                  {post.desc}
                </p>

                {/* Button */}
                <button className="mt-6 bg-linear-to-r from-blue-600 to-indigo-600 
                                   text-white px-5 py-2 rounded-md font-medium 
                                   hover:cursor-pointer transition w-full sm:w-auto">
                  Read More
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
