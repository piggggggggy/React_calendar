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
				<Btn text="<"/>
				<Text bold size="60px">{HeaderDate}</Text>
				<Btn text=">"/>
			</HeaderContainer>
		</React.Fragment>
	);

};

const HeaderContainer = styled.div`
	width: 1050px;
	height: 300px;
	display: flex;
	justify-content: center;
	align-items: center;
`;


export default Header;