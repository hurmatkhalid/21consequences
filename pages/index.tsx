import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import About from '../components/About';
import Banner from '../components/Banner';
import Header from '../components/Header';

const Home: NextPage = () => {
	return (
		<div className="min-h-screen  w-full bg-black text-white">
			<Head>
				<title>21Consequences</title>
				<link rel="icon" href="/Logo.png" />
			</Head>

			<Header />

			<style global jsx>
				{`
					html {
						scroll-behavior: smooth;
					}
				`}
			</style>

			<main className="max-w-[90rem] mx-auto">
				<Banner />
				<About />
			</main>
		</div>
	);
};

export default Home;
