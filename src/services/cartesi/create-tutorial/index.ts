/* eslint-disable @typescript-eslint/no-explicit-any */
import Web3 from "web3";
import { FunctionsAdvanceEnum } from "../../../utils/enums";
import { Tutorial } from "../../../types/Tutorial";
import { IInputBox__factory } from "@cartesi/rollups/";
import { WALLET_CACHE_KEY } from "../../../constants";


async function addTutorial(data: Tutorial): Promise<void> {
	try {
		const web3 = new Web3((window as any).ethereum);
		const inputContract = new web3.eth.Contract(
			IInputBox__factory.abi,
			process.env.REACT_APP_INPUTBOX_ADDRESS as string
		);
		const localStorageUser = localStorage.getItem(WALLET_CACHE_KEY);
		if (!localStorageUser) {
			return Promise.reject("User not logged in");
		}
		const input = {
			function_id: FunctionsAdvanceEnum.CREATE_TUTORIAL,
			address: localStorageUser,
			data: data,
		};
		const inputString = JSON.stringify(input);
		const inputHex = web3.utils.utf8ToHex(inputString);
		await inputContract.methods
			.addInput(process.env.REACT_APP_DAPP_ADDRESS as string, inputHex)
			.send({ from: localStorageUser });
	} catch (error) {
		console.error("Error occurred while sending input:", error);
		return Promise.reject(error);
	}
	return;
}

export default addTutorial;

