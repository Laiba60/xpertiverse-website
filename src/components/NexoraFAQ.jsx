import { useState } from "react";
import AskQs from "../assets/images/AskQs.png";
import { CiSquarePlus,CiSquareMinus } from "react-icons/ci";
export default function NexoraFAQ() {
  const faqs = [
    {
      q: "What services does Nexora provide?",
      a: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast",
    },
    {
      q: "How can Nexora help my business grow?",
      a: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast",
    },
    {
      q: "Do you provide custom software development?",
      a: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.",
    },
    {
      q: "Can you integrate your solutions with our existing system?",
      a: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast",
    },
    {
      q: "Do you offer ongoing support and maintenance?",
      a: "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast.",
    },
  ];
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <section className="w-full bg-black text-white py-24 px-4 sm:px-6 lg:px-20">
  <div className="container max-w-7xl mx-auto">
    <div className="text-center mb-16">
      <h2 className="text-[#49FBDF] font-semibold text-lg tracking-wide border border-[#B2B3C7] border-opacity-30 rounded-lg inline-block px-10 py-1">
        FAQS
      </h2>

      <h2 className="text-4xl font-bold mt-3">
        Frequently Asked Questions
      </h2>
    </div>

   <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
  <div>
    <ul className="space-y-6">
      {faqs.map((item, index) => (
        <li key={index} className="border-b border-gray-800 pb-4 ">
          <button
            onClick={() =>
              setOpenIndex(openIndex === index ? null : index)
            }
            className="w-full flex justify-between items-center text-left text-xl font-medium transition "
          >
            {index + 1}. {item.q}

            
            {openIndex === index ? (
              <CiSquareMinus className="text-[#49FBDF] text-2xl" />
            ) : (
              <CiSquarePlus className="text-white text-2xl" />
            )}
          </button>

          {openIndex === index && (
            <p className="mt-3 text-gray-400 text-base leading-relaxed">
              {item.a}
            </p>
          )}
        </li>
      ))}
    </ul>
  </div>

  <div className="flex justify-center">
    <img
      src={AskQs}
      alt="Illustration"
      className="w-full max-w-md object-contain"
    />
  </div>
</div>



  </div>
</section>
  );
}
