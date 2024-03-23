import React from "react";
import MarkdownPreview from "@uiw/react-markdown-preview";

interface IProps {
	source: string;
}

const MarkdownTutorialPreview = (props: IProps) => {

	return (
		<div className="flex rounded-xl flex-col justify-center items-center h-3/4 ml-8 mt-10 mb-6 box-border bg-cardBackground">
			<MarkdownPreview 
				source={props.source} 
				style={{ width: "100%", height: "100%", backgroundColor: "transparent", padding: 16 }} 
			/>
		</div>
	);
};

export default MarkdownTutorialPreview;