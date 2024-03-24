/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import Logo from "../../assets/images/CartesiWhiteLogo.svg";
import BaseBtn from "../buttons/BaseBtn";
import { WALLET_CACHE_KEY } from "../../constants";
import { useNavigate } from "react-router-dom";
import NeedWalletModal from "../modals/NeedWalletModal";


export const Navbar = () => {

	const navigate = useNavigate();
	const [showWalletExplain, setShowWalletExplain] = useState(false);

	const requestUserWallet = async () => {
		if ((window as any).ethereum) {
			(window as any).ethereum
				.request({ method: "eth_requestAccounts" })
				.then((res: string[]) => {
					localStorage.setItem(WALLET_CACHE_KEY, res[0]);
					navigate("/add-tutorials");
				});
		}
	};

	const handleAddTutorial = () => {
		const cachedWallet = localStorage.getItem(WALLET_CACHE_KEY);
		if (cachedWallet) {
			navigate("/add-tutorials");
			return;
		}
		setShowWalletExplain(true);
	};

	return (
		<div>
			<nav className="bg-transparent  fixed w-full z-20 top-0 start-0 ">
				<div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
					<a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
						<img src={Logo} className="h-8" alt="Flowbite Logo"></img>
						<span className=" text-h4 text-white  ">cartesi</span>
					</a>
					<BaseBtn size="md" onClick={handleAddTutorial} >Add Tutorial</BaseBtn>
				</div>
			</nav>
			<NeedWalletModal
				isOpen={showWalletExplain} 
				onClose={() => setShowWalletExplain(false)} 
				onConnect={() => {
					setShowWalletExplain(false);
					requestUserWallet();
				}}/>
		</div>
	);
};
