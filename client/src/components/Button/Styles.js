import styled from "styled-components";
import { Link } from "react-router-dom";

export const Btn = styled(Link)`
	color: white;
	background-color: ${(props) => props.theme.colors.highlight};
	padding: 0.5rem 1rem;
	text-decoration: none;
	font-weight: 400;
	transition: all 0.1s ease-in-out;
	&:hover {
		text-decoration: none;
		background-color: #f09814;
	}
`;
