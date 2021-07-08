import React from "react";
import styled from "styled-components";




const Date = (props) => {

	const {text, color, color2, color3, today} = props;
	const styles = {
		color: color,
		color2: color2,
		color3: color3,
		today: today,
	};
	
	return (
		<React.Fragment>
			<DateBox {...styles}>
				<DateNumber {...styles}>{text}</DateNumber>
			</DateBox>
		</React.Fragment>
	)


};

Date.defaultProps = {
	text: "",
	color: '',
	color2: '',
	color3: '',
	today: false,
}

const DateBox = styled.div`
	width: 150px;
	height: 100px;
	margin: 0px;
	border: 1px solid black;
	box-sizing: border-box;
	${(props) => (props.today? `background-color: lightblue` : '')}
`;


const DateNumber = styled.p`
	${(props) => (`color: ${props.color2}`)};
	${(props) => (`color: ${props.color3}`)};
	${(props) => (`color: ${props.color}`)};
	font-size: 20px;
	font-weight: bold;
`;


export default Date;