import React from "react";
import ImgPython from "../../assets/images/Python.svg";

interface CardProps {
	info: any;
}

export const Card = ({ info }: CardProps) => {



	return (
		<div className=" border border-white rounded w-full text-start flex flex-col py-2 pl-4 ">

			<p className="text-white text-[16px] mb-1" >
				{info.title}
			</p >
			<p className="text-inputText text-label-md mb-2">
				Last Updated: {info.date}
			</p>
			<p className="text-inputText text-label-md mb-6">
				{info.text}
			</p>
			<div className="flex justify-between pr-2 items-center">
				<button className="outline-none outline border border-primary text-primary rounded px-3 py-1 w-24 mb-2 ">
					Start
				</button>
				<img src={ImgPython} alt="Python Logo" className="h-6 w-6" />
			</div>
		</div >
	);
};