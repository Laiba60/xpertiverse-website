import React from 'react'
import { RxHamburgerMenu } from "react-icons/rx";
import { MdDateRange } from "react-icons/md";
import { FaCommentAlt } from "react-icons/fa";

const LaunchWebsite = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-[#080F20] mt-0 px-4">
        
        
        <div className="text-center">
            <h2 className="text-[#49FBDF] text-[12px] sm:text-[14px] border border-[#B2B3C7] rounded-2xl px-3.5 py-2 inline-block">
                Launch Your Professional tech Website
            </h2>

            <h2 className="text-[#E3E9FB] text-[30px] sm:text-[40px] lg:text-[49px] font-bold leading-snug sm:leading-tight mt-3">
                The Benefits of Managed IT Services for <br className="hidden sm:block" /> 
                Small Businesses
            </h2>
        </div>

       
        <div className="flex flex-wrap justify-center items-center mt-4 gap-6 sm:gap-8">

            <div className="flex items-center">
                <RxHamburgerMenu className="text-[#49FBDF] text-[18px] sm:text-[20px]" />
                <span className="text-[#E3E9FB] text-[14px] sm:text-[15px] pl-1">Uncategorized</span>
            </div>

            <div className="flex items-center">
                <MdDateRange className="text-[#49FBDF] text-[18px] sm:text-[20px]" />
                <span className="text-[#E3E9FB] text-[14px] sm:text-[15px] pl-1">August 18, 2025</span>
            </div>

            <div className="flex items-center">
                <FaCommentAlt className="text-[#49FBDF] text-[18px] sm:text-[20px]" />
                <span className="text-[#E3E9FB] text-[14px] sm:text-[15px] pl-1">0 comment</span>
            </div>

        </div>

    </div>
  )
}

export default LaunchWebsite
