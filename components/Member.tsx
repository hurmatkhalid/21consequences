import React from 'react';
import Image from 'next/image';

type Props = {
	name: string;
	designation: string;
	image: any;
};

const Member = ({ name, designation, image }: Props) => {
	return (
		<div className="relative h-[640px]">
			<div
				className="absolute bottom-0 z-10 h-full w-full "
				style={{
					background: 'rgba(0,0,0,0.4)',
					backgroundImage: `linear-gradient(to top, rgba(0,0,0, 0.4) 0, rgba(0,0,0,0) 60%, rgba(0,0,0,0.4) 100%)`,
				}}
			/>
			<div>
				<Image
					//@ts-ignore
					src={image}
					alt={name}
					layout="fill"
					objectFit="cover"
					objectPosition="center"
				/>
			</div>
			<div className="absolute inset-0 z-20 flex flex-col justify-center items-center">
				<h1>{name}</h1>
			</div>
		</div>
	);
};

export default Member;
