import React from "react";
import styled from "styled-components";
import { Btn, Text } from "../elements";
import moment from "moment";



const Header = (props) => {

	const now = moment();
	const HeaderDate = now.clone().format("YYYY.MM");


	return (
		<React.Fragment>
			<HeaderContainer>
				<Toggle>◀</Toggle>
				<Text bold size="60px"> {HeaderDate} </Text>
				<Toggle>▶</Toggle>
			</HeaderContainer>
		</React.Fragment>
	);

};

const HeaderContainer = styled.div`
	width: 1050px;
	height: 200px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const Toggle = styled.button`
	width: 60px;
	height: 60px;
	background-color: #ffffff;
	border: none;
	font-size: 40px;
	font-weight: bold;
	/* text-align: center;
	vertical-align: center; */
`;

export default Header;