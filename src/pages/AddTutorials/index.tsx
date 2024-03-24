import React, { useState } from "react";
import { Navbar } from "../../components/Navbar";
import { Tutorial, TutorialStep } from "../../types/Tutorial";
import TutorialTitleEdit from "./TutorialTitle";
import TutorialSteps from "./TutorialSteps";

const createEmptyTutorial = () => {
	const tutorial: Tutorial = {
		approximatedTime: 0,
		description: "",
		steps: [],
		title: "",
		likes: 0,
		toolTags: [],
		id: "",
		updatedAt: "",
		address: "",
	};

	return tutorial;
};

export enum AddTutorialPage {
	Info,
	Steps,
}

const AddTutorials = () => {
	const [tutorial, setTutorial] = useState<Tutorial>(createEmptyTutorial());
	const [steps, setSteps] = useState<TutorialStep[]>([]);
	const [page, setPage] = useState(AddTutorialPage.Info);

	return (
		<div className="bg-tutorialBackground w-screen h-screen">
			<Navbar />
			<div className="flex justify-center items-center w-full">
				{page === AddTutorialPage.Info ? (
					<TutorialTitleEdit
						tutorial={tutorial}
						setTutorial={setTutorial}
						setPage={setPage}
					/>
				) : (
					<TutorialSteps
						tutorial={tutorial}
						steps={steps}
						setSteps={setSteps}
						setPage={setPage}
					/>
				)}
			</div>
		</div>
	);
};

export default AddTutorials;
