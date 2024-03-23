import React, { createContext, useContext, useState } from "react";
import { PagedTutorialResponse, Tutorial } from "../types/Tutorial";
import GetTutorials from "../services/cartesi/get-tutorials";
import GetTutorialById from "../services/cartesi/get-tutorial-by-id";

interface TutorialsContextData {
    currentTutorialsPage: PagedTutorialResponse | null;
    onRequestNextPage: () => void;
    onRequestPreviousPage: () => void;
    getTutorialById: (id: number) => Promise<Tutorial>;
}

interface TutorialsProviderProps {
    children: React.ReactNode;
}

const PAGE_SIZE = 10;

export const TutorialsContext = createContext({} as TutorialsContextData);

const TutorialsProvider: React.FC<TutorialsProviderProps> = ({ children }) => {

	const [currentTutorialsPage, setCurrentTutorialsPage] = useState<PagedTutorialResponse | null>(null);

	const onRequestNextPage = () => {
		let nextPage = 0;
		if(currentTutorialsPage){
			nextPage = currentTutorialsPage.page + 1;
		}
		setCurrentTutorialsPage(null);
		GetTutorials({ page: nextPage, limit: PAGE_SIZE })
			.then((tutorials) => {
				setCurrentTutorialsPage(tutorials);
			}).catch((error) => {
				//TODO: Validar error
				console.log(error);
			});
	};

	const onRequestPreviousPage = () => {
		//TODO: Implementar lógica para ir a página anterior
	};

	const getTutorialById = (id: number) => {
		//TODO: Implementar lógica para obtener tutorial por id
		return GetTutorialById(id);
	};

	return (
		<TutorialsContext.Provider
			value={{
				currentTutorialsPage,
				onRequestNextPage,
				onRequestPreviousPage,
				getTutorialById
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
