//FOR HEADER RELATED WORK
import Image from 'next/image';
import { SocialIcon } from 'react-social-icons';

//for including images in nextjs we need this
const Header = () => {
	const styleLink =
		'text-gray-500 font-semibold tracking-widest cursor-pointer uppercase transitions';

	//this is called functional component, we include functions in this
	return (
		//we write the html and css code here
		<div className="fixed top-0">
			<div className="px-6 py-2 h-20 flex items-center w-screen justify-between">
				{/* Image */}
				<div className="flex">
					<div className="flex items-center space-x-2 sm:border-r sm:border-gray-600">
						<Image src="/Logo.png" height={40} width={40} alt="Logo" />
						<p className="tracking-widest font-semibold pr-5 text-gray-100 uppercase">
							21Consequences
						</p>
					</div>
					<div className="sm:flex items-center pl-7 hidden space-x-4 md:space-x-10 lg:space-x-12">
						<p className={styleLink}>Home</p>
						<p className={styleLink}>Resources</p>
						<p className={styleLink}>Library</p>
						<p className={styleLink}>Team</p>
					</div>
				</div>
				<div>
					<div className="flex items-center space-x-2">
						<SocialIcon
							url="https://instagram.com/21consequences/"
							fgColor="gray"
							bgColor="transparent"
						/>
						<SocialIcon
							url="https://twitter.com/21consequences/"
							fgColor="gray"
							bgColor="transparent"
						/>
						<SocialIcon
							url="https://www.linkedin.com/company/21consequences/"
							fgColor="gray"
							bgColor="transparent"
						/>
						<SocialIcon
							url="https://discord.gg/FSm4QqcAKd/"
							fgColor="gray"
							bgColor="black"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
