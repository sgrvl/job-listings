import React, { useState } from "react";
import styled from "styled-components";
import { dateAgo, day } from "../../utils";
import CardTitle from "./CardTitle";
import CardInfo from "./CardInfo";
import CardImage from "./CardImage";
import CardDetails from "./CardDetails";

const StyledCard = styled.div`
	position: relative;
	background-color: white;
	padding: 1em;
	margin: 1em 0;
	border-radius: 5px;
	border-left: ${(props) =>
		props.date < 3 ? `5px solid ${props.theme.main}` : "none"};
	display: grid;
	grid-template-columns: 100px 1fr 1fr;
	grid-template-rows: auto auto;
	box-shadow: 0 5px 7px -7px rgba(0, 0, 0, 1);
`;

const CardText = styled.div`
	margin-left: 0.5em;
	grid-area: 1/2/2/3;
`;

const JobTitle = styled.h3`
	color: ${(props) => props.theme.darkFont};
`;

const Chevron = styled.svg`
	fill: ${(props) => props.theme.main};
	height: 30px;
	width: 30px;
	position: absolute;
	right: 0;
	bottom: 0;
	cursor: pointer;
`;

const Card = ({ job }) => {
	console.log(job);
	const date = day(job.created_at);
	const [open, setOpen] = useState(false);

	return (
		<StyledCard date={date}>
			<CardImage job={job} />
			<CardText>
				<CardTitle job={job} date={date} />
				<JobTitle>{job.title}</JobTitle>
				<CardInfo date={dateAgo(date)} job={job} />
			</CardText>
			<Chevron
				onClick={() => setOpen(!open)}
				viewBox="0 0 32 32"
				aria-hidden="true"
			>
				{open ? (
					<path d="M15.997 13.374l-7.081 7.081L7 18.54l8.997-8.998 9.003 9-1.916 1.916z" />
				) : (
					<path d="M16.003 18.626l7.081-7.081L25 13.46l-8.997 8.998-9.003-9 1.917-1.916z" />
				)}
			</Chevron>

			<CardDetails job={job} display={open} />
		</StyledCard>
	);
};

export default Card;
