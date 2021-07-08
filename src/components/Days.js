import React from "react";
import styled from "styled-components";
import { Text, Grid } from "../elements/index";



const Days = (props) => {

	const {text} = props;

	return (
		<React.Fragment>
			<Day>
				<Text>{text}</Text>
			</Day>
		</React.Fragment>
	)

};

Days.defaultProps = {
	text: 'SUN',
}

const Day = styled.div`
	width: 150px;
	height: 50px;
	border: 1px solid black;
	box-sizing: border-box;
	display: flex;
	justify-content: center;
`;


export default Days;