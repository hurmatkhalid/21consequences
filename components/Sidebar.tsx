import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import {
  ArrowDownOnSquareIcon,
  Bars3Icon,
  BookOpenIcon,
  HomeIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { SocialIcon } from "react-social-icons";
import Link from "next/link";

function SideNavbar() {
  const router = useRouter();
  const [hoveredIcon, setHoveredIcon] = useState("");

  const styleLink =
    "text-gray-500 font-semibold tracking-widest cursor-pointer uppercase";
  return (
    <div className="z-50">
      <Disclosure as="nav">
        <Disclosure.Button className="absolute z-50 top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-white group">
          <Bars3Icon className="block md:hidden h-6 w-6 z-50" />
        </Disclosure.Button>
        <div className="p-6 sm:w-1/2 md:w-2/3 h-screen md:hidden bg-black z-50 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col relative h-full justify-start item-center">
            <div className="flex items-center cursor-pointer space-x-2">
              <Image src="/Logo.png" height={40} width={40} alt="Logo" />
              <p className="tracking-widest font-semibold pr-5 text-gray-100 uppercase">
                21Consequences
              </p>
            </div>
            <div className="flex flex-col items-start pl-5 mt-10 space-y-4">
              <div className="flex justify-start items-center transition-all duration-800 ease-in gap-4 pl-5  hover:bg-gray-200 p-2 rounded-md group cursor-pointer hover:shadow-lg">
                <HomeIcon className="h-8 group-hover:text-black" />
                <p className={styleLink} onClick={() => router.push("/")}>
                  Home
                </p>
              </div>
              <div className="flex justify-start items-center gap-4 pl-5  hover:bg-gray-200 p-2 rounded-md group cursor-pointer hover:shadow-lg">
                <ArrowDownOnSquareIcon className="h-8 group-hover:text-black" />
                <p
                  className={styleLink}
                  onClick={() => router.push("/resources")}
                >
                  Resources
                </p>
              </div>
              <div className="flex justify-start items-center gap-4 pl-5  hover:bg-gray-200 p-2 rounded-md group cursor-pointer hover:shadow-lg">
                <BookOpenIcon className="h-8 group-hover:text-black" />
                <p className={styleLink} onClick={() => router.push("/books")}>
                  Books
                </p>
              </div>
              <div className="flex justify-start items-center gap-4 pl-5  hover:bg-gray-200 p-2 rounded-md group cursor-pointer hover:shadow-lg">
                <UserGroupIcon className="h-8 group-hover:text-black" />
                <p className={styleLink} onClick={() => router.push("/team")}>
                  Team
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-center absolute bottom-5 justify-center">
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
          </div>
        </div>
      </Disclosure>
    </div>
  );
}

export default SideNavbar;
