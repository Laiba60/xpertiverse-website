import React, { useRef } from 'react';
import { motion, useInView } from "framer-motion";
import CodeLab from "../assets/images/CodeLab.png";
import Hexa from "../assets/images/Hexa.png";
import Kanba from "../assets/images/Kanba.png";
import Velocity from "../assets/images/Velocity9.png";
import Liva from "../assets/images/Liva.png";
import Earth from "../assets/images/Earth.png";  
import hexalab from "../assets/images/hexalab.png";

const PartnersIntegration = () => {
  const partners = [
    { name: "CodeLab", img: CodeLab },
    { name: "HEXAlab", img: hexalab },
    { name: "HEXLAB", img: Hexa },
    { name: "Kanba", img: Kanba },
    { name: "Velocity", img: Velocity },
    { name: "Liva", img: Liva },
    { name: "Earth", img: Earth },
    { name: "Velocity", img: Velocity },
    { name: "Liva", img: Liva },
    { name: "Earth", img: Earth },
  ];

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  return (
    <section
      ref={sectionRef}
      className="bg-black text-white py-20 px-4 sm:px-6 lg:px-20"
    >
      <div className="container max-w-7xl mx-auto flex flex-col items-center gap-12">
        
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-white">
          Partners and Integrations
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-10 justify-items-center w-full">
          {partners.map((p, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center gap-3"
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ scale: 1.1 }}
            >
              <img src={p.img} className="h-16 object-contain" alt={p.name} />
              <span className="text-white text-sm md:text-lg">{p.name}</span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default PartnersIntegration;
