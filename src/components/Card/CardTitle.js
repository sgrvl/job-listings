import React from "react";
import styled from "styled-components";

const Title = styled.div`
	display: flex;
`;

const Link = styled.a`
	vertical-align: text-bottom;
	font-weight: 700;
	text-decoration: none;
	color: ${(props) => props.theme.main};
`;

const New = styled.button`
	font-weight: 700;
	color: white;
	font-size: 0.6em;
	background-color: ${(props) => props.theme.main};
	border-radius: 20px;
	border: none;
	outline: none;
	cursor: auto;
	margin-left: 1em;
	display: ${(props) => (props.date < 3 ? "block" : "none")};
`;

const CardTitle = ({ date, job }) => {
	return (
		<Title>
			<Link href={job.company_url}>{job.company}</Link>
			<New date={date}>NEW</New>
		</Title>
	);
};

export default CardTitle;
