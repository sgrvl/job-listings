import React from "react";
import styled from "styled-components";

const Image = styled.img`
	grid-column: 1/2;
	width: 100%;
	max-width: 100%;
	height: auto;
	object-fit: scale-down;
	align-self: center;
	padding: 0.5em;
`;

const CardImage = ({ job }) => {
	return (
		<Image
			src={
				job.company_logo
					? job.company_logo
					: "https://pbs.twimg.com/profile_images/1176197551453687808/CTlnrRea_400x400.jpg"
			}
			alt={`${job.company} logo`}
		/>
	);
};

export default CardImage;
