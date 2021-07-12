import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: fixed;
	background: ${(props) => props.theme.colors.background};
	height: 4.5rem;
	width: 100vw;
	padding: 0 10vw;

	@media ${(props) => props.theme.mediaQueries.tablet} {
		padding: 0 1.5rem;
	}
`;

export const NavLink = styled(Link)`
	color: ${(props) => props.theme.colors.secondary};
	font-weight: 500;
	text-decoration: none;
	margin: 0 1rem;
	transition: all 0.1s ease-in-out;

	&:hover {
		text-decoartion: none;
		color: ${(props) => props.theme.colors.primary};
	}
`;

export const LinksContainer = styled.div`
	display: flex;
`;

export const LinksWrapper = styled.div`
	padding-right: 3rem;

	@media ${(props) => props.theme.mediaQueries.tablet} {
		display: none;
	}
`;

export const LoginBtn = styled(NavLink)`
color: ${(props) => props.theme.colors.highlight};

&:hover {
	color: #f09814
}
`;