import React from "react";

interface IProps {
	totalPages: number;
	currentPage: number;
	onPageChange: (page: number) => void;
}

const Paginator: React.FC<IProps> = ({ totalPages, currentPage, onPageChange }) => {
	const getPageNumbers = () => {
		const pages = [];
		const maxVisiblePages = 1;

	
		pages.push(currentPage);

		for (let i = 1; i <= maxVisiblePages; i++) {
			if (currentPage - i > 0) {
				pages.unshift(currentPage - i);
			}
		}

		for (let i = 1; i <= maxVisiblePages; i++) {
			if (currentPage + i <= totalPages) {
				pages.push(currentPage + i);
			}
		}

		return pages;
	};

	return (
		<div className="flex justify-center items-center mt-5">
			{currentPage > 1 && (
				<button className="bg-white text-black p-2 mx-1 h-8 leading-4 rounded-full" onClick={() => onPageChange(currentPage - 1)}>
					&lt;
				</button>
			)}

			{getPageNumbers().map((page) => (
				<button
					key={page}
					className={`bg-primaryDark text-black p-2 mx-1 h-8 leading-4 rounded-full ${currentPage === page ? "font-bold" : ""}`}
					onClick={() => onPageChange(page)}
				>
					{page}
				</button>
			))}

			{currentPage < totalPages && (
				<button className="bg-white text-black p-2 h-8 leading-4 rounded-full ml-2" onClick={() => onPageChange(currentPage + 1)}>
					&gt;
				</button>
			)}
		</div>
	);
};


export default Paginator;