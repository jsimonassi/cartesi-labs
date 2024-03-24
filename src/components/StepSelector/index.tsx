import React from "react";

interface IProps {
  step: number;
  title: string;
  isSelected: boolean;
  onClick: () => void;
  close?: (step: number) => void;
}

const StepSelector = (props: IProps) => {
	return (
		<div
			className={`mb-4 p-4 flex h-16 items-center w-full rounded-md cursor-pointer hover:opacity-70 transition-all duration-400 ${
				props.isSelected
					? "bg-primaryDark"
					: "border border-primaryDark text-white"
			}`}
			onClick={props.onClick}
		>
			<div
				className={`flex items-center justify-center w-8 h-8 rounded-full border-2 border-primaryDark ${
					props.isSelected ? "bg-pageBackground" : ""
				}`}
			>
				<p
					className={`text-h6 font-700 ${props.isSelected ? "text-white" : ""}`}
				>
					{props.step}
				</p>
			</div>
			<p className="font-500 text-label-md ml-2 whitespace-normal break-all">
				{props.title}
			</p>
			{props.close ? (
				<span
					className="cursor-pointer text-red-600 ml-auto text-label-lg"
					onClick={(e) => {
						e.preventDefault();
						e.stopPropagation();
						if (props.close) props.close(props.step);
					}}
				>
          X
				</span>
			) : (
				<></>
			)}
		</div>
	);
};

export default StepSelector;
