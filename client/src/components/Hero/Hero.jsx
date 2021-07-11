import React, { useState } from "react";
import {
	HeroContainer,
	HeroMsg,
	Select,
	HeroImg,
	ImageContainer,
	SelectWrap,
	SearchContainer,
	SearchInput,
} from "./Styles";
import heroPic from "../../assets/images/hero-pic.png";
import search from "../../assets/images/search.svg";
import Button from "../Button";

export default function Hero() {
	const [buy, setBuy] = useState(true);
	return (
		<HeroContainer>
			<HeroMsg>
				<h1>
					Get ready to find your <span>dream home.</span>
				</h1>
				<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				<SelectWrap>
					<Select selected={buy} onClick={() => setBuy(true)}>
						Buy
					</Select>
					<Select selected={!buy} onClick={() => setBuy(false)}>
						Rent
					</Select>
				</SelectWrap>
				<SearchContainer>
					<img src={search} alt="Search Icon" style={{ paddingLeft: "10px" }} />
					<SearchInput placeholder="Find Location..." />
					<Button text="Search" />
				</SearchContainer>
			</HeroMsg>
			<ImageContainer>
				<HeroImg src={heroPic} alt="Hero Image" />
			</ImageContainer>
		</HeroContainer>
	);
}
