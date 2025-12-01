import React from "react";
import { MdOutlineMail } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
const CompanyContact = () => {
  return (
    <div className="w-full bg-black py-8  px-4 sm:px-6 lg:px-20">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-6">
          <div className="flex items-center justify-between gap-4 py-6 px-4 border border-gray-500/40 rounded-lg w-full lg:w-1/3">
            <div className="flex flex-col">
              <h2 className="text-[#DC2828] text-[25px] font-semibold">Email</h2>
              <span className="text-[#B2B3C7] text-[15px]">example@mail.com</span>
              <span className="text-[#B2B3C7] text-[15px]">hello.example2@mail.com</span>
            </div>
            <div className="text-white text-[30px] bg-[#DC2828] px-5 py-4 rounded-lg flex items-center justify-center">
              <MdOutlineMail />
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 py-6 px-4 border border-gray-500/40 rounded-lg w-full lg:w-1/3">
            <div className="flex flex-col">
              <h2 className="text-[#DC2828] text-[25px] font-semibold">Phone</h2>
              <span className="text-[#B2B3C7] text-[15px]">+123 456 7890</span>
              <span className="text-[#B2B3C7] text-[15px]">+ (123) 3322 4455 632</span>
            </div>
            <div className="text-white text-[30px] bg-[#DC2828] px-5 py-4 rounded-lg flex items-center justify-center">
              <FiPhoneCall />
            </div>
          </div>
          <div className="flex items-center justify-between gap-4 py-6 px-4 border border-gray-500/40 rounded-lg w-full lg:w-1/3">
            <div className="flex flex-col">
              <h2 className="text-[#DC2828] text-[25px] font-semibold">Location</h2>
              <span className="text-[#B2B3C7] text-[15px]">Address line 01 lorem ipsum</span>
              <span className="text-[#B2B3C7] text-[15px]">Las Vegas, USA</span>
            </div>
            <div className="text-white text-[30px] bg-[#DC2828] px-5 py-4 rounded-lg flex items-center justify-center">
              <SlLocationPin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default CompanyContact;
