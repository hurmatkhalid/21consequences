import React from 'react';
import Image from 'next/image';

type Props = {};

const About = (props: Props) => {
	return (
		<div
			id="about"
			className="h-screen w-full snap-start flex justify-center items-center">
			<div className="flex flex-col md:flex-row justify-between w-full items-center px-4 md:px-20">
				{/* Image */}
				<div className="w-1/2 flex justify-center items-center">
					<Image src="/cycle.svg" alt="logo" height={900} width={900} />
				</div>
				{/* Description */}
				<div className="flex flex-col w-1/2 items-start justify-start space-y-4">
					<h1 className="font-bold text-4xl uppercase tracking-widest text-gray-300">
						About
					</h1>
					<p className="text-base leading-5 tracking-wider text-gray-400">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
						sint tempora labore tempore vitae voluptates odit nihil quam vel ab
						culpa mollitia magnam delectus voluptas, quo aut, reprehenderit
						illum? Omnis. Lorem ipsum dolor sit amet consectetur adipisicing
						elit. Eius excepturi libero fugit laborum nostrum cum officia
						similique, laboriosam corporis consequatur incidunt. Adipisci
						asperiores accusamus earum beatae nobis laboriosam eius qui? Lorem
						ipsum dolor sit, amet consectetur adipisicing elit. Officia
						repudiandae magnam, rem maxime neque error! Officia, ipsa beatae
						molestiae vitae accusamus illo cumque reprehenderit reiciendis harum
						adipisci sint necessitatibus rem.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
