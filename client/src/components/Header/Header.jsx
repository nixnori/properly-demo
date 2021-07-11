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
					<NavLink>Home</NavLink>
					<NavLink>About</NavLink>
					<NavLink>Contact</NavLink>
				</LinksWrapper>
				<div>
					<NavLink>Login</NavLink>
					<Button text="Sign Up" />
				</div>
			</LinksContainer>
		</Container>
	);
}
