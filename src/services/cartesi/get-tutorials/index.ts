/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from "axios";
import web3 from "web3";
import { FunctionsInspectEnum } from "../../../utils/enums";
import DataSanitizer from "../../../utils/sanitizeData/index";
import { GetTutorialPageRequest } from "../../../types/Api";
import { PagedTutorialResponse } from "../../../types/Tutorial";
import { parseApiPageToAppPage } from "./parser";

async function getTutorials(data: GetTutorialPageRequest, name: string | null = null): Promise<PagedTutorialResponse> {
	const { sanitizeArrayOfObjects } = new DataSanitizer();
	const localStorageUser = localStorage.getItem("address");

	const payload: any = {
		function_id: FunctionsInspectEnum.GET_TUTORIALS,
		address: localStorageUser,
		page: data.page,
		limit: data.limit,
	};

	if(name){
		payload.name = name;
	}
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
			Promise.resolve({data: [], totalPages: 1, page: 1});
		}
		// debugger;
		const parsedData = response.data.reports[0].payload;
		const regularString = web3.utils.hexToAscii(parsedData);
		const arrayOfString = regularString.split("\n");
		const arrayOfObjects = sanitizeArrayOfObjects(arrayOfString);
		return arrayOfObjects.length > 0 && Object.keys(arrayOfObjects[0].data).length > 0 ? 
			parseApiPageToAppPage(arrayOfObjects[0]) : 
			Promise.resolve({data: [], totalPages: 1, page: 1});
	} catch (error) {
		return Promise.reject(error);
	}
}

export default getTutorials;