import React from "react";
import BaseBtn from "../../../../components/buttons/BaseBtn";

interface IProps {
    onBackEnabled: boolean;
    onNextEnabled: boolean;
    onBack: () => void;
    onNext: () => void;
}


const DirectionButtonGroup = (props: IProps) => {

	return (
		<div className="flex justify-end items-center">
			<BaseBtn
				variant="outline"
				size="md"
				className="mr-8"
				disabled={!props.onBackEnabled}
				onClick={props.onBack} >Back</BaseBtn>
			<BaseBtn
				size="md"
				disabled={!props.onNextEnabled}
				onClick={props.onNext}>Next</BaseBtn>
		</div>
	);
};

export default DirectionButtonGroup;