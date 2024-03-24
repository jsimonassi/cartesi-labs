import React from "react";
import { TutorialStep } from "../../../../types/Tutorial";
import StepSelector from "../../../../components/StepSelector";

interface IProps {
  steps: TutorialStep[];
  currentStep: number;
  onChangeStep: (step: number) => void;
  close?: (step: number) => void;
}

const StepSelectorGroup = (props: IProps) => {
	return (
		<>
			{props.steps.map((step, index) => {
				return (
					<StepSelector
						key={index}
						step={index}
						title={step.title}
						isSelected={index === props.currentStep}
						onClick={() => props.onChangeStep(index)}
						close={props.close}
					/>
				);
			})}
		</>
	);
};

export default StepSelectorGroup;
