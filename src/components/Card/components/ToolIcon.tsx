import React from "react";
import { IconType } from "react-icons";


interface IProps {
    icon: IconType;
}

export const ToolIcon = (props: IProps) => {

	return (
		<>
			{
				props.icon ?
					<div>
						<props.icon color="white" size={33} />
					</div> :
					null
			}
		</>
	);
};

