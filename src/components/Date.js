import React from "react";
import styled from "styled-components";




const Date = (props) => {

	const {text, color, color2, color3} = props;
	const styles = {
		color: color,
		color2: color2,
		color3: color3,
	}
	
	return (
		<React.Fragment>
			<DateBox>
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
}

const DateBox = styled.div`
	width: 150px;
	height: 100px;
	margin: 0px;
	border: 1px solid black;
	box-sizing: border-box;

`;


const DateNumber = styled.p`

	${(props) => (`color: ${props.color2}`)};
	${(props) => (`color: ${props.color3}`)};
	${(props) => (`color: ${props.color}`)};
`;


export default Date;