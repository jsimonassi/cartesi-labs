import React from "react";
import { Tutorial } from "../../types/Tutorial";
import moment from "moment";
import { ToolIcon } from "./components/ToolIcon";

interface CardProps {
	info: Tutorial;
	onStartRequest: () => void;
}

export const Card = ({ info, onStartRequest }: CardProps) => {

	console.log("INFO: ", info);

	return (
		<div className=" border border-white rounded w-full min-w-44 text-start flex flex-col py-2 pl-4 ">
			<p className="text-white text-[16px] mb-1">{info.title}</p>
			<p className="text-inputText text-label-md mb-2">
				Last Updated: {moment(info.updatedAt).format("DD/MM/YYYY")}
			</p>
			<p className="text-inputText text-label-md mb-6">{info.description}</p>
			<div className="flex w-full justify-between self-end pr-2 items-center mt-auto">
				<button
					className="outline-none border border-primary text-primary rounded px-3 py-1 w-24 mr-2"
					onClick={onStartRequest}
				>
					Start
				</button>
				<div className="flex">
					{
						info.toolTags.slice(0, 3).map((tool, key) => (
							<div key={key}>
								<ToolIcon icon={tool.icon} />
							</div>
						))
					}
				</div>
			</div>
		</div>
	);
};
