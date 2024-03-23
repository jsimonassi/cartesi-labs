import React from "react";
import Logo from "../../assets/images/CartesiWhiteLogo.svg";
import BaseBtn from "../buttons/BaseBtn";
export const Navbar = () => {

	return (
		<nav className="bg-transparent  fixed w-full z-20 top-0 start-0 ">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
					<img src={Logo} className="h-8" alt="Flowbite Logo"></img>
					<span className=" text-h4 text-white  ">cartesi</span>
				</a>
				<BaseBtn size="md" onClick={() => null} >Add Tutorial</BaseBtn>
			</div>
		</nav>
	);
};
