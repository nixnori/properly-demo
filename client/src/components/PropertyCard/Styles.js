import styled from "styled-components";

export const Card = styled.div`
	margin: 1rem;

	box-shadow: ${(props) => props.theme.boxShadow};
	background: white;
`;

export const Image = styled.img`
	width: 100%;
	height: 10rem;
	object-fit: cover;
`;

export const CardInfo = styled.div`
	padding: 1rem;

	h2 {
		color: ${(props) => props.theme.colors.highlight};
		font-size: 20px;
		font-weight: 500;
		text-align: left;
		margin-bottom: 1rem;
	}

	h3 {
		font-weight: 500;
		font-size: 16px;
		margin-bottom: 0.5rem;
	}

	h4 {
		font-weight: 500;
		font-size: 15px;
		color: ${(props) => props.theme.colors.grey};
	}

	h5 {
		font-weight: 500;
		font-size: 14px;
		color: ${(props) => props.theme.colors.primary};
	}

	hr {
		margin: 1.5rem 0 1rem;
		border: 0.1px solid ${(props) => props.theme.colors.lightGrey};
		width: 100%;
	}
`;

export const Icon = styled.img`
	margin-right: 0.5rem;
	height: 16px;
`;

export const IconAndText = styled.div`
	display: flex;
	margin-right: 1rem;
	align-items: center;
`;

export const SpecsWrap = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const Specs = styled.div`
	display: flex;
`;
