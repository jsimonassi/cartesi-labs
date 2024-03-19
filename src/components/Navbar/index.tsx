import React from "react";
import Logo from "../../assets/images/CartesiBlackLogo.svg";

export const Navbar = () => {
	return (
		

		<nav className="bg-white  fixed w-full z-20 top-0 start-0 border-b border-gray-200 ">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				
				<a href="https://flowbite.com/" className="flex items-center space-x-3 rtl:space-x-reverse">
					<img src={Logo} className="h-8" alt="Flowbite Logo"></img>
					<span className=" text-h4  ">cartesi</span>
				</a>
				
				<button className="bg-black rounded-md px-16 p-1 text-white flex justify-center text-body-lg font-semibold ">ADD TO</button>
				
			</div>
			
		</nav>

	);
};
