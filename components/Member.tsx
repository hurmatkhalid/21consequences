import React from "react";
import Image from "next/image";
import { SocialIcon } from "react-social-icons";

type Props = {
  name: string;
  designation: string;
  about: string;
  image: any;
  linkedIn: string;
};

const Member = ({ name, designation, image, about, linkedIn }: Props) => {
  console.log(linkedIn);
  return (
    <div className="relative h-[600px] w-[300px] mb-20 rounded-xl group hover:scale-110 px-20 transition-all duration-500 ease-in-out">
      <div
        className="absolute inset-0 z-10 h-full w-full rounded-xl"
        style={{
          background: "rgba(0,0,0,0.4)",
          backgroundImage: `linear-gradient(to top, rgba(0,0,0, 0.4) 0, rgba(0,0,0,0) 60%, rgba(0,0,0,0.4) 100%)`,
        }}
      />
      <div>
        <Image
          //@ts-ignore
          src={image}
          alt={name}
          layout="fill"
          loading="eager"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
      <div className="absolute hidden inset-0 z-20 group-hover:flex flex-col justify-center px-3 items-center">
        <h1 className="text-2xl text-center w-full font-semibold uppercase tracking-widest">
          {name}
        </h1>
        <h2 className="text-gray-300 text-lg uppercase italic w-full text-center font-bold mt-2 tracking-wider">
          {designation}
        </h2>
        <p className="w-full text-center text-md mt-2">{about}</p>
        <SocialIcon
          target="_blank"
          url={linkedIn}
          fgColor="white"
          className="h-10 w-10 mt-2"
        />
      </div>
    </div>
  );
};

export default Member;
