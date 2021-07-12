import React from "react";
import { Button } from "./Styles";
import hamburgerIcon from "../../assets/images/hamburger.svg";

export default function NavButton(props) {
	return (
		<Button onClick={props.clickHandler}>
			<img src={hamburgerIcon} alt="Hamburger Icon" />
		</Button>
	);
}
