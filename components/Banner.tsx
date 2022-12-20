import Image from "next/image";
import { useRouter } from "next/router";

const Banner = () => {
  const router = useRouter();

  const scrollToAbout = () => {
    window.scrollTo({
      top: 710,
      behavior: "smooth",
    });
  };

  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="flex flex-col md:flex-row justify-between w-full items-center px-4 md:px-20">
        <div className="flex flex-col w-1/2 items-start space-y-4">
          <h1 className="font-bold text-5xl uppercase tracking-widest text-gray-300">
            Guiding Towards Growth
          </h1>

          <p className="text-base leading-5 tracking-wider text-gray-400">
            21Consequences is a non profit organisation, founded by a bunch of
            young people from Kashmir, to guide students, especially high school
            kids academically. As an organisation, we help students in narrowing
            down streams for career preference, provide prep materials, books,
            tips and strategies regarding multiple competitive examinations held
            worldwide and spread awareness about different opportunities.
          </p>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => scrollToAbout()}
              className="px-4 py-2 flex items-center justify-center rounded-full border-2 border-[#3b1e7f] hover:bg-[#3b1e7f] transition-all duration-200 ease-in"
            >
              Read More
            </button>
            <button className="px-4 py-2 rounded-full flex items-center justify-center border-2 border-[#3b1e7f] hover:bg-[#3b1e7f] transition-all duration-200 ease-in">
              Watch Video
            </button>
          </div>
        </div>
        <div className="w-1/2 flex justify-center items-center">
          <Image src="/boy.svg" alt="svg" height={1500} width={1500} />
        </div>
      </div>
    </div>
  );
};
export default Banner; //this is like flushing(?)
