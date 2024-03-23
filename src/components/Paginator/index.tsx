import React from "react";

interface IProps {
    totalPages: number;
    currentPage: number;
}

const Paginator = ({totalPages, currentPage}: IProps) => {

	return (
		<div>
			<div className="flex justify-center items-center mt-5">
				{/* <button className="bg-white text-black p-2 rounded-l-md">Previous</button>
				<button className="bg-white text-black p-2 rounded-r-md">Next</button> */}
			</div>
		</div>
	);
};

export default Paginator;