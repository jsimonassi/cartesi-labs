import React from "react";
import ImgPython from "../../assets/images/Python.svg";
import { Tutorial } from "../../types/Tutorial";
import moment from "moment";

interface CardProps {
	info: Tutorial;
	onStartRequest: () => void;
}

export const Card = ({ info, onStartRequest }: CardProps) => {


	return (
		<div className=" border border-white rounded w-full min-w-44 text-start flex flex-col py-2 pl-4 ">

			<p className="text-white text-[16px] mb-1" >
				{info.title}
			</p >
			<p className="text-inputText text-label-md mb-2">
				Last Updated: {moment(info.updatedAt).format("DD/MM/YYYY")}
			</p>
			<p className="text-inputText text-label-md mb-6">
				{info.description}
			</p>
			<div className="flex justify-between pr-2 items-center">
				<button className="outline-none outline border border-primary text-primary rounded px-3 py-1 w-24 mb-2 " onClick={onStartRequest}>
					Start
				</button>
				<img src={ImgPython} alt="Python Logo" className="h-6 w-6" />
			</div>
		</div >
	);
};