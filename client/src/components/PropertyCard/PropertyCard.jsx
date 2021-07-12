import React from "react";
import { Card, CardInfo, Image, Icon, IconAndText, Specs, SpecsWrap } from "./Styles";

import locationIcon from "../../assets/images/location.svg";
import houseIcon from "../../assets/images/house.svg";
import bedIcon from "../../assets/images/bed.svg";
import bathIcon from "../../assets/images/bath.svg";

export default function PropertyCard(props) {
	return (
		<Card>
			<Image src={props.image} alt={props.title} />
			<CardInfo>
				<h2>${props.price}</h2>
				<h3>{props.title}</h3>
				<IconAndText>
					<Icon src={locationIcon} alt="Location Icon" height="16px" />
					<h4>{props.location}</h4>
				</IconAndText>
				<hr />
				<SpecsWrap>
					<Specs>
						<IconAndText>
							<Icon src={houseIcon} alt="House Icon" />
							<h5>{props.squareFeet} SF</h5>
						</IconAndText>
					</Specs>
					<Specs>
						<IconAndText>
							<Icon src={bedIcon} alt="Bed Icon" />
							<h5>{props.bed} bed</h5>
						</IconAndText>
						<IconAndText>
							<Icon src={bathIcon} alt="Bath Icon" />
							<h5>{props.bath} bath</h5>
						</IconAndText>
					</Specs>
				</SpecsWrap>
			</CardInfo>
		</Card>
	);
}
