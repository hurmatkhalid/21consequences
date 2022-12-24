import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

const About = (props: Props) => {
  return (
    <div
      id="about"
      className="md:h-screen min-h-fit w-full snap-end flex justify-center items-center"
    >
      <div className="flex flex-col md:flex-row justify-center pt-10 md:pt-0 w-full items-center px-8 md:px-20">
        {/* Image */}
        <motion.div
          initial={{
            x: -200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          viewport={{ once: true }}
        >
          <Image
            src="/cycle.svg"
            alt="logo"
            loading="eager"
            height={600}
            width={600}
          />
        </motion.div>
        {/* Description */}
        <motion.div
          initial={{
            x: 200,
            opacity: 0,
          }}
          whileInView={{
            x: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1.5,
          }}
          viewport={{ once: true }}
          className="flex flex-col md:w-1/2 text-center md:text-left w-full items-start justify-start space-y-4"
        >
          <h1 className="font-bold text-4xl uppercase w-full md:text-left text-center tracking-widest text-gray-300">
            About
          </h1>
          <p className="text-base leading-5 tracking-wider text-gray-400">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            sint tempora labore tempore vitae voluptates odit nihil quam vel ab
            culpa mollitia magnam delectus voluptas, quo aut, reprehenderit
            illum? Omnis. Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Eius excepturi libero fugit laborum nostrum cum officia
            similique, laboriosam corporis consequatur incidunt. Adipisci
            asperiores accusamus earum beatae nobis laboriosam eius qui? Lorem
            ipsum dolor sit, amet consectetur adipisicing elit. Officia
            repudiandae magnam, rem maxime neque error! Officia, ipsa beatae
            molestiae vitae accusamus illo cumque reprehenderit reiciendis harum
            adipisci sint necessitatibus .
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
