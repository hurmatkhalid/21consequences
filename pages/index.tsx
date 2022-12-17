import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Header from '../components/Header';

const Home: NextPage = () => {
	return (
		<div className="min-h-screen bg-black text-white">
			<Head>
				<title>21Consequences</title>
				<link rel="icon" href="/Logo.png" />
			</Head>

			<Header />
		</div>
	);
};

export default Home;
