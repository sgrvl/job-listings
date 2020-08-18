import React from "react";
import styled from "styled-components";

const Info = styled.ul`
	padding: 0;
	list-style: none;
	display: flex;
	font-size: 0.75em;

	li {
		padding-right: 0.5em;
	}
`;

const CardInfo = ({ date, job }) => {
	return (
		<Info>
			<li>{date}</li>
			<li>&#8226;</li>
			<li>{job.type}</li>
			<li>&#8226;</li>
			<li>{job.location}</li>
		</Info>
	);
};

export default CardInfo;
