import React from 'react'
import Launching from '../assets/images/Launching.jfif'
import DigitalTransformation from '../assets/images/DigitalTransformation.jpg'
import CyberSecurity from '../assets/images/CyberSecurity.jpg'
import CloudComputing from '../assets/images/CloudComputing.jpg'
const RecentPost = () => {
  return (
    <div className="w-full bg-[#080F20] py-6 px-4 sm:px-6 lg:px-20">
      <div className="container max-w-7xl mx-auto flex flex-col lg:flex-row gap-10">
        <div className="w-full lg:w-2/3 space-y-8">
          <img
            src={Launching}
            alt="Launching"
            className="w-full h-[350px] sm:h-[420px] lg:h-[500px] rounded-xl object-cover"
          />
          <p className="text-[#B2B3C7] leading-relaxed text-[15px] text-justify">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <div className="space-y-6">
            <div>
              <h2 className="text-[#E3E9FB] text-[50px] font-bold mb-2">Heading 1</h2>
              <p className="text-[#B2B3C7] leading-relaxed text-[15px]  text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>
            </div>
            <div>
              <h2 className="text-[#E3E9FB] text-[40px] font-bold mb-2">Heading 2</h2>
              <p className="text-[#B2B3C7] leading-relaxed text-[15px] text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>
            </div>
            <div>
              <h2 className="text-[#E3E9FB] text-[30px] font-bold mb-2">Heading 3</h2>
              <p className="text-[#B2B3C7] leading-relaxed text-[15px] text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>
            </div>
            <div>
              <h2 className="text-[#E3E9FB] text-[25px] font-bold mb-2">Heading 4</h2>
              <p className="text-[#B2B3C7] leading-relaxed text-[15px] text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>
            </div>
            <div>
              <h2 className="text-[#E3E9FB] text-[20px] font-bold mb-2">Heading 5</h2>
              <p className="text-[#B2B3C7] leading-relaxed text-[15px] text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>
            </div>
            <div>
              <h2 className="text-[#E3E9FB] text-[20px] font-bold mb-2">Heading 6</h2>
              <p className="text-[#B2B3C7] leading-relaxed text-[15px] text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/3 bg-[#0F1528] p-6 rounded-xl space-y-6 h-fit">
          
          <h2 className="text-[#E3E9FB] text-[25px] font-semibold mb-2">Recent Posts</h2>
          {[
            {
              img: Launching,
              title: "The Benefits of Managed IT Services for Small Businesses",
              date: "18 Aug 2025"
            },
            {
              img: DigitalTransformation,
              title: "Understanding Digital Transformation – A Complete Guide",
              date: "18 Aug 2025"
            },
            {
              img: CyberSecurity,
              title: "Top 5 Cyber Security Practices Every Company Should Implement",
              date: "18 Aug 2025"
            },
            {
              img: CloudComputing,
              title: "The Future of Cloud Computing – What Businesses Need to Know",
              date: "18 Aug 2025"
            }
          ].map((post, index) => (
            <div key={index} className="flex items-center gap-4">
              <img
                src={post.img}
                className="w-20 h-20 rounded-lg object-cover"
                alt={post.title}
              />
              <div>
                <a className="text-[#49FBDF] text-[15px] font-medium hover:underline cursor-pointer block leading-tight">
                  {post.title}
                </a>
                <span className="text-[#B2B3C7] text-[12px]">{post.date}</span>
              </div>
            </div>
          ))}

        </div>
      </div>
    </div>
  )
}
export default RecentPost
