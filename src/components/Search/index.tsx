import React from "react";
import SearchImg from "../../assets/images/Search.svg";

interface IProps {
	value: string;
	onChange: (value: string) => void;
}

export const Search = ({value, onChange}: IProps) => {
	return (
		<div className="relative w-full">
			<input
				type="text"
				className="w-full rounded outline-none bg-transparent border border-white text-white py-2 pl-2 pr-8"
				placeholder="Search"
				value={value}
				onChange={(e) => onChange(e.target.value)}
			/>
			<img
				className="absolute top-2 right-1"
				src={SearchImg}
				alt="Search Image"
			/>
		</div>
	);
};
