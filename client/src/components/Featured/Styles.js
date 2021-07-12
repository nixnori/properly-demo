import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 2rem;
	padding: 0 5vw 2rem;

	h2 {
		font-size: 36px;
		font-weight: 400;
	}

	hr {
		margin-top: 1rem;
		width: 3rem;
		background: ${(props) => props.theme.colors.primary};
		border-color: ${(props) => props.theme.colors.primary};
	}
`;

export const PropertiesContainer = styled.div`
	margin-top: 3rem;
	width: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(19rem, 1fr));
	align-items: start;
`;
