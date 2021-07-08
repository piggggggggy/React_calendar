import React from "react";
import styled from "styled-components";




const Date = (props) => {

	const {text, color} = props;

	return (
		<React.Fragment>
			<DateBox>
				<DateNumber color={color}>{text}</DateNumber>
			</DateBox>
		</React.Fragment>
	)


};

Date.defaultProps = {
	text: "",
	color: false,
}

const DateBox = styled.div`
	width: 150px;
	height: 100px;
	margin: 0px;
	border: 1px solid black;
	box-sizing: border-box;

`;


const DateNumber = styled.p`
	color: ${(props) => (props.color? "lightgray":"black")};
`;


export default Date;