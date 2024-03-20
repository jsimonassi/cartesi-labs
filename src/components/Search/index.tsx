import React from "react";
import SearchImg from "../../assets/images/Search.svg";

export const Search = () => {
	return (
		<div className="relative w-full">
			<input
				type="text"
				className="w-full rounded outline-none bg-transparent border border-white text-white py-2 pl-2 pr-8"
				placeholder="Search"
			/>
			<img
				className="absolute top-2 right-1"
				src={SearchImg}
				alt="Search Image"
			/>
		</div>
	);
};
