import mockTutorials from "../constants/mocks";
import { Tutorial } from "../types/Tutorial";

//TODO: Validar com o time de backend:
// Essa resposta será paginada?
// Será uma request https?
export const getTutorials = async () => {
	return new Promise<Tutorial[]>((resolve) => {
		setTimeout(() => {
			resolve(mockTutorials);
		}, 2000);
	});
};