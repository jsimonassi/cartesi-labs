import { Tutorial } from "../../../types/Tutorial";

export const parseApiTutorialToAppTutorial = (apiTutorial: any): Tutorial => {

	const tutorial: Tutorial = {
		id: apiTutorial[1].id,
		title: apiTutorial[1].title,
		description: apiTutorial[1].description,
		approximatedTime: apiTutorial[1].approximatedTime,
		address: apiTutorial[1].address,
		likes: apiTutorial[1].likes,
		updatedAt: apiTutorial[1].updatedAt ?? apiTutorial[1].createdAt,
		steps: apiTutorial[1].steps,
		toolTags: []
	};
	return tutorial;
};

// {
//     "1": {
//         "id": 1,
//         "title": "Teste",
//         "description": "aaa",
//         "approximatedTime": "90",
//         "address": "",
//         "likes": 0,
//         "updatedAt": null,
//         "createdAt": "2024-03-24 00:44:21",
//         "steps": [
//             {
//                 "id": 1,
//                 "title": "Title",
//                 "content": "aaaaaa",
//                 "tutorial_id": 1
//             }
//         ],
//         "tags": [
//             {
//                 "name": "Python",
//                 "tutorial_id": 1,
//                 "icon": "Python"
//             }
//         ]
//     }
// }