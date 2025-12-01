import React from 'react'
import { IoIosArrowForward } from "react-icons/io";

const Common = ({
  tagline = "Technology & IT Solutions",
  title = "About Us",
  breadcrumb = "About Us",
  description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}) => {
  return (
    <div className="w-full flex flex-col justify-center items-center min-h-screen bg-[#080F20] space-y-4 sm:space-y-6 px-4 sm:px-6 lg:px-20">
      
      {/* Tagline */}
      <h2 className="text-xs sm:text-sm text-[#DC2828] border rounded-lg border-[#B2B3C7] border-opacity-3 px-2 py-1">
        {tagline}
      </h2>

      {/* Main Title */}
      <h2 className="text-4xl md:text-5xl lg:text-6xl mt-1 font-bold text-[#E3E9FB] text-center">
        {title}
      </h2>

      {/* Breadcrumb */}
      <div className="flex flex-wrap items-center gap-2 mt-1 sm:gap-4 text-sm sm:text-base md:text-lg text-[#DC2828] justify-center">
        <span className="hover:underline cursor-pointer">Home</span>

        <span className="
          bg-[#DC2828]
          text-[#080F20] 
          font-bold 
          w-4 h-4 sm:w-7 sm:h-7 md:w-5 md:h-5 text-2xl
          flex items-center justify-center text-center 
          rounded-full
        ">
          <IoIosArrowForward />
        </span>

        <span className="hover:underline cursor-pointer">{breadcrumb}</span>
      </div>

      {/* Description */}
      <p className="text-[#B2B3C7] text-xs sm:text-base md:text-lg text-center max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl leading-relaxed">
        {description}
      </p>

    </div>
  )
}

export default Common;
