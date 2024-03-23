import React from "react";
import BaseBtn from "../../../../components/buttons/BaseBtn";

interface IProps {
    lastUpdated: string;
    tutorialDuration: number;
    onReportProblem: () => void;
}

const AuthorInfos = (props: IProps) => {

	return (
		<div className="flex justify-between h-full max-h-60 flex-col px-3 pt-2 pb-4 bg-cardBackground rounded-xl">
			<h5 className="text-h5 font-bold text-primaryDark">About</h5>
			<p className="text-label-md font-500 text-white"><b>Last updated:</b> {props.lastUpdated}</p>
			<p className="text-label-md font-500 text-white"><b>Duration:</b> {props.tutorialDuration}</p>
			<BaseBtn 
				className="w-2/4 mt-4"
				variant="outline"
				size="sm"
				onClick={props.onReportProblem}
			>Report a problem</BaseBtn>
		</div>
	);
};

export default AuthorInfos;