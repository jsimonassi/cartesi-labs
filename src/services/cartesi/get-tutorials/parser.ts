import { PagedTutorialResponse, Tutorial } from "../../../types/Tutorial";

export const parseApiPageToAppPage = (apiTutorial: any): PagedTutorialResponse => {
	const tutorialList: Tutorial[] = [];

	Object.keys(apiTutorial.data).forEach((key) => {
		const tutorial: Tutorial = {
			id: apiTutorial.data[key].id,
			title: apiTutorial.data[key].title,
			description: apiTutorial.data[key].description,
			approximatedTime: apiTutorial.data[key].approximatedTime,
			address: apiTutorial.data[key].address,
			likes: apiTutorial.data[key].likes,
			updatedAt: apiTutorial.data[key].updatedAt ?? apiTutorial.data[key].createdAt,
			steps: apiTutorial.data[key].steps,
			toolTags: []
		};
		tutorialList.push(tutorial);
	});

	return {
		data: tutorialList,
		page: apiTutorial.page,
		totalPages: apiTutorial.totalPages
	};
};

// {
//     "data": {
//         "1": {
//             "id": 1,
//             "title": "Teste",
//             "description": "aaa",
//             "approximatedTime": "90",
//             "address": "",
//             "likes": 0,
//             "updatedAt": null,
//             "createdAt": "2024-03-24 00:44:21",
//             "steps": [
//                 {
//                     "id": 1,
//                     "title": "Title",
//                     "content": "aaaaaa",
//                     "tutorial_id": 1
//                 }
//             ],
//             "tags": [
//                 {
//                     "name": "Python",
//                     "tutorial_id": 1,
//                     "icon": "Python"
//                 }
//             ]
//         }
//     },
//     "page": 0,
//     "limit": 10,
//     "totalQuantity": 1,
//     "totalPages": 1
// }