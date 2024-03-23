import React, { useState } from "react";
import InfoIcon from "../../assets/images/InfoIcon.svg";
import { Tooltip as ReactTooltip } from "react-tooltip";

type TextInputParms = {
  value: string | number;
  setValue: (v: string) => void;
  label: string;
  placeholder?: string;
  errorText?: string;
  validator?: any;
  className?: string;
  type?: "number" | "email" | "text";
  tooltip?: string;
};

const TextInput = ({
	value,
	setValue,
	label,
	placeholder,
	errorText,
	validator,
	className,
	type,
	tooltip,
}: TextInputParms) => {
	const [change, setChange] = useState(false);

	return (
		<>
			<div className={`flex flex-col gap-[2px] ${className}`}>
				<label className="text-white text-caption">{label}</label>
				<div className="w-full relative">
					<input
						className={`border py-1 pl-2 w-full rounded-lg border-primary bg-transparent text-label-md text-white ${
							tooltip ? "pr-8" : "pr-2"
						}`}
						value={value}
						onChange={(e) => {
							setValue(e.target.value);
							setChange(true);
						}}
						placeholder={placeholder ?? ""}
						type={type ?? "text"}
					/>

					{tooltip ? (
						<>
							<img
								data-tooltip-id="my-tooltip-2"
								className="absolute top-2 right-2"
								src={InfoIcon}
								alt="Information"
							/>
						</>
					) : (
						<></>
					)}
				</div>
				{change && errorText && validator ? (
					<span className="text-body-sm text-red-500">{errorText}</span>
				) : (
					<></>
				)}
			</div>
			<ReactTooltip
				id="my-tooltip-2"
				place="bottom"
				variant="info"
				content={tooltip ?? ""}
			/>
		</>
	);
};

export default TextInput;
