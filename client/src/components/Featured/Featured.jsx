import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProperties } from "../../redux/slices/properties";
import { Container, PropertiesContainer } from "./Styles";
import PropertyCard from "../PropertyCard";

export default function Featured() {
	const dispatch = useDispatch();
	const properties = useSelector((state) => state.properties.properties);
	const propertiesStatus = useSelector((state) => state.properties.status);

	useEffect(() => {
		if (propertiesStatus === "idle") {
			dispatch(fetchProperties());
		}
	}, [propertiesStatus, dispatch]);

	// console.log(properties);
	return (
		<Container>
			<h2>Featured Properties</h2>
			<hr />
			<PropertiesContainer>
				{properties.length > 0 &&
					properties.map((property) => {
						return (
							<>
								<PropertyCard
									title={property.title}
									price={property.price}
									image={property.image}
									location={property.location}
									squareFeet={property.squareFeet}
									bed={property.bed}
									bath={property.bath}
								/>
							</>
						);
					})}
			</PropertiesContainer>
		</Container>
	);
}
