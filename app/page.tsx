import Banner from "./Banner";
import About from "./About";
import Discord from "./Discord";

const desc =
  "21Consequences is a non profit organisation, founded by a bunch of young people from Kashmir, to guide students, especially high school kids academically. As an organisation, we help students in narrowing down streams for career preference, provide prep materials, books, tips and strategies regarding multiple competitive examinations held worldwide and spread awareness about different opportunities.";

const Home = () => {
  return (
    <div className="min-h-screen w-full bg-black relative text-white">
      <meta name="description" content={desc} />
      <div className="max-w-[90rem] h-screen overflow-y-scroll pb-20 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-transparent md:snap-y md:snap-mandatory mx-auto">
        <Banner />
        <About />
        <Discord />
      </div>
    </div>
  );
};

export default Home;
