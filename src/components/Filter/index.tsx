import React from "react";
import TAGS from "../../constants/options";

interface IProps {
	values: string[];
	onFilterSelected: (selected: string[]) => void;
}


export const Filter = (props: IProps) => {

	return (
		<div className="border rounded border-white w-1/3  ml-40 hidden lg:block" >
			<h1 className="text-white pt-2 pb-4 text-start pl-4" >Filter by tool:</h1>
			{TAGS.map((input, index) => {
				return (
					<div className=" flex items-center gap-2 pl-9 " key={index}>
						<input
							type="checkbox"
							className="w-4 h-4 rounded border-2 border-primary bg-transparent appearance-none cursor-pointer transition checked:border-primary checked:bg-primary"
							checked={props.values.includes(input.name)}
							onChange={(e) => {
								if (e.target.checked) {
									props.onFilterSelected([...props.values, input.name]);
								} else {
									props.onFilterSelected(props.values.filter((value) => value !== input.name));
								}
							}}
						/>
						<h1 className="text-inputText">{input.name}</h1>
					</div>
				);
			})};
		</div>
	);
};