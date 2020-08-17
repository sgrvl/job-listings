import React from "react";
import styled from "styled-components";
import { dateAgo, day } from "../../utils";

const Card = styled.div`
	background-color: white;
	padding: 1em;
	margin: 1em 0;
	border-radius: 5px;
	border-left: ${(props) =>
		props.date < 3 ? `5px solid ${props.theme.main}` : "none"};
	display: grid;
	grid-template-columns: 100px 1fr 1fr;
`;

const Image = styled.img`
	grid-column: 1/2;
	width: 100%;
	max-width: 100%;
	height: auto;
	object-fit: scale-down;
	align-self: center;
	padding: 0.5em;
`;

const Title = styled.div`
	display: flex;
`;

const New = styled.button`
	font-weight: 700;
	color: white;
	font-size: 0.7em;
	background-color: ${(props) => props.theme.main};
	border-radius: 20px;
	border: none;
	outline: none;
	cursor: auto;
	margin-left: 1em;
	display: ${(props) => (props.date < 3 ? "block" : "none")};
`;

const CardText = styled.div`
	margin-left: 0.5em;
	grid-column: 2/3;
`;

const Link = styled.a`
	font-weight: 700;
	text-decoration: none;
	color: ${(props) => props.theme.main};
`;

const Info = styled.ul`
	padding: 0;
	list-style: none;
	display: flex;
	font-size: 0.75em;

	li {
		padding-right: 0.5em;
	}
`;

const Job = ({ job }) => {
	console.log(job);
	const date = day(job.created_at);
	return (
		<Card date={date}>
			<Image
				src={
					job.company_logo
						? job.company_logo
						: "https://pbs.twimg.com/profile_images/1176197551453687808/CTlnrRea_400x400.jpg"
				}
				alt=""
			/>
			<CardText>
				<Title>
					<Link href={job.company_url}>{job.company}</Link>
					<New date={date}>NEW!</New>
				</Title>

				<h3>{job.title}</h3>
				<Info>
					<li>{dateAgo(date)}</li>
					<li>&#8226;</li>
					<li>{job.type}</li>
					<li>&#8226;</li>
					<li>{job.location}</li>
				</Info>
			</CardText>
		</Card>
	);
};

export default Job;
