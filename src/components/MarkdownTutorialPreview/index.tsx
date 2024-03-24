import React from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";

interface IProps {
	source: string;
	title?: string;
}

const MarkdownTutorialPreview = (props: IProps) => {

	return (
		<div className="flex rounded-xl flex-col items-center h-3/4 ml-8 mt-10 mb-6 box-border bg-cardBackground">
			{ props.title && <h5 className="text-white text-h5 font-700 mt-8 ml-8 w-full pl-7">{props.title}</h5>}
			<MarkdownPreview 
				source={props.source} 
				style={{ width: "100%", height: "100%", backgroundColor: "transparent", padding: 16 }} 
			/>
		</div>
	);
};

export default MarkdownTutorialPreview;