import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

type Props = {};

const About = (props: Props) => {
	return (
		<div
			id="about"
			className="h-screen w-full snap-start flex justify-center items-center">
			<div className="flex flex-col md:flex-row justify-center w-full items-center px-4 md:px-20">
				{/* Image */}
				<motion.div
					initial={{
						x: -200,
						opacity: 0,
					}}
					whileInView={{
						x: 0,
						opacity: 1,
					}}
					transition={{
						duration: 1.5,
					}}
					viewport={{ once: true }}>
					<Image src="/cycle.svg" alt="logo" height={600} width={600} />
				</motion.div>
				{/* Description */}
				<motion.div
					initial={{
						x: 200,
						opacity: 0,
					}}
					whileInView={{
						x: 0,
						opacity: 1,
					}}
					transition={{
						duration: 1.5,
					}}
					viewport={{ once: true }}
					className="flex flex-col w-1/2 items-start justify-start space-y-4">
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
						adipisci sint necessitatibus .
					</p>
				</motion.div>
			</div>
		</div>
	);
};

export default About;
