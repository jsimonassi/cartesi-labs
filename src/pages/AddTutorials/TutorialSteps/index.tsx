import { Tutorial, TutorialStep } from "../../../types/Tutorial";
import React, { useEffect, useState } from "react";
import StepSelectorGroup from "../../Tutorials/components/StepSelectorGroup";
import DirectionButtonGroup from "../../Tutorials/components/DirectionButtonGroup";
import MarkdownTutorialPreview from "../../../components/MarkdownTutorialPreview";
import TextInput from "../../../components/TextInput";

const createEmptyStep = () => {
	const step: TutorialStep = {
		content: "",
		title: "",
	};

	return step;
};

const TutorialSteps = ({
	tutorial,
	steps,
	setSteps,
}: {
  tutorial: Tutorial;
  steps: TutorialStep[];
  setSteps: any;
}) => {
	const [currentStep, setCurrentStep] = useState(0);

	useEffect(() => {
		if (!steps || steps.length == 0) {
			setSteps([createEmptyStep(), createEmptyStep(), createEmptyStep()]);
		}
	}, []);

	const validate = () => {
		const step = steps[currentStep];
		if (!step.title) {
			alert("Step title cannot be empty.");
			return false;
		}

		if (step.content) {
			alert("Step's content title cannot be empty.");
			return false;
		}

		return true;
	};

	return (
		<div className="fixed top-0 left-0 w-full h-full flex p-12 bg-pageBackground">
			<div className="flex flex-col w-1/4 justify-center">
				<StepSelectorGroup
					currentStep={currentStep}
					onChangeStep={(newStep) => {
						if (validate()) setCurrentStep(newStep);
					}}
					steps={steps ?? []}
				/>
				<div
					className={
						"mb-4 py-4 h-16 flex justify-center items-center rounded-md cursor-pointer hover:opacity-70 transition-all duration-400 border border-primaryDark text-white"
					}
					onClick={() => {
						if (validate()) {
							setSteps([...steps, createEmptyStep()]);
						}
					}}
				>
					<div
						className={
							"flex items-center justify-center w-8 h-8 rounded-full border-2 border-primaryDark"
						}
					>
						<p className={"text-h6 font-700 items-center h-[inherit]"}>+</p>
					</div>
				</div>
			</div>
			<div className=" w-3/4 flex-col">
				<div className=" flex justify-center items-center flex-col">
					<h3 className="text-white text-h3 font-700 mt-8 ml-8 w-full text-center">
						{tutorial?.title}
					</h3>
				</div>
				<TextInput
					label="Aproximate time (minutes): "
					value={steps && steps.length > 0 ? steps[currentStep].title : ""}
					placeholder="Step title"
					setValue={(v) => {
						setSteps(
							steps.map((step, i) => {
								return i === currentStep ? { ...step, title: v } : step;
							})
						);
					}}
					errorText="Step title must have a value"
					validator={!steps[currentStep]}
					className="ml-8 h-16"
					max={40}
				/>
				<MarkdownTutorialPreview source="" />
				<DirectionButtonGroup
					onBack={() => {
						if (validate()) setCurrentStep(currentStep - 1);
					}}
					onNext={() => {
						if (validate()) setCurrentStep(currentStep + 1);
					}}
					onBackEnabled={currentStep > 0}
					onNextEnabled={
						tutorial && currentStep < steps.length - 1 ? true : false
					}
				/>
			</div>
		</div>
	);
};

export default TutorialSteps;
