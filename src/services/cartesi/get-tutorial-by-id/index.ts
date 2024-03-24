/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import web3 from "web3";
import { FunctionsInspectEnum } from "../../../utils/enums";
import DataSanitizer from "../../../utils/sanitizeData/index";
import { Tutorial } from "../../../types/Tutorial";
import { parseApiTutorialToAppTutorial } from "./parser";

async function GetTutorialById(id: number): Promise<Tutorial> {
	const { replaceSpecialCharacters, sanitizeArrayOfObjects } = new DataSanitizer();

	const payload = {
		function_id: FunctionsInspectEnum.GET_TUTORIAL_BY_ID,
		id,
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
		const arrayOfString = regularString.split("\n");
		const arrayOfObjects = sanitizeArrayOfObjects(arrayOfString);
		console.log("OPAAA: ", arrayOfObjects);
		if(arrayOfObjects.length === 0 || !arrayOfObjects[0]){
			return Promise.reject("Tutorial not found");
		}
		return Promise.resolve(parseApiTutorialToAppTutorial(arrayOfObjects[0]));
	} catch (error) {
		return Promise.reject(error);
	}
}

export default GetTutorialById;