import { Tutorial, TutorialStep } from "../../../types/Tutorial";
import React, { useEffect, useState } from "react";
import StepSelectorGroup from "../../Tutorials/components/StepSelectorGroup";
import DirectionButtonGroup from "../../Tutorials/components/DirectionButtonGroup";
import MarkdownTutorialPreview from "../../../components/MarkdownTutorialPreview";
import TextInput from "../../../components/TextInput";
import TextEditor from "../../../components/TextEditor";
import BaseBtn from "../../../components/buttons/BaseBtn";
import { ChevronLeft } from "../../../components/Chevron/Chevron-left";
import { AddTutorialPage } from "..";

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
	setPage,
}: {
	tutorial: Tutorial;
	steps: TutorialStep[];
	setSteps: any;
	setPage: React.Dispatch<React.SetStateAction<AddTutorialPage>>

}) => {
	const [currentStep, setCurrentStep] = useState(0);


	useEffect(() => {
		if (!steps || steps.length == 0) {
			setSteps([createEmptyStep()]);
		}
	}, []);

	const validate = () => {
		const step = steps[currentStep];
		if (!step.title) {
			alert("Step's title cannot be empty.");
			return false;
		}

		if (!step.content) {
			alert("Step's content cannot be empty.");
			return false;
		}

		return true;
	};

	const handleSave = () => {
		steps.forEach((step, index) => {
			if (!step.title) {
				alert(`Step ${index} title cannot be empty.`);
				return;
			}

			if (!step.content) {
				alert(`Step ${index} content cannot be empty.`);
				return;
			}
		});

		const data = { ...tutorial, steps: steps };
	};

	const handleBack = () => {
		setPage(AddTutorialPage.Info);
	}

	return (
		<div className="fixed top-0 left-0 w-full h-full flex p-12 bg-pageBackground">

			<div className="flex flex-col w-1/4 max-h-[680px] overflow-y-auto  pr-1">
				<BaseBtn size="md" variant="outline" className="rounded-full mb-10 mt-20 w-40 flex items-center justify-center gap-1" onClick={handleBack}>

					<ChevronLeft />
					Go Back


				</BaseBtn>
				<StepSelectorGroup
					currentStep={currentStep}
					onChangeStep={(newStep) => {
						if (validate()) setCurrentStep(newStep);
					}}
					steps={steps ?? []}
					close={
						steps && steps.length > 1
							? (step) => {
								setSteps(steps.filter((_, index) => step !== index));
								let newCurrentStep = currentStep - 1;

								if (step === 0) newCurrentStep = 0;
								if (step > currentStep) newCurrentStep = currentStep;
								setCurrentStep(newCurrentStep);
							}
							: undefined
					}
				/>
				<div
					className={
						"mb-4 py-4 h-16 flex justify-center items-center rounded-md cursor-pointer hover:opacity-70 transition-all duration-400 border border-primaryDark text-white"
					}
					onClick={() => {
						if (validate()) {
							setSteps([...steps, createEmptyStep()]);
							setCurrentStep(currentStep + 1);
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
			<div className=" w-3/4 flex-col mb-20 mt-16">
				<div className=" flex justify-center items-center flex-col">
					<h3 className="text-white text-h3 font-700 mt-8 ml-8 w-full text-center">
						{tutorial?.title}
					</h3>
				</div>
				<TextInput
					label="Step's title: "
					value={
						steps && steps.length > 0 && steps[currentStep]
							? steps[currentStep].title
							: ""
					}
					placeholder="Step's title"
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
					max={60}
				/>
				<TextEditor
					content={
						steps && steps.length > 0 && steps[currentStep]
							? steps[currentStep].content
							: ""
					}
					onChange={(v) => {
						setSteps(
							steps.map((step, i) => {
								return i === currentStep ? { ...step, content: v } : step;
							})
						);
					}}
				/>
				<div className="flex justify-between ml-8">
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
					<BaseBtn size="md" onClick={handleSave}>
						Save
					</BaseBtn>
				</div>
			</div>
		</div>
	);
};

export default TutorialSteps;
