import React, { useEffect, useMemo, useState } from "react";
import Background from "../../assets/images/CartesiImageBg.png";
import LogoCartesiLabs from "../../assets/images/LogoCartesiLabs.svg";
import { Filter } from "../../components/Filter";
import { Search } from "../../components/Search";
import { Card } from "../../components/Card";
import { Tutorial } from "../../types/Tutorial";
import Spinner from "../../components/loaders/Spinner";
import { useNavigate } from "react-router";
import { useTutorials } from "../../contexts/Tutorial";

export const Home = () => {

	const {currentTutorialsPage, } = useTutorials();
	const currentTutorials = useMemo(() => {
		if (currentTutorialsPage) {
			return currentTutorialsPage.tutorials;
		}
		return null;
	}, [currentTutorialsPage?.currentPage]);

	const navigator = useNavigate();

	useEffect(() => {
		// const run = async () => {
		// 	const tutorials = await GetTutorials({ page: 1, limit: 10 });
		// 	setCurrentTutorials(tutorials);
		// };
		// run();
	}, []);

	return (
		<div className="bg-black">
			<img src={Background} className="absolute inset-0 w-full object-cover h-[260px] " alt="Background Image"></img>
			{/* <Navbar /> */}
			<div className="w-full pt-6 pb-8 flex justify-center items-center relative mt-20">
				<img src={LogoCartesiLabs} alt="Logo Cartesi Labs" className="max-w-[232px] w-full" />
			</div>

			<div className="bg-radial-gradient w-full h-screen" >
				<div className="pt-20 flex items-start lg:w-3/4">
					<Filter />
					<div className="flex pl-7 pr-7 lg:pr-0 flex-1 flex-col mb-20">
						<Search />
						{
							currentTutorials == null ?
								<div className="w-full mt-8 flex justify-center items-center">
									<Spinner color="primary" size={50} />
								</div>
								:
								<div className="w-full grid lg:grid-cols-2 grid-cols-1 mt-3 gap-5">
									{
										currentTutorials.map((card: Tutorial, index: number) =>
											<Card
												info={card}
												key={index}
												onStartRequest={() => navigator(`/tutorial/${card.id}`)}
											/>
										)
									}
								</div>
						}
					</div>
				</div>
			</div>





		</div>
	);
};
