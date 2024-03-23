import React from "react";
import BaseBtn from "../../buttons/BaseBtn";

interface IProps {
	isOpen: boolean;
	onClose: () => void;
	onConnect: () => void;
}

const NeedWalletModal = ({ isOpen, onClose, onConnect }: IProps) => {

	return (
		<>
			{isOpen ? (
				<>
					<div
						className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
					>
						<div className="relative w-auto my-6 mx-auto max-w-3xl">
							{/*content*/}
							<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-cardBackground outline-none focus:outline-none">
								{/*header*/}
								<div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
									<h3 className="text-3xl font-semibold text-white">
										MetaMesk Login
									</h3>
									<button
										className="p-1 ml-auto bg-transparent border-0 text-white opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
										onClick={() => onClose()}
									>
										<span className="bg-transparent text-white opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
											×
										</span>
									</button>
								</div>
								{/*body*/}
								<div className="relative p-6 flex-auto">
									<p className="my-4 text-blueGray-500 text-lg leading-relaxed text-white">
									Log in with your metamask wallet to create your tutorial. Readers can contribute donations to encourage your work.
									</p>
								</div>
								{/*footer*/}
								<div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
									<button
										className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() => onClose()}
									>
										Close
									</button>
									<BaseBtn onClick={onConnect} size="md">Go to MetaMask</BaseBtn>
								</div>
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
		</>
	);
};

export default NeedWalletModal;