import React from 'react';
import Header from '../components/Header';
import Member from '../components/Member';
import imageUrlBuilder from '@sanity/image-url';
import Head from 'next/head';
import { client } from '../lib/sanity';

type Props = {};

const builder = imageUrlBuilder(client);

const Team = ({ team }: any) => {
	const urlFor = (source: any) => {
		return builder.image(source);
	};
	return (
		<div className="min-h-screen w-full bg-black text-white">
			<Head>
				<title>21Consequences - Team</title>
				<link rel="icon" href="/Logo.png" />
			</Head>

			<Header />

			<div className="max-w-[90rem] h-screen overflow-y-scroll scrollbar-thin scrollbar-track-transparent scrollbar-thumb-transparent snap-y snap-mandatory mx-auto">
				<div className="flex flex-col h-full items-center w-full justify-start mt-24">
					<h1 className="font-bold text-2xl uppercase text-left w-full tracking-widest text-gray-300 mb-5">
						Team
					</h1>
					<div className="grid grid-cols-1 w-full sm:grid-cols-2 gap-5 md:grid-cols-3 xl:grid-cols-5">
						{team.map((member: any) => (
							<Member
								name={member.name}
								designation={member.designation}
								image={urlFor(member.image).url()}
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Team;

export async function getServerSideProps(context: any) {
	const query = `
      *[_type == "team"] | order(doy asc){
        name,
        designation,
        image
      }
    `;
	const sanityResponse = await client.fetch(query);

	console.log(sanityResponse);

	return {
		props: {
			team: sanityResponse,
		},
	};
}
