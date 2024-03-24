import React from "react";
import { TutorialsProvider } from "./Tutorial";

interface AppProviderProps {
    children: React.ReactNode;
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
	return (
		<TutorialsProvider>
			{children}
		</TutorialsProvider>
	);
};

export default AppProvider;
