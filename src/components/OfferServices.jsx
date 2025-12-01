import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import webimg from "../assets/images/webimg.png";
import cybersecurity from "../assets/images/cybersecurity.png";
import customservice from "../assets/images/customservice.png";

const OfferServices = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const serviceData = [
    {
      img: webimg,
      title: "Web & Mobile App Development",
      desc: "High-performance, user-friendly websites and mobile applications that deliver exceptional user experiences.",
    },
    {
      img: cybersecurity,
      title: "Cybersecurity Services",
      desc: "Advanced protection against threats, safeguarding your data, systems, and digital infrastructure.",
    },
    {
      img: customservice,
      title: "Custom Software Development",
      desc: "Tailor-made software solutions designed to meet your unique business needs, improve efficiency, and accelerate growth.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="bg-[#0B0C1A] py-16 px-4 sm:px-6 lg:px-20 text-white"
    >
      <div className="container max-w-7xl mx-auto flex flex-col gap-12">

        {/* Header Section */}
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="flex flex-col lg:flex-row lg:items-center gap-6"
        >
          <div className="lg:w-1/2 flex flex-col items-start gap-6">
            
            {/* Title */}
            <div>
              <span className="text-[#49FBDF] border border-[#1E293B] px-4 py-1 rounded-lg text-sm">
                What We Offer
              </span>
              <h2 className="text-3xl lg:text-5xl font-bold mb-4 leading-tight mt-2">
                Empowering Your Business with <br className="hidden md:block" /> Next-Gen Technology
              </h2>
            </div>

            {/* Description + Buttons */}
            <div className="flex flex-col gap-4 w-full">
              <p className="text-gray-300 mb-4 lg:mb-6">
                We design and build software tailored specifically to your business
                needs, ensuring seamless integration with your existing systems.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 w-full">
                <button className="bg-linear-to-r from-blue-500 to-purple-500 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-sm sm:text-base md:text-lg rounded-md hover:opacity-90 transition w-full sm:w-auto text-center">
                  Get Started
                </button>

                <button className="border border-[#49FBDF] text-[#49FBDF] px-4 sm:px-6 md:px-8 py-2 sm:py-3 text-sm sm:text-base md:text-lg rounded-md hover:bg-[#49FBDF] hover:text-black transition w-full sm:w-auto text-center">
                  Learn More
                </button>
              </div>
            </div>

          </div>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
          {serviceData.map((service, i) => (
            <motion.div
              key={i}
              initial={{ y: 80, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 1.8, ease: "easeOut", delay: 0.4 * i }}
              className="bg-[#111122] p-6 rounded-lg flex flex-col items-start gap-4"
            >
              <img src={service.img} alt={service.title} className="w-12 h-12" />
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="text-gray-400 text-sm">{service.desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OfferServices;
