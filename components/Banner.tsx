import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div
      id="banner"
      className="md:h-screen min-h-fit w-full flex justify-center snap-end items-center"
    >
      <div className="flex flex-col md:flex-row text-center md:text-left justify-between w-full md:mt-0 mt-20 items-center px-8 md:px-20">
        <div className="flex flex-col md:w-1/2 items-start space-y-4">
          <motion.h1
            initial={{
              y: -200,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className="font-bold text-5xl uppercase tracking-widest text-gray-300"
          >
            Guiding Towards Growth
          </motion.h1>

          <motion.p
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
            className="text-base leading-5 tracking-wider text-gray-400"
          >
            21Consequences is a non profit organisation, founded by a bunch of
            young people from Kashmir, to guide students, especially high school
            kids academically. As an organisation, we help students in narrowing
            down streams for career preference, provide prep materials, books,
            tips and strategies regarding multiple competitive examinations held
            worldwide and spread awareness about different opportunities.
          </motion.p>
          <motion.div
            initial={{
              y: 200,
              opacity: 0,
            }}
            animate={{
              y: 0,
              opacity: 1,
            }}
            transition={{
              duration: 1.5,
            }}
            className="flex items-center w-full justify-center md:justify-start space-x-4"
          >
            <Link
              href="#about"
              className="px-4 py-2 flex items-center justify-center rounded-full border-2 border-[#3b1e7f] hover:bg-[#3b1e7f] transition-all duration-200 ease-in"
            >
              Read More
            </Link>
            <button className="px-4 py-2 rounded-full flex items-center justify-center border-2 border-[#3b1e7f] hover:bg-[#3b1e7f] transition-all duration-200 ease-in">
              Watch Video
            </button>
          </motion.div>
        </div>
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
            duration: 1,
          }}
          className="max-w-fit order-first md:order-last"
        >
          <Image
            loading="eager"
            src="/boy.svg"
            alt="svg"
            height={500}
            width={500}
            className="object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};
export default Banner; //this is like flushing(?)
