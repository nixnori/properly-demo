import React from "react";
import { Button } from "./Styles";
import hamburgerIcon from "../../assets/images/hamburger.svg";

// not functional
// NavButton opens side menu of nav links found that the top in desktop mode

export default function NavButton(props) {
	return (
		<Button onClick={props.clickHandler}>
			<img src={hamburgerIcon} alt="Hamburger Icon" />
		</Button>
	);
}
