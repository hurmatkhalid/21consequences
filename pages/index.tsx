import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
	return (
		<div className="flex min-h-screen flex-col items-center justify-center py-2">
			<Head>
				<title>21Consequences</title>
				<link rel="icon" href="/logo.jpg" />
			</Head>

			<h1 className="text-3xl">
				Hello, We are going to make the 21C website🚀
			</h1>
		</div>
	);
};

export default Home;
