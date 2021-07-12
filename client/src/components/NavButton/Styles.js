import styled from "styled-components";

export const Button = styled.div`
	display: none;
	justify-content: center;
	align-items: center;
	height: 55px;
	width: 55px;
	border-radius: 50%;
	background: ${(props) => props.theme.colors.primary};
	position: fixed;
	right: 1.5rem;
	bottom: 2rem;

	@media ${(props) => props.theme.mediaQueries.tablet} {
		display: flex;
	}
`;
