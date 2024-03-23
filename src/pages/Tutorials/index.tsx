import React, { useEffect, useState } from "react";
import StepSelectorGroup from "./components/StepSelectorGroup";
import { Tutorial } from "../../types/Tutorial";
import MarkdownTutorialPreview from "../../components/MarkdownTutorialPreview";
import DirectionButtonGroup from "./components/DirectionButtonGroup";
import AuthorInfos from "./components/AuthorInfos";
import { useNavigate, useParams } from "react-router";
import { getTutorials } from "../../services";

//TODO: Move to .env
const CARTESI_DISCORD_URL = "https://discord.gg/r8jEQCd3";

const Tutorials = () => {

	const [currentStep, setCurrentStep] = useState(0);
	const [tutorial, setTutorial] = useState<Tutorial | null>(null);
	const {tutorialId} = useParams();
	const navigate = useNavigate();

	useEffect(() => {
		getTutorials().then((tutorials) => {
			const tutorial = tutorials.find((tutorial) => tutorial.id === tutorialId);
			if (!tutorial) {
				console.error("Tutorial not found");
				navigate("/");
				return;
			}
			setTutorial(tutorial);
		}).catch((error) => {
			console.log("Error: ", error);
			setTutorial(null);
		});
	}, []);

	return (
		<div className="fixed top-0 left-0 w-full h-full flex p-12 bg-pageBackground">
			<div className="flex flex-col w-1/4 justify-center">
				<StepSelectorGroup
					currentStep={currentStep}
					onChangeStep={(newStep) => setCurrentStep(newStep)}
					steps={tutorial?.steps ?? []}
				/>
				<AuthorInfos 
					createdBy={tutorial?.createdBy ?? ""}
					lastUpdated={tutorial?.updatedAt ?? ""}
					tutorialDuration={tutorial?.approximatedTime ?? 0}
					onReportProblem={() => location.href = CARTESI_DISCORD_URL}
				/>
			</div>
			<div className=" w-3/4 flex-col">
				{
					currentStep === 0 ?
						<div className=" justify-center items-center">
							<h3 className="text-white text-h3 font-700 mt-8 ml-8 w-full text-center">{tutorial?.title}</h3>
							<p className="text-secondaryText text-label-md font-500 ml-8 text-center">{tutorial?.description}</p>
						</div>
						: null
				}
				<MarkdownTutorialPreview source="" />
				<DirectionButtonGroup
					onBack={() => setCurrentStep(currentStep - 1)}
					onNext={() => setCurrentStep(currentStep + 1)}
					onBackEnabled={currentStep > 0}
					onNextEnabled={tutorial && currentStep < tutorial.steps.length - 1 ? true : false}
				/>
			</div>
		</div>
	);
};

export default Tutorials;