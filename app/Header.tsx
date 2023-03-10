//FOR HEADER RELATED WORK
"use client";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

//for including images in nextjs we need this
const Header = () => {
  const [hoveredIcon, setHoveredIcon] = useState("");

  const styleLink =
    "text-gray-500 font-semibold tracking-widest cursor-pointer uppercase transitions";

  //this is called functional component, we include functions in this
  return (
    //we write the html and css code here
    <div className="fixed top-0 z-40">
      <div
        className={`px-6 py-2 h-20 flex transition-all duration-300 ease-in-out items-center w-screen justify-between backdrop-blur-md bg-opacity-60 shadow-xl
        `}
      >
        {/* Image */}
        <motion.div
          initial={{
            x: -200,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className="flex"
        >
          <div className="flex items-center cursor-pointer space-x-2 md:border-r md:border-gray-600">
            <Image src="/Logo.png" height={40} width={40} alt="Logo" />
            <p className="tracking-widest font-semibold pr-5 text-gray-100 uppercase">
              21Consequences
            </p>
          </div>
          <div className="md:flex items-center pl-7 hidden space-x-4 md:space-x-10 lg:space-x-12">
            <Link href="/" className={styleLink}>
              Home
            </Link>
            <Link href="/resources" className={styleLink}>
              Resources
            </Link>
            <Link href="/books" className={styleLink}>
              Books
            </Link>
            <Link href="/team" className={styleLink}>
              Team
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{
            x: 200,
            opacity: 0,
          }}
          animate={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          className=""
        >
          <div className="items-center hidden md:flex space-x-2">
            <SocialIcon
              url="https://instagram.com/21consequences/"
              target="_blank" //so that the link opens in new tab
              onMouseEnter={() => setHoveredIcon("instagram")} //onmouseenter is an inbuilt function for anything when mouse goes on a position
              onMouseLeave={() => setHoveredIcon("")} // this needs to be done or else the icon would stay purple
              fgColor={hoveredIcon == "instagram" ? "#3b1e7f" : "gray"}
              bgColor="transparent"
            />
            <SocialIcon
              url="https://twitter.com/21consequences/"
              target="_blank"
              onMouseEnter={() => setHoveredIcon("twitter")}
              onMouseLeave={() => setHoveredIcon("")}
              fgColor={hoveredIcon == "twitter" ? "#3b1e7f" : "gray"}
              bgColor="transparent"
            />
            <SocialIcon
              url="https://www.linkedin.com/company/21consequences/"
              target="_blank"
              onMouseEnter={() => setHoveredIcon("linkedin")}
              onMouseLeave={() => setHoveredIcon("")}
              fgColor={hoveredIcon == "linkedin" ? "#3b1e7f" : "gray"}
              bgColor="transparent"
            />
            <SocialIcon
              url="https://discord.gg/FSm4QqcAKd/"
              target="_blank"
              onMouseEnter={() => setHoveredIcon("discord")}
              onMouseLeave={() => setHoveredIcon("")}
              fgColor={hoveredIcon == "discord" ? "#3b1e7f" : "gray"}
              bgColor="black"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Header;
