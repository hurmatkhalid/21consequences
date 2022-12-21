import React from "react";
import Image from "next/image";

type Props = {
  name: string;
  designation: string;
  image: any;
};

const Member = ({ name, designation, image }: Props) => {
  return (
    <div className="relative h-[640px] rounded-xl group transition-all duration-200 ease-out">
      <div
        className="absolute bottom-0 z-10 h-full w-full rounded-xl"
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
          objectPosition="center"
        />
      </div>
      <div className="absolute hidden inset-0 z-20 group-hover:flex flex-col justify-center items-center">
        <h1 className="text-3xl text-center w-full font-semibold uppercase tracking-widest">
          {name}
        </h1>
      </div>
    </div>
  );
};

export default Member;
