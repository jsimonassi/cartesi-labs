import React, { useState } from "react";
import StepSelectorGroup from "./components/StepSelectorGroup";
import { Tutorial } from "../../types/Tutorial";

const Tutorials = () => {

	const [currentStep, setCurrentStep] = useState(0);

	const mockTutorial: Tutorial = {
		title: "Como fazer uma torta de maçã deliciosa",
		description: "Aprenda passo a passo como fazer uma torta de maçã clássica e deliciosa.",
		updatedAt: "2024-03-19",
		approximatedTime: 60,
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

	return (
		<div className="fixed top-0 left-0 w-full h-full flex bg-pageBackground">
			<StepSelectorGroup
				currentStep={currentStep}
				onChangeStep={(newStep) => setCurrentStep(newStep)}
				steps={mockTutorial.steps}
			/>
			{
				currentStep === 0 ?
					<div>
						<h3 className="text-white text-h3 font-700 mt-8 ml-8">{mockTutorial.title}</h3>
						<p className="text-secondaryText text-label-md font-500 ml-8">{mockTutorial.description}</p>
					</div>
					: null
			}

		</div>
	);
};

export default Tutorials;