import React, { createContext, useContext, useState } from "react";
import { PagedTutorialResponse, Tutorial } from "../types/Tutorial";
import getTutorials from "../services/cartesi/get-tutorials";
import GetTutorialById from "../services/cartesi/get-tutorial-by-id";
import addTutorial from "../services/cartesi/create-tutorial";

interface TutorialsContextData {
	currentTutorialsPage: PagedTutorialResponse | null;
	getTutorialsByName: (name: string) => void;
	onRequestNextPage: (newPage: number) => void;
	getTutorialById: (id: number) => Promise<Tutorial>;
	saveTutorial: (tutorial: Tutorial) => Promise<void>;
}

interface TutorialsProviderProps {
	children: React.ReactNode;
}

const PAGE_SIZE = 1;

export const TutorialsContext = createContext({} as TutorialsContextData);

const TutorialsProvider: React.FC<TutorialsProviderProps> = ({ children }) => {

	const [currentTutorialsPage, setCurrentTutorialsPage] = useState<PagedTutorialResponse | null>(null);

	const onRequestNextPage = (newPage: number) => {
		setCurrentTutorialsPage(null);
		getTutorials({ page: newPage, limit: PAGE_SIZE })
			.then((tutorials) => {
				setCurrentTutorialsPage(tutorials);
			}).catch((error) => {
				setCurrentTutorialsPage({data: [], totalPages:1, page: 1});
				console.log(error);
			});
	};

	const getTutorialsByName = (name: string) => {
		//TODO: Validar paginação
		let nextPage = 0;
		if(currentTutorialsPage){
			nextPage = currentTutorialsPage.page + 1;
		}
		setCurrentTutorialsPage(null);
		getTutorials({ page: nextPage, limit: PAGE_SIZE }, name)
			.then((tutorials) => {
				console.log("TUTORIALS: ", tutorials);
				setCurrentTutorialsPage(tutorials);
			}).catch((error) => {
				setCurrentTutorialsPage({data: [], totalPages:1, page: 1});
				console.log(error);
			});
	};

	const getTutorialById = (id: number) => {
		return GetTutorialById(id);
	};

	const saveTutorial = (tutorial: Tutorial) => {
		return addTutorial(tutorial);
	};

	return (
		<TutorialsContext.Provider
			value={{
				currentTutorialsPage,
				getTutorialsByName,
				onRequestNextPage,
				getTutorialById,
				saveTutorial
			}}>
			{children}
		</TutorialsContext.Provider>
	);
};

const useTutorials = () => {
	const context = useContext(TutorialsContext);

	return context;
};

export { TutorialsProvider, useTutorials };
