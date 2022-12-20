import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import About from '../components/About';
import Banner from '../components/Banner';
import Discord from '../components/Discord';
import Header from '../components/Header';
import Footer from '../components/Footer';

const desc =
	'21Consequences is a non profit organisation, founded by a bunch of young people from Kashmir, to guide students, especially high school kids academically. As an organisation, we help students in narrowing down streams for career preference, provide prep materials, books, tips and strategies regarding multiple competitive examinations held worldwide and spread awareness about different opportunities.';

const Home: NextPage = () => {
	return (
		<div className="min-h-screen w-full overflow-y-scroll scrollbar-none bg-black text-white">
			<Head>
				<title>21Consequences</title>
				<link rel="icon" href="/Logo.png" />
			</Head>
			<meta name="description" content={desc} />

			<Header />

			<div className="max-w-[90rem] mx-auto">
				<Banner />
				<About />
				<Discord />
			</div>
		</div>
	);
};

export default Home;
