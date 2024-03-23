import React from "react";
import MDEditor from "@uiw/react-md-editor/nohighlight";
import "./styles.css";

interface IProps {
    content: string;
    onChange: (content: string) => void;
}

const TextEditor = (props: IProps) => {

	const handleChange = (newValue?: string) => {
		if (typeof newValue === "string") {
			props.onChange(newValue);
		}
	};

	return (
		<div className="flex rounded-xl flex-col justify-center items-center h-3/4 ml-8 mt-10 mb-6 box-border bg-cardBackground">
			<MDEditor
				value={props.content}
				onChange={handleChange}
				height={"100%"}
				style={{ width: "100%", borderRadius: 16, padding: 8, backgroundColor: "#2F2F2F"}}
				previewOptions={{
					style: {backgroundColor: "#2F2F2F"},
					components: {
						code: ({ children }) => {
							const className =  "block-code";
							const backgroundColor = "#181818";
							return <code className={className} style={{ backgroundColor }}>{children}</code>;
						},
					},
				}}
			/>
		</div>
	);
};

export default TextEditor;