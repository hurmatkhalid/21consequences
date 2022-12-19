import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Banner from '../components/Banner';
import Header from '../components/Header';

const Home: NextPage = () => {
	return (
		<div className="min-h-screen w-full bg-black text-white">
			<Head>
				<title>21Consequences</title>
				<link rel="icon" href="/Logo.png" />
			</Head>

			<Header />

			<main className="max-w-7xl mx-auto">
				<Banner />
			</main>
		</div>
	);
};

export default Home;
