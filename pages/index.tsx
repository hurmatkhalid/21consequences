import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import About from '../components/About';
import Banner from '../components/Banner';
import Header from '../components/Header';

const Home: NextPage = () => {
	return (
		<div className="h-full overflow-y-scroll scrollbar-none w-full bg-black text-white">
			<Head>
				<title>21Consequences</title>
				<link rel="icon" href="/Logo.png" />
			</Head>

			<Header />

			<div className="max-w-[90rem] scroll-smooth snap-y h-screen overflow-y-scroll scrollbar-none snap-mandatory mx-auto">
				<Banner />
				<About />
			</div>
		</div>
	);
};

export default Home;
