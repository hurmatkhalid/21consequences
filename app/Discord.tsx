"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

type Props = {};

const Discord = (props: Props) => {
  return (
    <div
      id="discord"
      className="md:h-screen min-h-fit w-full snap-start flex justify-center items-center"
    >
      <div className="flex flex-col md:flex-row justify-between pt-20 md:pt-0 w-full items-center px-8 md:px-20">
        <motion.div
          initial={{
            y: 200,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            duration: 1,
          }}
          viewport={{ once: true }}
          className="flex flex-col md:w-1/2 w-full text-center md:text-left mt-5 md:mt-0 items-start justify-start space-y-4"
        >
          <h1 className="font-bold text-4xl uppercase tracking-widest text-gray-300">
            Join Our Student Community on Discord
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
            adipisci sint necessitatibus rem.
          </p>
        </motion.div>

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
          className="order-first md:order-last"
        >
          <Image
            src="/ss.png"
            alt="discord"
            height={600}
            loading="eager"
            width={600}
            className="rounded-xl"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Discord;
