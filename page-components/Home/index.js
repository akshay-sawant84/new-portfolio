import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowDown } from 'react-icons/fa6';
import { renderCanvas } from './renderCanvas';
import Type from './type';

function Home() {
	useEffect(() => {
		renderCanvas();
	}, []);

	return (
		<div>
			<div className="upper-section">
				<h1 className="sr-only">
					Hello I&apos;m Dale Larroder, I&apos;m a software developer, and I
					love building things for the web.
				</h1>
				<div className="relative z-10 flex h-[calc(100vh-81px)] items-center md:h-[calc(100vh-116px)]">
					<div className="mx-auto w-screen max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0">
						<div className="-mt-36">
							<div className="flex cursor-default flex-col space-y-2">
								<h1 className="text-3xl pb-2 heading">
									Hi There!{' '}
									<span className="wave" role="img" aria-labelledby="wave">
										👋🏻
									</span>
								</h1>
								<h1 className="text-5xl font-semibold sm:text-7xl md:text-8xl xl:text-8xl">
									I&apos;m Akshay Sawant
								</h1>
								<div className="pt-4 text-black antialiased dark:text-white">
									<Type />
								</div>
							</div>
						</div>
					</div>
				</div>
				<canvas
					className="bg-skin-base pointer-events-none absolute inset-0"
					id="canvas"
				/>
				<motion.div
					className="scroll-down-arrow"
					animate={{ y: [0, 20, 0] }}
					transition={{ repeat: Infinity }}
				>
					<FaArrowDown size={40} />
				</motion.div>
			</div>
			<div className="mx-auto w-screen max-w-3xl px-4 sm:px-9 xl:max-w-5xl xl:px-0">
				<div className="grid mt-6 grid-cols-2 gap-4">
					<div className="">
						<h1>dkcnonodo</h1>
					</div>
					<div className="flex justify-center items-center">
						<div className="w-96">
							<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
								<path
									fill="#FF0066"
									d="M37.3,-30.3C47.5,-17,54.3,-1.5,53.3,15.9C52.3,33.4,43.6,52.8,27.8,62.1C12.1,71.3,-10.7,70.4,-29.1,61.2C-47.6,52.1,-61.8,34.7,-63.2,17.5C-64.7,0.4,-53.4,-16.6,-40.7,-30.5C-28.1,-44.4,-14,-55.3,-0.2,-55.1C13.6,-54.9,27.1,-43.7,37.3,-30.3Z"
									transform="translate(100 100)"
								/>
							</svg>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Home;
