import React from 'react';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons';

type Props = {};

const Footer = (props: Props) => {
	return (
		<div className="border-t border-gray-500 px-[5%] pt-8 pb-6 text-white transition-all duration-500 ease-in-out">
			<div className="relative z-10 flex-1 self-start">
				<div>
					<div className="grid grid-cols-2 items-stretch justify-items-stretch gap-x-10 gap-y-4">
						<div className="">
							<h2 className="text-xl font-medium">Sitemap</h2>
							<div className="mt-6 flex flex-col space-y-4">
								<Link
									href="/home"
									className="w-fit text-lg font-medium leading-[1.4] text-gray-500 hover:text-white">
									Home
								</Link>
								<Link
									href="/home#about"
									className="w-fit text-lg font-medium leading-[1.4] text-gray-500 hover:text-white">
									About
								</Link>
								<Link
									href="/home#tokenomics"
									className="w-fit text-lg font-medium leading-[1.4] text-gray-500 hover:text-white">
									Tokenomics
								</Link>
							</div>
						</div>
						<div>
							<div className="">
								<h2 className="text-xl font-medium">Links</h2>
								<div className="mt-4 flex flex-col items-start">
									<Link
										href="https://twitter.com/0xTheRanch"
										className="flex items-center">
										<div className="flex cursor-pointer items-center hover:text-white">
											<SocialIcon
												url="https://twitter.com/0xTheRanch"
												fgColor="gray"
												bgColor="transparent"
											/>
											<p className="text-lg font-medium text-gray-500 hover:text-white">
												Twitter
											</p>
										</div>
									</Link>

									<Link
										href="https://discord.gg/5UTKa8z8zh"
										className="flex items-center"
										target="_blank">
										<div className="flex cursor-pointer items-center hover:text-white">
											<img
												src="/discord.svg"
												className="ml-3 mr-2 h-8 object-contain"
												alt=""
											/>
											<p className="text-lg font-medium text-gray-500 hover:text-white">
												Discord
											</p>
										</div>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="mt-5 flex w-full items-center justify-center space-x-2 grayscale">
					<img src="/Logo/tp-trbc(bulls).png" alt="" className="w-24" />
					<p>©</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
