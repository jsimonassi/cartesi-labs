/* eslint-disable @typescript-eslint/no-explicit-any */
import Web3 from "web3";
import { EtherPortal__factory } from "@cartesi/rollups";
import { FunctionsAdvanceEnum } from "../../../utils/enums";


async function AddLikeTutorial(data: any): Promise<void> {
	try {
		const localStorareUser = localStorage.getItem("address") || "";
		if (!localStorareUser) {
			return;
		}
		const payload = {
			function_id: FunctionsAdvanceEnum.CREATE_LIKE_TUTORIAL,
			address: localStorareUser,
			data: data,
		};
		const payloadString = JSON.stringify(payload);
		const web3 = new Web3(((window as any).ethereum));
		const ethersContract = new web3.eth.Contract(EtherPortal__factory.abi, process.env.ETHER_PORTAL_ADDRESS);
		await ethersContract.methods.depositEther(process.env.DAPP_ADDRESS as string, "0x").send({ from: localStorareUser, value: payloadString });
	} catch (error) {
		console.error("Error occurred while sending input:", error);
	}
	return;
}

export default AddLikeTutorial;

