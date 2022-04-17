import React from "react";
import { ButtonGreen, ButtonBlue, Header, SecondPara } from "./styled.components";

type Props = {};

const FourthSectionComponent = (props: Props) => {
	return (
		<div className="flex flex-col gap-5 mt-40 lg:w-1/2 w-11/12 m-auto text-center">
			<Header>Clipboard for iOS and Mac OS</Header>
			<SecondPara>
				Available for free on the App Store. Download for Mac or iOS, sync with iCloud and you're ready to start
				adding to your clipboard
			</SecondPara>
			<div className="flex lg:flex-row flex-col mt-10 justify-center gap-5">
				<ButtonGreen>Download For IOS</ButtonGreen>
				<ButtonBlue>Download For MAC</ButtonBlue>
			</div>
		</div>
	);
};

export default FourthSectionComponent;
