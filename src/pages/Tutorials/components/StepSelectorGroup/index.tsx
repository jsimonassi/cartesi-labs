import React from "react";
import { TutorialStep } from "../../../../types/Tutorial";
import StepSelector from "../../../../components/StepSelector";


interface IProps {
    steps: TutorialStep[];
    currentStep: number;
    onChangeStep: (step: number) => void;
}

const StepSelectorGroup = (props: IProps) => {
	return (
		<div className="flex flex-col max-w-80">
			{
				props.steps.map((step, index) => {
					return (
						<StepSelector
							key={index}
							step={index}
							title={step.title}
							isSelected={index === props.currentStep}
							onClick={() => props.onChangeStep(index)}
						/>
					);
				})
			}
		</div>
	);
};

export default StepSelectorGroup;