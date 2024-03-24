import { useState } from "react";
import React from "react";
type TextAreaParms = {
  value: string;
  setValue: (v: string) => void;
  label: string;
  placeholder?: string;
  errorText?: string;
  validator?: any;
  className?: string;
};

const TextInputArea = ({
	value,
	setValue,
	label,
	placeholder,
	errorText,
	validator,
	className,
}: TextAreaParms) => {
	const [change, setChange] = useState(false);

	return (
		<div className={`flex flex-col gap-[2px] ${className}`}>
			<label className="text-white text-caption">{label}</label>
			<textarea
				className="border py-1 overflow-auto h-full px-2 rounded-lg border-primary bg-transparent text-label-md text-white"
				value={value}
				onChange={(e) => {
					setValue(e.target.value);
					setChange(true);
				}}
				placeholder={placeholder ?? ""}
			/>
			{change && errorText && validator ? (
				<span className="text-body-sm text-red-500">{errorText}</span>
			) : (
				<></>
			)}
		</div>
	);
};

export default TextInputArea;
