import React, { useEffect, useRef, useState } from "react";
import { ToolTags, Tutorial } from "../../../types/Tutorial";
import TextInput from "../../../components/TextInput";
import TextInputArea from "../../../components/TextArea";
import tags from "../../../constants/options";
import BaseBtn from "../../../components/buttons/BaseBtn";
import { useNavigate } from "react-router-dom";
import { AddTutorialPage } from "..";

const Autocomplete = ({
	options,
	selectedOptions,
	setSelectedOptions,
}: {
	options: ToolTags[];
	selectedOptions: ToolTags[];
	setSelectedOptions: (v: ToolTags[]) => void;
}) => {
	const [inputValue, setInputValue] = useState("");
	const [filteredOptions, setFilteredOptions] = useState<ToolTags[]>([]);
	const ref = useRef<any>(null);

	const handleChange = (event: any) => {
		const { value } = event.target;
		setInputValue(value);

		// Filtra as opções com base no texto digitado
		const filtered = options
			.filter((option) => !selectedOptions.includes(option))
			.filter((option) =>
				option.name.toLowerCase().includes(value.toLowerCase())
			);
		setFilteredOptions(filtered);
	};

	const handleSelect = (value: any) => {
		setInputValue("");
		setSelectedOptions([...selectedOptions, value]);
		setFilteredOptions([]);
	};

	useEffect(() => {
		function handleClickOutside(event: any) {
			if (ref.current && !ref.current.contains(event.target)) {
				setFilteredOptions([]);
			}
		}
		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [ref]);

	return (
		<div className="w-full mb-20 relative">
			<label className="text-white text-caption">Tools tags: </label>

			<div className="w-full border border-primary py-2 px-2 rounded-lg flex flex-wrap gap-2  items-center justify-center">
				{selectedOptions.map((option) => (
					<div
						className="bg-primary text-black rounded-lg w-fit px-2 py-1 flex gap-2 items-center"
						key={option.name}
					>
						{option.name}

						<span
							className="cursor-pointer text-red-500 text-label-md text-center hover:transition-transform hover:scale-150 "
							onClick={() => {
								setSelectedOptions(selectedOptions.filter((x) => x !== option));
							}}
						>
							x
						</span>
					</div>

				))}

				<input
					type="text"
					value={inputValue}
					onChange={handleChange}
					className="bg-transparent text-white flex-1 w-full min-w-10 outline-none"
					onFocus={(e) =>
						setFilteredOptions(
							options.filter((option) => !selectedOptions.includes(option))
						)
					}
				/>
			</div>
			{filteredOptions.length > 0 ? (
				<ul
					className="bg-white rounded-lg max-h-[120px] w-full overflow-y-auto absolute z-10"
					ref={ref}
				>
					{filteredOptions.map((option, index) => (
						<li
							key={`$option_${index}`}
							onClick={() => handleSelect(option)}
							className="border-b border-b-gray hover:bg-primaryDark hover:transition hover:duration-500  p-2"
						>
							{option.name}
						</li>
					))}
				</ul>
			) : (
				<></>
			)}
		</div>
	);
};

const validateTutorial = (tutorial: Tutorial) => {
	if (!tutorial.title) {
		alert("Tutorial title cannot be empty.");
		return false;
	}

	if (!tutorial.description) {
		alert("Description title cannot be empty.");
		return false;
	}

	if (!tutorial.description) {
		alert("Description title cannot be empty.");
		return false;
	}

	if (tutorial.approximatedTime <= 0) {
		alert("Time must be positive");
		return false;
	}

	return true;
};

const TutorialTitleEdit = ({
	tutorial,
	setTutorial,
	setPage,
}: {
	tutorial: Tutorial;
	setTutorial: any;
	setPage: any;
}) => {
	const navigator = useNavigate();

	return (
		<div className="flex flex-col w-screen mt-36">
			<div className="flex flex-col gap-[15px]">
				<h1 className="text-white font-bold text-h6 text-center">
					Create your tutorial
				</h1>
				<p className="text-center text-inputText text-body-sm">
					Write a tutorial and help the cartesi <br /> community in integrating
					new technologies
				</p>
			</div>
			<div className="w-[521px] self-center mt-8 flex flex-col gap-4">
				<TextInput
					label="Tutorial name: "
					value={tutorial.title}
					placeholder="Creating a dApp with sunodo and Python"
					setValue={(v) => {
						setTutorial({ ...tutorial, title: v });
					}}
					errorText="Title cannot be empty"
					validator={!tutorial.title}
				/>

				<TextInputArea
					label="Description: "
					value={tutorial.description}
					placeholder="Creating a decentralized application (dApp) with Sunodo and Python involves utilizing Sunodo's blockchain platform for smart contract development and..."
					setValue={(v) => {
						setTutorial({ ...tutorial, description: v });
					}}
					errorText="Description cannot be empty"
					validator={!tutorial.description}
					className="h-28"
				/>
				<div className="flex gap-4">
					<TextInput
						label="Aproximate time (minutes): "
						value={tutorial.approximatedTime}
						placeholder="90"
						setValue={(v) => {
							setTutorial({ ...tutorial, approximatedTime: v });
						}}
						errorText="Value must be positive"
						validator={tutorial.approximatedTime <= 0}
						type="number"
						tooltip="Time spent to read the tutorial"
						className="w-full"
					/>
				</div>
				<Autocomplete
					options={tags}
					selectedOptions={tutorial.toolTags}
					setSelectedOptions={(v) => {
						setTutorial({ ...tutorial, toolTags: v });
					}}
				/>
			</div>

			<div className="self-center flex flex-col gap-4 mb-20">
				<BaseBtn
					className="w-44 h-7 text-label-sm !font-700 flex items-center justify-center"
					onClick={() => {
						if (validateTutorial(tutorial)) setPage(AddTutorialPage.Steps);
					}}
				>
					Start creation
				</BaseBtn>
				<BaseBtn
					className="w-44 h-7 text-label-sm font-bold flex items-center justify-center"
					variant="outline"
					onClick={() => navigator("/")}
				>
					Back to the home
				</BaseBtn>
			</div>
		</div>
	);
};

export default TutorialTitleEdit;
