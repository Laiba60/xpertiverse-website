import React from 'react'
import { Crosshair, Eye, Heart,Globe,Rocket,Briefcase,BarChart3 } from "lucide-react";
import Aboutimg from "../assets/images/Aboutimg.jpeg";
const AboutDetail = () => {
    const values = [
{
icon: "❤️",
title: "Integrity & Transparency",
desc: "Honesty and ethical practices in all relationships"
},
{
icon: "⚡",
title: "Innovation & Excellence",
desc: "Embracing new technologies and creative solutions"
},
{
icon: "👥",
title: "Customer-Centric",
desc: "Your success is our success and priority"
},
{
icon: "🛡️",
title: "Continuous Improvement",
desc: "Always learning and evolving our methods"
},
{
icon: "🌍",
title: "Global Collaboration",
desc: "Diverse perspectives creating better solutions"
},
{
icon: "✔️",
title: "Quality Assurance",
desc: "Excellence in every project we deliver"
}
];
const items = [
    {
      icon: <Rocket size={42} />,
      title: "Accelerated Growth",
      desc: "We enable brands to scale faster with data-driven strategies, modern frameworks, and performance-focused execution.",
    },
    {
      icon: <Briefcase size={42} />,
      title: "Business-Focused Solutions",
      desc: "Our solutions are tailored to revenue, performance, and ROI—not just design and development for the sake of delivery.",
    },
    {
      icon: <BarChart3 size={42} />,
      title: "Measured Performance",
      desc: "Every campaign, website, and application is monitored with analytics and KPIs to ensure measurable business impact.",
    },
  ];
    const locations = [
    { name: "Pakistan" },
    { name: "UAE" },
    { name: "Qatar" },
    { name: "UK" },
    { name: "International Clients" },
];
  return (
    <div className="w-full bg-[#080F20] py-20 text-white">
      <div className="max-w-7xl mx-auto px-4 text-center space-y-6">
        <div className="mt-10">
        <span className="text-white text-lg font-semibold border border-transparent hover:border-[#DC2828] px-2 py-3 transition">
        About Us
        </span>
        <h2 className="text-4xl font-bold mt-7 bg-linear-to-r from-[#F56716] to-[#EA4920] bg-clip-text text-transparent">
          Xpertiverse
        </h2>
        <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed mt-6" >
          A passionate team of digital innovators dedicated to transforming 
          businesses through cutting-edge technology and creative excellence.
        </p>
        </div>
        <section className="w-full bg-[#070D1A] text-white py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
    <div>
      <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            <span className="text-white">
            Xpertiverse 
            </span>
          
           <span class="bg-linear-to-r from-[#F56716] to-[#EA4920] text-transparent bg-clip-text"> Overview</span>
          </h2>
      <p className="text-gray-300 text-lg leading-relaxed mb-6 text-justify">
        Xpertiverse Pvt Ltd is a leading digital innovation and technology solutions
        company, empowering businesses with modern software development,
        digital transformation, and result-driven IT services. We specialize
        in creating scalable, intelligent, and user-centric solutions that help
        brands accelerate growth in today’s competitive digital world.
      </p>
    </div>
    <div className="flex justify-center">
      <img
        src={Aboutimg}
        alt="About Xpertiverse"
        className="w-full max-w-[450px] rounded-xl object-cover shadow-lg"
      />
    </div>
  </div>
</section>

<section className="text-white bg-[#070D1A] py-20 px-6">
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-4xl sm:text-5xl font-bold leading-tight">
            <span className="text-white">
            What Makes
            </span>
          
           <span class="bg-linear-to-r from-[#F56716] to-[#EA4920] text-transparent bg-clip-text"> Us Different</span>
          </h2>
    <div className="grid md:grid-cols-3 gap-10 mt-10">
      {items.map((item, i) => (
        <div
          key={i}
          className="
            flex flex-col items-center
            text-[#DC2828]
            bg-[#0E1A2A]
            p-8
            rounded-2xl
            border border-transparent
            hover:border-[#DC2828]
            hover:scale-105
            transition-all duration-300
          "
        >
          <div className="p-4 bg-white rounded-full shadow-md mb-4">
            {item.icon}
          </div>
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-sm max-w-xs text-white">{item.desc}</p>
        </div>
      ))}
    </div>

  </div>
</section>
 
   <section className="bg-[#080F20] w-full py-20">
  <div className="max-w-7xl mx-auto px-6 text-center">
    
    
  <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            <span className="text-white">
            Our Core
            </span><br />
          
           <span class="bg-linear-to-r from-[#F56716] to-[#EA4920] text-transparent bg-clip-text">Mission, Visions & Values</span>
          </h2>

    
    <div className="grid md:grid-cols-3 gap-8">
      
      
      <div className="bg-[#0D1526] p-8 rounded-3xl border border-[#1A2438] hover:border-[#DC2828] transition-all duration-300">

        
        <div className="bg-white rounded-full p-3 inline-flex items-center justify-center mb-4">
    <Crosshair className="text-[#DC2828]" size={30} /> 
  </div>
        <h3 className="text-2xl font-semibold text-white mb-4">Our Mission</h3>
        
        <p className="text-gray-300 leading-relaxed">
          To **engineer digital superiority** by delivering high-impact,
          scalable technology solutions that maximize our clients'
          efficiency, market reach, and profitable growth.
        </p>
      </div>

      
      <div className="bg-[#0D1526] p-8 rounded-3xl border border-[#1A2438] hover:border-[#DC2828] transition-all duration-300">
      <div className="bg-white rounded-full p-3 inline-flex items-center justify-center mb-4">
    <Eye className="text-[#DC2828]" size={30} /> {/* Removed mb-4 from icon, reduced size */}
  </div>
        
        <h3 className="text-2xl font-semibold text-white mb-4">Our Vision</h3>
       
        <p className="text-gray-300 leading-relaxed">
          To be recognized as the **trusted global partner** for digital
          innovation, setting the industry standard for quality,
          technological expertise, and client transformation.
        </p>
      </div>

      
      <div className="bg-[#0D1526] p-8 rounded-3xl border border-[#1A2438] hover:border-[#DC2828] transition-all duration-300">

        <div className="bg-white rounded-full p-3 inline-flex items-center justify-center mb-4">
    <Heart className="text-[#DC2828]" size={30} /> 
  </div>
        <h3 className="text-2xl font-semibold text-white mb-4">Our Values</h3>
        
        <p className="text-gray-300 leading-relaxed text-left pl-4">
          <ul className="list-disc space-y-1">
            <li>Integrity & Trust: Non-negotiable honesty.</li>
            <li>Mastery: Relentless pursuit of expertise.</li>
            <li>Client Focus: Building long-term, invested partnerships.</li>
            <li>Agility: Adaptive, future-proof problem-solving.</li>
          </ul>
        </p>
      </div>

    </div>
  </div>
</section>
<section className="bg-[#07101C] text-white py-20 px-6">
     <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            <span className="text-white">
            What We
            </span>
          
           <span class="bg-linear-to-r from-[#F56716] to-[#EA4920] text-transparent bg-clip-text"> Stand For</span>
          </h2>
      <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {values.map((item, index) => (
          <div 
            key={index}
            className="bg-[#0E1A2A] border border-white/10 rounded-xl p-6 hover:-translate-y-1 hover:border-[#DC2828] transition text-left"
          >
            <div className="w-14 h-14 rounded-xl bg-white text-[#DC2828] flex items-center justify-center text-2xl mb-4">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold mb-2 text-[#DC2828]">{item.title}</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>

    <section>
        <h2 className="text-4xl sm:text-5xl font-bold leading-tight mb-4">
            <span className="text-white">
            Our
            </span>
          
           <span class="bg-linear-to-r from-[#F56716] to-[#EA4920] text-transparent bg-clip-text"> Global Reach</span>
          </h2>
           <p className="text-gray-400 mb-12 text-lg"> Operating from strategic locations worldwide </p>
        <div className="grid md:grid-cols-3 gap-6">
             {locations.map((item, index) => ( <div key={index} className="rounded-2xl bg-[#0E1A2A]  p-10 border border-transparent hover:border-[#DC2828] transition-all duration-300 cursor-pointer" >
                 <Globe size={50} className="text-white mx-auto mb-4" /> 
                 <h3 className="text-xl font-semibold text-white">{item.name}</h3>
                  </div> ))} 
                  </div>
                </section>
                </div>
                </div>
  );
};
export default AboutDetail;
