import React from "react";
import styled from "styled-components";
import Desktop from "../imgs/bg-header-desktop.svg";
import Mobile from "../imgs/bg-header-mobile.svg";

const TopContainer = styled.div`
	height: 10vh;
	width: 100%;
	background: ${(props) => props.theme.main} center / cover no-repeat
		url(${Desktop});

	@media screen and (max-width: 425px) {
		height: 20vh;
		background: ${(props) => props.theme.main} center / cover no-repeat
			url(${Mobile});
	}
`;

const Title = styled.h1`
	color: ${(props) => props.theme.darkFont};
	text-align: center;
`;

const Header = () => {
	return (
		<>
			<TopContainer />
			<Title>GitHub Jobs</Title>
		</>
	);
};

export default Header;
