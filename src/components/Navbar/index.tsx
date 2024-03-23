import React from "react";
import Logo from "../../assets/images/CartesiWhiteLogo.svg";
import AddTutorial from "../../services/cartesi/create-tutorial";
import mockTutorials from "../../constants/mocks";
export const Navbar = () => {
	const Add = async () => {
		await AddTutorial(mockTutorials[0]);
	};

	return (
		<nav className="bg-transparent  fixed w-full z-20 top-0 start-0 ">
			<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
				<a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
					<img src={Logo} className="h-8" alt="Flowbite Logo"></img>
					<span className=" text-h4 text-white  ">cartesi</span>
				</a>

				<button className="bg-primary rounded-md px-16 p-1 text-black flex justify-center text-body-lg font-semibold ">
          ADD TO
				</button>
				<button
					onClick={() => Add()}
					className="bg-primary rounded-md px-16 p-1 text-black flex justify-center text-body-lg font-semibold "
				>
          add tutorial
				</button>
			</div>
		</nav>
	);
};
