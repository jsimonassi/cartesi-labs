import React, { useEffect, useState } from "react";
import StepSelectorGroup from "./components/StepSelectorGroup";
import { Tutorial } from "../../types/Tutorial";
import ReadmePreview from "../../components/ReadmePreview";
import DirectionButtonGroup from "./components/DirectionButtonGroup";
import AuthorInfos from "./components/AuthorInfos";

const mockTutorial: Tutorial = {
	title: "Como fazer uma torta de maçã deliciosa",
	description: "Aprenda passo a passo como fazer uma torta de maçã clássica e deliciosa.",
	updatedAt: "2024-03-19",
	approximatedTime: 60,
	createdBy: "John Doe",
	steps: [
		{
			title: "Preparar os ingredientes",
			content: "Reúna todos os ingredientes necessários: maçãs, farinha, açúcar, manteiga, etc."
		},
		{
			title: "Preparar a massa",
			content: "Prepare a massa de torta misturando farinha, manteiga e água até obter uma massa homogênea."
		},
		{
			title: "Preparar o recheio",
			content: "Descasque as maçãs, corte em fatias finas e misture com açúcar e especiarias a gosto."
		},
		{
			title: "Montar a torta",
			content: "Forre uma forma com parte da massa, coloque o recheio e cubra com a massa restante. Faça cortes na superfície para permitir a saída do vapor."
		},
		{
			title: "Assar a torta",
			content: "Leve a torta ao forno preaquecido a 180°C por aproximadamente 40 minutos, ou até que esteja dourada e crocante."
		},
		{
			title: "Servir",
			content: "Deixe a torta esfriar um pouco antes de servir. Pode ser acompanhada de sorvete ou chantilly."
		}
	],
	address: "avcdesf",
	likes: 102
};

//TODO: Move to .env
const CARTESI_DISCORD_URL = "https://discord.gg/r8jEQCd3";

const Tutorials = () => {

	const [currentStep, setCurrentStep] = useState(0);
	const [tutorial, setTutorial] = useState<Tutorial | null>(null);

	useEffect(() => {
		// Fetch tutorial data from API
		// setTutorial(response.data);
		setTutorial(mockTutorial);
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
				<ReadmePreview />
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