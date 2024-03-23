/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import web3 from "web3";
import { FunctionsInspectEnum } from "../../../utils/enums";
import DataSanitizer from "../../../utils/sanitizeData/index";
import { Tutorial } from "../../../types/Tutorial";

async function GetTutorialById(id: number): Promise<Tutorial> {
	const { replaceSpecialCharacters, sanitizeArrayOfObjects } = new DataSanitizer();

	const payload = {
		function_id: FunctionsInspectEnum.GET_TUTORIAL_BY_ADDRESS,
		tutorialId: id,
	};
	const stringToEncode = JSON.stringify(payload);
	const url = `${process.env.REACT_APP_INSPECT_URL}/${stringToEncode}`;

	const config = {
		url: url,
		headers: {
			Accept: "application/json",
		},
	};

	try {
		const response = await axios.get(config.url);
		const parsedData = response.data.reports[0].payload;
		const regularString = web3.utils.hexToAscii(parsedData);
		//TODO: Validate backend response
        
		// return Promise.resolve(regularString as Tutorial);
		return Promise.reject("Not implemented");
	} catch (error) {
		return Promise.reject(error);
	}
}

export default GetTutorialById;