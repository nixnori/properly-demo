import React from "react";
import { Container, NavLink, LinksContainer, LinksWrapper } from "./Styles";
import Logo from "../Logo";
import Button from "../Button";

export default function Header() {
	return (
		<Container>
			<Logo />
			<LinksContainer>
				<LinksWrapper>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/">About</NavLink>
					<NavLink to="/">Contact</NavLink>
				</LinksWrapper>
				<div>
					<NavLink to="/">Login</NavLink>
					<Button text="Sign Up" />
				</div>
			</LinksContainer>
		</Container>
	);
}
