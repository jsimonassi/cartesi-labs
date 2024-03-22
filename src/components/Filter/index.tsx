import React from "react";


export const Filter = () => {

	const inputs = [
		{
			name: "React"
		},
		{
			name: "Vue"
		},
		{
			name: "Python"
		},
		{
			name: "Sunodo"
		}
	];
	return (
		<div className="border rounded border-white w-1/3  ml-40 hidden lg:block" >
			<h1 className="text-white pt-2 pb-4 text-start pl-4" >Filter by tool:</h1>


			{inputs.map((input: any, index: number) => {
				return (

					<div className=" flex items-center gap-2 pl-9 " key={index}>
						<input type="checkbox" className="w-4 h-4 rounded border-2 border-primary bg-transparent appearance-none cursor-pointer transition checked:border-primary checked:bg-primary" />
						<h1 className="text-inputText">{input.name}</h1>

					</div>
				);

			})};


		</div>
	);
};