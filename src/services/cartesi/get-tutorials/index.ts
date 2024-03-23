import axios from "axios";
import web3 from "web3";
import { FunctionsInspectEnum } from "../../../utils/enums";
import DataSanitizer from "../../../helper/sanitizeData/index";

async function GetTutorials(data: any): Promise<any> {
	const { replaceSpecialCharacters, sanitizeArrayOfObjects } = new DataSanitizer();
	const localStorareUser = localStorage.getItem("address");

	const payload = {
		function_id: FunctionsInspectEnum.GET_TUTORIALS,
		address: localStorareUser,
		page: data.page,
		limit: data.limit,
	};
	const stringToEncode = JSON.stringify(payload);
	const url = `${process.env.INSPECT_URL}/${stringToEncode}`;

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
		let arrayOfString = regularString.split("\n");
		arrayOfString = replaceSpecialCharacters(arrayOfString);
		const arrayOfObjects = sanitizeArrayOfObjects(arrayOfString);

		return arrayOfObjects;
	} catch (error) {
		return null;
	}
}

export default GetTutorials;