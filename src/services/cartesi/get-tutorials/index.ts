/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import web3 from "web3";
import { FunctionsInspectEnum } from "../../../utils/enums";
import DataSanitizer from "../../../utils/sanitizeData/index";

async function GetTutorials(data: any): Promise<any> {
	const { sanitizeArrayOfObjects } = new DataSanitizer();
	const localStorareUser = localStorage.getItem("address");

	const payload = {
		function_id: FunctionsInspectEnum.GET_TUTORIALS,
		address: localStorareUser,
		page: data.page,
		limit: data.limit,
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
		if (response.data?.reports?.length === 0) {
			return [];
		}
		const parsedData = response.data.reports[0].payload;
		const regularString = web3.utils.hexToAscii(parsedData);
		const arrayOfString = regularString.split("\n");
		const arrayOfObjects = sanitizeArrayOfObjects(arrayOfString);

		return arrayOfObjects.length > 0 ? arrayOfObjects[0] : [];
	} catch (error) {
		return null;
	}
}

export default GetTutorials;