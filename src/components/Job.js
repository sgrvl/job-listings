import React from "react";
import styled from "styled-components";
import dateAgo from "../utils";

const Card = styled.div`
	background-color: white;
	padding: 1em;
	margin: 1em 0;
	border-radius: 5px;
	border-left: 5px solid hsl(180, 29%, 50%);
	display: grid;
	grid-template-columns: 0.5fr 1fr 1fr;
`;

const Image = styled.img`
	grid-column: 1/2;
	width: 100%;
	height: auto;
	object-fit: scale-down;
`;

const CardText = styled.div`
	grid-column: 2/3;
`;

const Info = styled.ul`
	padding: 0;
	list-style: none;
	display: flex;

	li {
		padding-right: 0.5em;
	}
`;

const Job = ({ job }) => {
	console.log(job);
	return (
		<Card>
			<Image
				src={
					job.company_logo
						? job.company_logo
						: "https://pbs.twimg.com/profile_images/1176197551453687808/CTlnrRea_400x400.jpg"
				}
				alt=""
			/>
			<CardText>
				<h4>
					<a href={job.company_url}>{job.company}</a>
				</h4>
				<h3>{job.title}</h3>
				<Info>
					<li>{dateAgo(job.created_at)}d ago</li>
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
