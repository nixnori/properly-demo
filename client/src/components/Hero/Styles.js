import styled from "styled-components";

export const HeroContainer = styled.div`
	display: flex;
	width: 100%;
	padding: 5rem 10vw 2rem;
	height: 100vh;
	min-height: 688px;

	@media ${(props) => props.theme.mediaQueries.tablet} {
		flex-direction: column-reverse;
		padding: 0;
	}
`;

export const HeroMsg = styled.div`
	width: 52%;
	flex: 1;
	padding: 4rem 1rem 0 0;

	h1 {
		font-size: 50px;
		font-weight: 400;

		@media ${(props) => props.theme.mediaQueries.tablet} {
			font-size: 40px;
		}

		@media ${(props) => props.theme.mediaQueries.mobile} {
			font-size: 30px;
		}
	}

	span {
		font-weight: 600;
		color: ${(props) => props.theme.colors.primary};
	}

	p {
		font-size: 16px;
		font-weight: 400;
		margin-top: 0.75rem;
	}

	@media ${(props) => props.theme.mediaQueries.tablet} {
		width: 100%;
		padding: 2rem 1.5rem;
	}
`;

export const Select = styled.button`
	background: ${(props) => (props.selected ? props.theme.colors.secondary : "white")};
	border: 2px solid ${(props) => props.theme.colors.secondary};
	color: ${(props) => (!props.selected ? props.theme.colors.secondary : "white")};
	font-weight: 500;
	padding: 0.5rem 2em;
	font-size: 16px;
	cursor: pointer;
`;

export const SelectWrap = styled.div`
	display: flex;
	margin: 2.5rem 0 1rem;

	@media ${(props) => props.theme.mediaQueries.mobile} {
		margin-top: 1.5rem;
	}
`;

export const ImageContainer = styled.div`
	width: 48%;

	@media ${(props) => props.theme.mediaQueries.tablet} {
		width: 100%;
		height: 20rem;
	}

	@media ${(props) => props.theme.mediaQueries.mobile} {
		height: 15rem;
	}
`;

export const HeroImg = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
`;

export const SearchContainer = styled.div`
	display: flex;
	jusitfy-content: space-between;
	background: white;
	box-shadow: ${(props) => props.theme.boxShadow};
	width: 90%;
	margin-right: 4rem;

	@media ${(props) => props.theme.mediaQueries.tablet} {
		width: 100%;
	}
`;

export const SearchInput = styled.input`
	background: white;
	border: none;
	padding: 0.5rem 1rem;
	flex: 1;

	&:focus {
		outline: none;
	}
`;
