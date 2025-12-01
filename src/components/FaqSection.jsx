import React, { useState } from "react";
import { IoAdd, IoRemove } from "react-icons/io5";
import { motion, AnimatePresence } from "framer-motion";

export default function FAQSection() {
  const [openLeft, setOpenLeft] = useState(null);
  const [openRight, setOpenRight] = useState(null);

  // Divide FAQs into 2 columns
  const leftFaqs = [
    {
      q: "What services does Xpertiverse provide?",
      a: "Xpertiverse offers a diverse range of technology and digital solutions including website development, mobile app development, UI/UX design, cloud services, AI integrations, branding, and digital marketing solutions.",
    },
    {
      q: "How can Xpertiverse help my business grow?",
      a: "We enhance your digital presence with high-performance websites, custom automation tools, business apps, marketing systems, and strategies that drive engagement and conversions.",
    },
    {
      q: "Do you provide custom software development?",
      a: "Yes, we build CRMs, ERPs, inventory systems, SaaS platforms, automation tools, and fully custom systems tailored for your business.",
    },
    {
      q: "Can you integrate your solutions with our existing system?",
      a: "Absolutely! We integrate APIs, cloud platforms, automation tools, and custom backend systems into your current infrastructure.",
    },
    {
      q: "Do you offer ongoing support and maintenance?",
      a: "Yes, we provide updates, fixes, security monitoring, performance optimization, and full maintenance services.",
    },
  ];

  const rightFaqs = [
    {
      q: "What industries does Xpertiverse work with?",
      a: "We support e-commerce, healthcare, real estate, education, fintech, hospitality, and startups with tailored digital solutions.",
    },
    {
      q: "How much time does it take to complete a project?",
      a: "Websites: 1–2 weeks. Mobile apps or systems: 1–3 months, depending on complexity.",
    },
    {
      q: "What technologies do you specialize in?",
      a: "React, Node.js, Python, Flutter, Next.js, MongoDB, SQL, AWS, Firebase, and AI tools.",
    },
    {
      q: "Can you redesign an old website or app?",
      a: "Yes! We modernize outdated websites/apps with better UI/UX, speed, structure, and features.",
    },
    {
      q: "Do you offer custom pricing or fixed packages?",
      a: "We have both fixed-price packages and fully custom quotes based on your needs.",
    },
  ];

  return (
   <section className="w-full bg-[#080F20] px-4 sm:px-6 lg:px-20 py-24">
  <div className="max-w-7xl mx-auto">

    {/* Heading */}
    <div className="mb-16">
      <h2 className="text-3xl md:text-5xl font-bold text-white">General Questions</h2>
      <p className="text-gray-400 max-w-xl mt-4">
        Find answers to the most frequently asked questions about our services and workflow.
      </p>
    </div>

    {/* Two Columns */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20">

      {/* LEFT COLUMN */}
      <div className="space-y-8">
        {leftFaqs.map((item, i) => (
          <div key={i} className="border-b border-gray-700 pb-6">

            <button
              onClick={() => setOpenLeft(openLeft === i ? null : i)}
              className="flex items-center justify-between w-full text-left py-2"
            >
              <span
                className={`text-lg font-semibold ${
                  openLeft === i ? "text-[#49FBDF]" : "text-white"
                }`}
              >
                {i + 1}. {item.q}
              </span>

              <motion.span
                animate={{ rotate: openLeft === i ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-[#49FBDF] text-2xl"
              >
                {openLeft === i ? <IoRemove /> : <IoAdd />}
              </motion.span>
            </button>

            <AnimatePresence>
              {openLeft === i && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35 }}
                  className="text-gray-400 mt-4 max-w-lg leading-relaxed overflow-hidden"
                >
                  {item.a}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

      {/* RIGHT COLUMN */}
      <div className="space-y-8">
        {rightFaqs.map((item, i) => (
          <div key={i} className="border-b border-gray-700 pb-6">

            <button
              onClick={() => setOpenRight(openRight === i ? null : i)}
              className="flex items-center justify-between w-full text-left py-2"
            >
              <span
                className={`text-lg font-semibold ${
                  openRight === i ? "text-[#49FBDF]" : "text-white"
                }`}
              >
                {i + 1}. {item.q}
              </span>

              <motion.span
                animate={{ rotate: openRight === i ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-[#49FBDF] text-2xl"
              >
                {openRight === i ? <IoRemove /> : <IoAdd />}
              </motion.span>
            </button>

            <AnimatePresence>
              {openRight === i && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.35 }}
                  className="text-gray-400 mt-4 max-w-lg leading-relaxed overflow-hidden"
                >
                  {item.a}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>

    </div>

  </div>
</section>
  );
}