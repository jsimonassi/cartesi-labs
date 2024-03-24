import { Tutorial } from "../../../types/Tutorial";

export const parseApiTutorialToAppTutorial = (apiTutorial: any): Tutorial => {
	
	const key = Object.keys(apiTutorial)[0];
	const tutorial: Tutorial = {
		id: apiTutorial[key].id,
		title: apiTutorial[key].title,
		description: apiTutorial[key].description,
		approximatedTime: apiTutorial[key].approximatedTime,
		address: apiTutorial[key].address,
		likes: apiTutorial[key].likes,
		updatedAt: apiTutorial[key].updatedAt ?? apiTutorial[key].createdAt,
		steps: apiTutorial[key].steps,
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