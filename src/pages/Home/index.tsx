import React from "react";
import { Navbar } from "../../components/Navbar";
import Background from "../../assets/images/CartesiImageBg.png";
import LogoCartesiLabs from "../../assets/images/LogoCartesiLabs.svg";
import { Filter } from "../../components/Filter";
import { Search } from "../../components/Search";
import { Card } from "../../components/Card";

export const Home = () => {

	const Cards = [
		{
			title: "Creating first dApp with sunodo and Python",
			date: "20/03/2024",
			text: "Discover the fundamentals of decentralized application development as you create your inaugural dApp with Sunodo's user-friendly platform.",
		},
		{
			title: "Creating first dApp with sunodo and Python",
			date: "20/03/2024",
			text: "Discover the fundamentals of decentralized application development as you create your inaugural dApp with Sunodo's user-friendly platform.",
		},
		{
			title: "Creating first dApp with sunodo and Python",
			date: "20/03/2024",
			text: "Discover the fundamentals of decentralized application development as you create your inaugural dApp with Sunodo's user-friendly platform.",
		},
		{
			title: "Creating first dApp with sunodo and Python",
			date: "20/03/2024",
			text: "Discover the fundamentals of decentralized application development as you create your inaugural dApp with Sunodo's user-friendly platform.",
		},
		{
			title: "Creating first dApp with sunodo and Python",
			date: "20/03/2024",
			text: "Discover the fundamentals of decentralized application development as you create your inaugural dApp with Sunodo's user-friendly platform.",
		},
		{
			title: "Creating first dApp with sunodo and Python",
			date: "20/03/2024",
			text: "Discover the fundamentals of decentralized application development as you create your inaugural dApp with Sunodo's user-friendly platform.",
		},
		{
			title: "Creating first dApp with sunodo and Python",
			date: "20/03/2024",
			text: "Discover the fundamentals of decentralized application development as you create your inaugural dApp with Sunodo's user-friendly platform.",
		}
	];
	return (

		<div className="bg-black">
			<img src={Background} className="absolute inset-0 w-full object-cover h-[260px] " alt="Background Image"></img>
			<Navbar />
			<div className="w-full pt-6 pb-8 flex justify-center items-center relative mt-20">
				<img src={LogoCartesiLabs} alt="Logo Cartesi Labs" className="max-w-[232px] w-full" />
			</div>

			<div className="bg-radial-gradient w-full" >
				<div className="pt-20 flex items-start lg:w-3/4">
					<Filter />
					<div className="flex pl-7 pr-7 lg:pr-0 flex-1 flex-col mb-20">
						<Search />
						<div className="w-full grid lg:grid-cols-2 grid-cols-1 mt-3 gap-5">
							{Cards.map((card: any, index: number) =>
								<Card info={card} key={index} />
							)}
						</div>
					</div>
				</div>
			</div>





		</div>
	);
};
