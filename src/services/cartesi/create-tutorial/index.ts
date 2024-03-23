/* eslint-disable @typescript-eslint/no-explicit-any */
import Web3 from "web3";
import { FunctionsAdvanceEnum } from "../../../utils/enums";
import { Tutorial } from "../../../types/Tutorial";
import { IInputBox__factory } from "@cartesi/rollups/";


async function AddTutorial(data: Tutorial): Promise<void> {
	try {
		const web3 = new Web3((window as any).ethereum);
		const inputContract = new web3.eth.Contract(
			IInputBox__factory.abi,
			process.env.REACT_APP_INPUTBOX_ADDRESS as string
		);
		const localStorareUser = localStorage.getItem("address") || "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";
		if (!localStorareUser) {
			return;
		}
		const input = {
			function_id: FunctionsAdvanceEnum.CREATE_TUTORIAL,
			address: localStorareUser,
			data: data,
		};
		const inputString = JSON.stringify(input);
		const inputHex = web3.utils.utf8ToHex(inputString);
		await inputContract.methods
			.addInput(process.env.REACT_APP_DAPP_ADDRESS as string, inputHex)
			.send({ from: localStorareUser });
	} catch (error) {
		console.error("Error occurred while sending input:", error);
	}
	return;
}

export default AddTutorial;

