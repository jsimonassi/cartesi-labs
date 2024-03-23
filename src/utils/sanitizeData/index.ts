/* eslint-disable @typescript-eslint/no-explicit-any */
class DataSanitizer {
	replaceSpecialCharacters(data: any) {
		const sanitizedData = JSON.parse(JSON.stringify(data).replace(/\\/g, ""));
		return sanitizedData;
	}
	sanitizeArrayOfObjects(arrayOfString: any[]) {
		const arrayOfObjects = arrayOfString && arrayOfString[0].length > 0
			? arrayOfString.map((string: any) => {
				const stringModified = string
					.replace(/None/g, "null")
					.replace(/'/g, "\"")
					.replace(/\\'/g, "")
					.replace(/False/g, "false")
					.replace(/[\u0080-\uFFFF]/g, function (match: any) {
						return "" + ("" + match.charCodeAt(0).toString(16)).slice(-4);
					});

				return JSON.parse(stringModified);
			})
			: [];

		return arrayOfObjects;
	}
}

export default DataSanitizer;