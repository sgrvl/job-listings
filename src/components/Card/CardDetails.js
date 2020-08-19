import React from "react";
import styled from "styled-components";
import ReactMarkdown from "react-markdown";

const Details = styled(ReactMarkdown)`
	color: ${(props) => props.theme.darkFont};
`;

const Wrap = styled.div`
	grid-area: 2/1/3/4;
	text-overflow: "-";
	overflow: hidden auto;
	white-space: wrap;
	height: 100%;
	max-height: ${(props) => (props.display ? "70vh" : "0")};
	transition: max-height 0.3s linear;
	@media screen and (max-width: 425px) {
		grid-area: 3/1/4/4;
	}
`;

const CardDetails = ({ job, display }) => {
	return (
		<Wrap display={display}>
			<Details source={job.description} escapeHtml={false} display={display} />
		</Wrap>
	);
};

export default CardDetails;
